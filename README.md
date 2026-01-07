# Ayno - Real-time Infrastructure UI

A modern, high-performance frontend for the Ayno Realtime Engine. Built with Next.js 16, React 19, and TypeScript for optimal performance and developer experience.

## Overview

Ayno UI is the official marketing and documentation frontend for the **Ayno Realtime Infrastructure** - a multi-tenant realtime platform that powers chat, trading, gaming, and any realtime application.

### Key Features

- **Lightning-Fast**: Built on Next.js with server-side rendering and static optimization
- **Responsive Design**: Mobile-first approach with Tailwind CSS and shadcn/ui components
- **Beautiful Components**: 30+ pre-built Radix UI components for consistent UX
- **Documentation**: Integrated documentation site with code examples
- **Dark Mode**: Native dark mode support with next-themes
- **Accessibility**: WCAG 2.1 AA compliant with Radix primitives
- **Analytics**: Built-in Vercel Analytics for tracking user engagement

## Quick Start

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm, yarn, pnpm, or bun package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Youssef-joe/polyglot
cd Ayno_UI/Ayno_UI

# Install dependencies
npm install
# or: pnpm install / yarn install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

The site will automatically reload as you edit components.

### Production Build

```bash
npm run build
npm start
```

## Architecture

### Directory Structure

```
Ayno_UI/
├── app/                        # Next.js App Router
│   ├── page.tsx               # Home page with particle animation
│   ├── layout.tsx             # Root layout
│   ├── globals.css            # Global styles
│   └── docs/                  # Documentation pages
├── components/                 # Reusable React components
│   ├── ui/                    # shadcn/ui components (30+)
│   ├── header.tsx             # Navigation header
│   ├── hero.tsx               # Hero section
│   ├── features.tsx           # Features showcase
│   ├── code-examples.tsx      # Interactive code samples
│   ├── stats.tsx              # Performance statistics
│   ├── cta.tsx                # Call-to-action section
│   ├── footer.tsx             # Footer
│   ├── docs-sidebar.tsx       # Documentation navigation
│   ├── theme-provider.tsx     # Theme configuration
│   └── ayno-logo.tsx          # Logo component
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions
├── public/                     # Static assets
├── styles/                     # Global style configuration
├── next.config.mjs            # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── postcss.config.mjs         # PostCSS plugins

```

## Technology Stack

### Frontend Framework
- **Next.js 16** - React framework with App Router
- **React 19** - UI library with hooks
- **TypeScript 5** - Type-safe JavaScript

### UI & Styling
- **Tailwind CSS 4** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Radix UI** - Unstyled, accessible component library
- **Lucide React** - SVG icon library
- **class-variance-authority** - Type-safe CSS utilities

### Forms & Validation
- **React Hook Form** - Performant form library
- **Zod** - Runtime schema validation
- **@hookform/resolvers** - Integration with validation libraries

### Utilities
- **date-fns** - Modern date utility library
- **clsx** - Classname concatenation utility
- **tailwind-merge** - Merge Tailwind CSS classes

### Charts & Visualization
- **Recharts** - React charting library
- **Embla Carousel** - Carousel component
- **React Resizable Panels** - Resizable layout panels

### Code Display
- **react-syntax-highlighter** - Code highlighting

### Notifications
- **Sonner** - Toast notification library

### Theme Management
- **next-themes** - Dark mode support

### Analytics
- **@vercel/analytics** - User engagement tracking

## Core Components

### Pages
- **Home Page** (`app/page.tsx`) - Landing page with animated particle background
- **Documentation** (`app/docs/`) - API and integration documentation

### Sections
- **Header** - Navigation bar with logo and links
- **Hero** - Main headline and value proposition
- **Features** - Key features of Ayno realtime engine
- **CodeExamples** - Interactive API usage examples
- **Stats** - Performance metrics and benchmarks
- **CTA** - Call-to-action for getting started
- **Footer** - Links and social media

### UI Components
30+ Radix UI components including:
- Buttons, Forms, Inputs
- Dialogs, Dropdowns, Menus
- Tabs, Accordions, Carousels
- Toasts, Tooltips, Popovers
- Progress bars, Sliders, Switches

## Configuration

### Environment Variables

Create a `.env.local` file:

```bash
# Analytics (optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_WS_URL=ws://localhost:4000
```

### Tailwind CSS

Configuration is in `tailwind.config.ts`:
- Dark mode enabled by default
- Custom color palette
- Extended font family (Playfair Display)

### Next.js Configuration

See `next.config.mjs` for:
- Image optimization
- Bundle analysis
- Performance tuning

## Development

### Available Scripts

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Format code
npm run format  # if configured
```

### Component Development

All components are co-located in `components/` directory:

```typescript
// Example: Creating a new component
import { Button } from "@/components/ui/button"

export function MyComponent() {
  return <Button>Click me</Button>
}
```

### Styling with Tailwind

Components use Tailwind CSS utility classes:

```typescript
<div className="flex items-center justify-between gap-4 p-4 rounded-lg border">
  {/* content */}
</div>
```

Use `cn()` utility from `lib/utils.ts` to merge classnames:

```typescript
import { cn } from "@/lib/utils"

export function Card({ className, ...props }) {
  return (
    <div className={cn("rounded-lg border", className)} {...props} />
  )
}
```

## Connecting to Ayno Backend

### API Configuration

The UI communicates with the Ayno realtime engine (polyglot backend):

```bash
# Backend runs on
http://localhost:4000         # HTTP API
ws://localhost:4000/socket    # WebSocket

# Configure in environment
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_WS_URL=ws://localhost:4000
```

### Example: Using the API

```typescript
// Fetch from Ayno backend
const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/apps/demo-app/channels/room:test/history`
)
const data = await response.json()
```

### WebSocket Connection

```typescript
// Example WebSocket connection (for future implementation)
const socket = new WebSocket(process.env.NEXT_PUBLIC_WS_URL)

socket.onmessage = (event) => {
  const message = JSON.parse(event.data)
  // Handle message
}
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker

```bash
# Build image
docker build -t ayno-ui:latest .

# Run container
docker run -p 3000:3000 ayno-ui:latest
```

### Manual Deployment

```bash
# Build
npm run build

# Copy `out/` directory to your server
# Or run: npm start
```

## Performance

### Optimization Features

- **Server-Side Rendering** (SSR) - Built-in with Next.js
- **Static Generation** - Pages pre-rendered at build time
- **Image Optimization** - Automatic WebP conversion
- **Code Splitting** - Route-based code splitting
- **CSS Optimization** - Tailwind purging unused styles
- **Analytics** - Vercel Analytics for Core Web Vitals

### Metrics

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **Bundle Size**: ~100KB gzipped

## Styling & Design

### Design System

- **Colors**: Gold (#b8860b), Cyan (#00d9ff), Green (#7ec850), Dark (#0d0d14)
- **Typography**: Playfair Display (headings), Inter (body)
- **Spacing**: 4px base unit, 8px increments
- **Shadows**: Subtle elevation system
- **Borders**: 1px solid, rounded corners 8-12px

### Dark Mode

Enabled by default, managed via `next-themes`:

```typescript
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle Theme
    </button>
  )
}
```

## Documentation

### Code Examples

Interactive examples in `components/code-examples.tsx` showcase:
- WebSocket connection
- HTTP API usage
- Event publishing
- History retrieval

### Adding Documentation

1. Create file in `app/docs/`
2. Add to sidebar in `components/docs-sidebar.tsx`
3. Import components as needed

## Contributing

### Code Style

- **TypeScript** strict mode
- **ESLint** configuration in `.eslintrc.json`
- **Prettier** for formatting (configured in `next.config.mjs`)

### Creating Components

1. Use shadcn/ui components as base
2. Compose with custom logic
3. Keep components small and focused
4. Document prop types with JSDoc

## Troubleshooting

### Common Issues

**Port 3000 already in use**
```bash
npm run dev -- -p 3001
```

**Module not found**
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Styling not applying**
- Check Tailwind CSS configuration
- Clear `.next` folder: `rm -rf .next`
- Restart development server

**TypeScript errors**
```bash
# Generate types
npm run build
```

## Monitoring

### Vercel Analytics

Automatic tracking of:
- Page views
- Core Web Vitals
- Custom events

View in [Vercel Dashboard](https://vercel.com)

## Related Projects

- **Ayno Backend** (Polyglot) - `/media/youssef/New Volume/Projects/polyglot/polyglot`
- **Documentation** - See `app/docs/`

## Resources

### External Links
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com)

### Guides
- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS Utilities](https://tailwindcss.com/docs/utility-first)
- [React Hooks](https://react.dev/reference/react)

## License

MIT

## Support

For issues or questions:
1. Check [GitHub Issues](https://github.com/Youssef-joe/polyglot/issues)
2. Review documentation in `app/docs/`
3. Check backend logs: `docker logs polyglot_1`
