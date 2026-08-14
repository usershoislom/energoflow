import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { FlowChain } from "@/components/site/FlowChain";
import { ArchitectureStack } from "@/components/site/ArchitectureStack";
import { CONTENT, type Lang } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Energo Flow AI — интеллектуальный слой энергосистемы Узбекистана" },
      {
        name: "description",
        content:
          "Energo Flow AI — концепция AI-платформы для прогнозирования, координации и оптимизации энергетического потока: генерация, передача, накопление, потребление.",
      },
      {
        property: "og:title",
        content: "Energo Flow AI — интеллектуальный слой энергосистемы Узбекистана",
      },
      {
        property: "og:description",
        content: "Прогнозировать. Координировать. Оптимизировать. Концепция AI-платформы управления энергетическим потоком.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<Lang>("ru");
  const t = CONTENT[lang];

  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader lang={lang} onLang={setLang} />

      <main>
        {/* Hero */}
        <section className="border-b border-border tech-grid">
          <div className="mx-auto max-w-[1320px] px-6 py-20 lg:py-28">
            <p className="rule-label">{t.hero.eyebrow}</p>
            <h1 className="mt-6 max-w-4xl text-4xl leading-[1.1] font-semibold sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <div className="mt-8 h-px w-24 bg-load" />
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {t.hero.lead}
            </p>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              {t.hero.motto.map((m) => (
                <span key={m} className="font-mono text-sm tracking-[0.08em] text-foreground/85">
                  {m}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#about"
                className="bg-foreground px-5 py-2.5 font-mono text-xs tracking-[0.14em] text-background uppercase transition-opacity hover:opacity-90"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#architecture"
                className="border border-border px-5 py-2.5 font-mono text-xs tracking-[0.14em] uppercase transition-colors hover:bg-secondary"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-b border-border">
          <div className="mx-auto max-w-[1320px] px-6 py-16 lg:py-20">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
              <div>
                <p className="rule-label">{t.about.eyebrow}</p>
                <h2 className="mt-4 text-2xl leading-snug font-semibold sm:text-3xl">
                  {t.about.title}
                </h2>
                <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {t.about.body}
                </p>
                <blockquote className="mt-8 border-l-2 border-load pl-5 text-base leading-relaxed text-foreground/90 italic">
                  {t.about.quote}
                </blockquote>
              </div>
              <div className="border border-border bg-surface">
                <p className="rule-label border-b border-border px-5 py-3">
                  {t.about.sourcesLabel}
                </p>
                <ul className="divide-y divide-border">
                  {t.about.sources.map((s) => (
                    <li key={s} className="flex items-center gap-3 px-5 py-3.5">
                      <span className="h-1.5 w-1.5 shrink-0 bg-renewable" />
                      <span className="text-sm text-foreground/90">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section id="problem" className="border-b border-border">
          <div className="mx-auto max-w-[1320px] px-6 py-16 lg:py-20">
            <p className="rule-label">{t.problem.eyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-2xl leading-snug font-semibold sm:text-3xl">
              {t.problem.title}
            </h2>
            <ul className="mt-10 grid gap-px bg-border sm:grid-cols-2 xl:grid-cols-4">
              {t.problem.items.map((item, i) => (
                <li key={item} className="bg-surface p-6">
                  <span className="font-mono text-xs text-load">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/90">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="border-b border-border">
          <div className="mx-auto max-w-[1320px] px-6 py-16 lg:py-20">
            <p className="rule-label">{t.approach.eyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-2xl leading-snug font-semibold sm:text-3xl">
              {t.approach.title}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {t.approach.body}
            </p>
            <div className="mt-10 border border-border">
              <FlowChain stages={t.approach.stages} />
            </div>
            <p className="mt-6 max-w-2xl font-mono text-xs leading-relaxed text-muted-foreground">
              {t.approach.note}
            </p>
          </div>
        </section>

        {/* What AI does */}
        <section id="ai" className="border-b border-border">
          <div className="mx-auto max-w-[1320px] px-6 py-16 lg:py-20">
            <p className="rule-label">{t.ai.eyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-2xl leading-snug font-semibold sm:text-3xl">
              {t.ai.title}
            </h2>
            <ol className="mt-10 grid gap-px bg-border md:grid-cols-2 xl:grid-cols-3">
              {t.ai.items.map((item, i) => (
                <li key={item} className="flex gap-4 bg-surface p-6">
                  <span className="font-mono text-sm text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/90">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Architecture */}
        <section id="architecture" className="border-b border-border tech-grid">
          <div className="mx-auto max-w-[1320px] px-6 py-16 lg:py-20">
            <p className="rule-label">{t.architecture.eyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-2xl leading-snug font-semibold sm:text-3xl">
              {t.architecture.title}
            </h2>
            <div className="mx-auto mt-10 max-w-3xl">
              <ArchitectureStack layers={t.architecture.layers} />
            </div>
          </div>
        </section>

        {/* Forecast */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1320px] px-6 py-16 lg:py-20">
            <p className="rule-label">{t.forecast.eyebrow}</p>
            <h2 className="mt-4 max-w-3xl text-2xl leading-snug font-semibold sm:text-3xl">
              {t.forecast.title}
            </h2>
            <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2">
              {t.forecast.cards.map((c) => (
                <article key={c.title} className="bg-surface p-8">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <span className="mt-4 block h-px w-10 bg-renewable" />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 max-w-2xl font-mono text-xs leading-relaxed text-muted-foreground">
              {t.forecast.note}
            </p>
          </div>
        </section>

        {/* Risks */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1320px] px-6 py-16 lg:py-20">
            <p className="rule-label">{t.risks.eyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-2xl leading-snug font-semibold sm:text-3xl">
              {t.risks.title}
            </h2>
            <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-3">
              {t.risks.cards.map((c) => (
                <article key={c.title} className="bg-surface p-8">
                  <span className="block h-2 w-2 bg-critical" />
                  <h3 className="mt-5 text-base font-semibold">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Optimization */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1320px] px-6 py-16 lg:py-20">
            <p className="rule-label">{t.optimization.eyebrow}</p>
            <h2 className="mt-4 max-w-2xl text-2xl leading-snug font-semibold sm:text-3xl">
              {t.optimization.title}
            </h2>
            <div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-3">
              {t.optimization.cards.map((c) => (
                <article key={c.title} className="bg-surface p-8">
                  <span className="block h-2 w-2 bg-load" />
                  <h3 className="mt-5 text-base font-semibold">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Result */}
        <section id="result" className="border-b border-border">
          <div className="mx-auto max-w-[1320px] px-6 py-16 lg:py-20">
            <p className="rule-label">{t.result.eyebrow}</p>
            <h2 className="mt-4 max-w-3xl text-2xl leading-snug font-semibold sm:text-3xl">
              {t.result.title}
            </h2>
            <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 xl:grid-cols-4">
              {t.result.items.map((r) => (
                <div key={r.title} className="bg-surface p-6">
                  <p className="text-lg font-semibold text-renewable">{r.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <section>
          <div className="mx-auto max-w-[1320px] px-6 py-20 lg:py-24">
            <div className="border border-border bg-surface p-10 lg:p-14">
              <p className="font-mono text-sm tracking-[0.18em] uppercase">Energo Flow AI</p>
              <h2 className="mt-6 max-w-3xl text-2xl leading-snug font-semibold sm:text-3xl">
                {t.closing.title}
              </h2>
              <div className="mt-6 h-px w-24 bg-load" />
              <p className="mt-6 text-sm text-muted-foreground">{t.closing.body}</p>
              <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs tracking-[0.1em] text-foreground/80 uppercase">
                {t.approach.stages.map((s, i) => (
                  <span key={s} className="flex items-center gap-3">
                    {s}
                    {i < t.approach.stages.length - 1 && <span className="text-load">→</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-4 px-6 py-8">
          <p className="rule-label">Energo Flow AI</p>
          <p className="font-mono text-[11px] text-muted-foreground">{t.footer.note}</p>
        </div>
      </footer>
    </div>
  );
}
