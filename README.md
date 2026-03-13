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
