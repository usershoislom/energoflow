const nav = [
  { label: "Platform", href: "#platform" },
  { label: "Grid", href: "#grid" },
  { label: "Generation", href: "#generation" },
  { label: "Architecture", href: "#architecture" },
  { label: "Reliability", href: "#reliability" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-[2px]">
      <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-8 px-6">
        <a href="#top" className="flex items-center gap-3">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="22" height="22" stroke="currentColor" strokeWidth="1" />
            <path d="M13 3.5 6.5 13H12l-1 7.5L17.5 11H12l1-7.5Z" fill="var(--renewable)" />
          </svg>
          <span className="font-mono text-sm font-medium tracking-[0.18em] uppercase">
            UzGrid<span className="text-muted-foreground">/Intelligence</span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <span className="hidden items-center gap-2 md:flex">
            <span className="h-1.5 w-1.5 bg-renewable" />
            <span className="rule-label">System nominal · 50.01 Hz</span>
          </span>
          <a
            href="#access"
            className="border border-border px-4 py-1.5 font-mono text-xs tracking-[0.14em] uppercase transition-colors hover:bg-secondary"
          >
            Request access
          </a>
        </div>
      </div>
    </header>
  );
}
