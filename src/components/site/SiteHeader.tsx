import type { Lang } from "@/content/site";
import { CONTENT } from "@/content/site";

export function SiteHeader({ lang, onLang }: { lang: Lang; onLang: (l: Lang) => void }) {
  const t = CONTENT[lang];
  const nav = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.problem, href: "#problem" },
    { label: t.nav.approach, href: "#approach" },
    { label: t.nav.ai, href: "#ai" },
    { label: t.nav.architecture, href: "#architecture" },
    { label: t.nav.result, href: "#result" },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur-[2px]">
      <div className="mx-auto flex h-14 max-w-[1320px] items-center gap-8 px-6">
        <a href="#top" className="flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="22" height="22" stroke="currentColor" strokeWidth="1" />
            <path d="M13 3.5 6.5 13H12l-1 7.5L17.5 11H12l1-7.5Z" fill="var(--load)" />
          </svg>
          <span className="font-mono text-sm font-medium tracking-[0.16em] uppercase">
            Energo<span className="text-muted-foreground">Flow</span> AI
          </span>
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
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

        <div className="ml-auto flex items-center border border-border">
          {(["ru", "uz"] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => onLang(l)}
              aria-pressed={lang === l}
              className={`px-3 py-1.5 font-mono text-xs tracking-[0.14em] uppercase transition-colors ${
                lang === l
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
