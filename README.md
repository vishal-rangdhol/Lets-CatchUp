# Let’s Catch Up - Modern LMS Platform

This is a high-fidelity Next.js application built with a focus on architectural design, smooth motion, and AI-powered educational tools.

## Tech Stack & Libraries

### Framework & Core

- **Next.js 15 (App Router)**: React framework for production.
- **React 19**: The latest React features and performance.
- **TypeScript**: Type-safe development.

### AI Integration

- **Genkit 1.x**: Orchestration for Generative AI.
- **Google Generative AI (Gemini 2.5 Flash)**: Powering course recommendations and insights.

### UI & Styling

- **Tailwind CSS**: Utility-first CSS framework.
- **Shadcn UI**: High-quality accessible components (built on Radix UI).
- **Framer Motion**: Advanced physics-based animations.
- **GSAP**: Robust timeline-based animations for the hero section.
- **Lucide React**: Clean and consistent iconography.
- **Space Grotesk & Inter**: Premium font pairings for headline and body text.

### Visual Effects

- **Three.js / React Three Fiber**: 3D rendering for the interactive global particle background.
- **React Three Drei**: Helper library for Three.js.

### Form Handling & Validation

- **React Hook Form**: Performant form management.
- **Zod**: Schema-based type safety and validation.

### UI Components

- **Radix UI Primitive**: Low-level accessible components (Accordion, Dialog, Tabs, etc.).
- **Embla Carousel**: Fluid carousel implementation.
- **Recharts**: Composited chart library for analytics.
- **React Day Picker**: Date selection utilities.

### Backend & Infrastructure

- **Firebase**: Authentication and database (optional/scaffolded).
- **Dotenv**: Environment variable management.

## Getting Started

To run the project locally:

1. `npm install`
2. `npm run dev`

Visit [http://localhost:9002](http://localhost:9002) to see the app.

## Contact Submission API

This project now includes a contact submission endpoint at `/api/contact`.

Request body:

```json
{
  "name": "Jane Williams",
  "email": "jane@company.com",
  "phone": "+91 9876543210",
  "company_name": "Acme Learning",
  "designation": "Parent",
  "subject": "Partnership",
  "message": "We want to explore a pilot.",
  "source": "website"
}
```

Optional environment variables:

- `NEXT_PUBLIC_CONTACT_API_URL`: Full public endpoint used by browser forms (recommended for static export), for example `https://api.yourdomain.com/api/public/contact`.
- `NEXT_PUBLIC_API_URL`: Base API URL fallback used when `NEXT_PUBLIC_CONTACT_API_URL` is not set.
- `CONTACT_WEBHOOK_URL`: Forward validated submissions to your backend/email automation endpoint.
- `CONTACT_WEBHOOK_TOKEN`: Included as `x-contact-webhook-token` header when forwarding.

If `CONTACT_WEBHOOK_URL` is not set, the endpoint accepts requests and logs submission metadata to the server console.

Browser form submission behavior:

1. Uses `NEXT_PUBLIC_CONTACT_API_URL` when provided.
2. Otherwise derives `${NEXT_PUBLIC_API_URL}/api/public/contact`.
3. Falls back to `/api/contact` for local/full-stack runtime.

## Cloudflare Pages Deployment (Static Export)

This project is configured for static export (`next.config.ts` uses `output: 'export'`).

1. Install dependencies and build:
   - `npm install`
   - `npm run build`
2. Ensure output exists at `out/`.
3. Deploy with Wrangler Pages:
   - `npx wrangler pages deploy out --project-name <your-pages-project-name>`

Recommended Cloudflare Pages build settings:

- Build command: `npm run build`
- Build output directory: `out`
- Framework preset: `None` (static)

Important:

- Do not configure Worker service bindings like `WORKER_SELF_REFERENCE` for this static Pages deployment.
- If you previously configured a service binding to `nextn`, remove it from the Pages project settings to avoid error `code: 10143`.

### Static export limitation

`output: 'export'` does not run Next.js API routes in production. If you need `/api/contact` in production, deploy to a server/runtime that supports App Router route handlers (for example, Vercel, a Node server, or Cloudflare Workers with a compatible adapter), or move contact handling to an external API URL.
