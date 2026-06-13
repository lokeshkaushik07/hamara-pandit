import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Gem } from "lucide-react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-maroon font-display">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-maroon-deep font-display">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-maroon px-4 py-2 text-sm font-medium text-gold transition-colors hover:bg-maroon-deep"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-maroon font-display">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-maroon px-4 py-2 text-sm font-medium text-gold transition-colors hover:bg-maroon-deep"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-maroon bg-background px-4 py-2 text-sm font-medium text-maroon transition-colors hover:bg-maroon hover:text-gold"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ratna Vibhushan — Gemstone Guide" },
      { name: "description", content: "Discover the sacred power of gemstones. Browse our complete guide to Vedic astrology gemstones, their benefits, and how to wear them." },
      { name: "author", content: "Ratna Vibhushan" },
      { property: "og:title", content: "Ratna Vibhushan — Gemstone Guide" },
      { property: "og:description", content: "Discover the sacred power of gemstones. Browse our complete guide to Vedic astrology gemstones, their benefits, and how to wear them." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

function Header() {
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold-muted/30 bg-ivory/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <Gem className="h-6 w-6 text-gold transition-transform group-hover:rotate-12" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-maroon font-display tracking-wide">Ratna Vibhushan</span>
            <span className="text-[10px] text-muted-foreground -mt-1 tracking-widest uppercase">Gemstone Guide</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${currentPath === "/" ? "text-maroon border-b-2 border-gold pb-0.5" : "text-muted-foreground hover:text-maroon"}`}
          >
            Home
          </Link>
          <Link
            to="/catalog"
            className={`text-sm font-medium transition-colors ${currentPath === "/catalog" ? "text-maroon border-b-2 border-gold pb-0.5" : "text-muted-foreground hover:text-maroon"}`}
          >
            Catalog
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-maroon"
        aria-label="Toggle menu"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
        )}
      </button>
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-ivory border-b border-gold-muted/30 shadow-lg">
          <nav className="flex flex-col p-4 gap-3">
            <Link to="/" onClick={() => setOpen(false)} className="text-sm font-medium text-maroon hover:text-gold transition-colors">
              Home
            </Link>
            <Link to="/catalog" onClick={() => setOpen(false)} className="text-sm font-medium text-maroon hover:text-gold transition-colors">
              Catalog
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gold-muted/30 bg-maroon text-gold-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Gem className="h-5 w-5 text-gold" />
            <span className="text-base font-bold font-display tracking-wide text-gold-light">Ratna Vibhushan</span>
          </div>
          <p className="text-sm text-center md:text-right">
            Explore the sacred world of Vedic gemstones. Each stone carries cosmic energy — find yours.
          </p>
        </div>
        <div className="mt-6 pt-6 border-t border-gold/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gold-muted/70">
          <p>&copy; {new Date().getFullYear()} Ratna Vibhushan. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-gold-light transition-colors">Home</Link>
            <Link to="/catalog" className="hover:text-gold-light transition-colors">Catalog</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
