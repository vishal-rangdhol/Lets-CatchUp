## Multi-stage Dockerfile for Next.js static export
# Builder: use Bun for fast installs and builds
FROM oven/bun:1-alpine AS builder

WORKDIR /app

# Copy package manifests first to leverage Docker cache
COPY package.json bun.lock* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy rest of the sources
COPY . .

# Build static export into /app/out
RUN bun run build

### Production image: nginx serving static files

FROM nginx:stable-alpine AS production

# Install wget (used by healthcheck) and other small utilities
RUN apk add --no-cache wget

# Generate trusted Cloudflare CIDR list at build time.
RUN set -eux; \
  { \
    echo "# Auto-generated from https://www.cloudflare.com/ips/"; \
    for url in https://www.cloudflare.com/ips-v4 https://www.cloudflare.com/ips-v6; do \
      wget -qO- "$url" | sed 's#^#set_real_ip_from #; s#$#;#'; \
    done; \
  } > /etc/nginx/cloudflare-realip.conf

# Remove default nginx website config
RUN rm -rf /usr/share/nginx/html/*

# Copy static export from builder
COPY --from=builder /app/out /usr/share/nginx/html

# Copy custom nginx config
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Ensure nginx runs in foreground
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]