import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { UzbekistanGrid, NODES } from "@/components/site/UzbekistanGrid";
import { GenerationMix } from "@/components/site/GenerationMix";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UzGrid Intelligence — National Energy Infrastructure Platform" },
      {
        name: "description",
        content:
          "Grid-wide monitoring, load forecasting and dispatch intelligence for Uzbekistan's power system: generation mix, transmission topology and reliability metrics in one control surface.",
      },
      {
        property: "og:title",
        content: "UzGrid Intelligence — National Energy Infrastructure Platform",
      },
      {
        property: "og:description",
        content:
          "Monitoring, forecasting and dispatch intelligence for Uzbekistan's national power grid.",
      },
    ],
  }),
  component: Index,
});

const KPI = [
  { label: "System load", value: "13.42", unit: "GW", note: "+2.1% vs 24h" },
  { label: "Frequency", value: "50.01", unit: "Hz", note: "within ±0.05" },
  { label: "Renewable share", value: "22.7", unit: "%", note: "target 25% / 2030", accent: "renewable" },
  { label: "Reserve margin", value: "8.4", unit: "%", note: "advisory threshold", accent: "load" },
  { label: "Transmission losses", value: "6.9", unit: "%", note: "-0.8 pt YoY" },
];

const CAPABILITIES = [
  {
    idx: "01",
    title: "Load forecasting",
    body: "Day-ahead and intraday demand forecasts per region, corrected for temperature, irrigation season and industrial schedules.",
  },
  {
    idx: "02",
    title: "Dispatch optimisation",
    body: "Unit commitment across thermal, hydro and renewable assets under fuel, ramp-rate and corridor constraints.",
  },
  {
    idx: "03",
    title: "Topology monitoring",
    body: "State estimation over 500 kV and 220 kV corridors with contingency screening on every substation node.",
  },
  {
    idx: "04",
    title: "Asset risk",
    body: "Condition scoring for transformers, turbines and lines, ranked by criticality and time-to-intervention.",
  },
];

const PIPELINE = [
  { stage: "Field layer", detail: "SCADA · PMU · smart metering · weather stations" },
  { stage: "Ingest", detail: "IEC 60870-5-104 / IEC 61850 · 1 s resolution telemetry" },
  { stage: "Model layer", detail: "State estimation · forecasting · constraint solver" },
  { stage: "Control surface", detail: "Dispatch console · alarms · regional operator views" },
];

const RELIABILITY = [
  { region: "Toshkent", saidi: "42", saifi: "1.8", load: "2,140", status: "Elevated load" },
  { region: "Samarqand", saidi: "68", saifi: "2.4", load: "860", status: "Nominal" },
  { region: "Farg'ona valley", saidi: "91", saifi: "3.1", load: "1,320", status: "Constraint" },
  { region: "Buxoro", saidi: "57", saifi: "2.0", load: "610", status: "Nominal" },
  { region: "Qashqadaryo", saidi: "74", saifi: "2.6", load: "540", status: "Nominal" },
  { region: "Qoraqalpogʻiston", saidi: "118", saifi: "3.9", load: "430", status: "Critical" },
];

function statusColor(status: string) {
  if (status === "Critical") return "text-critical";
  if (status === "Constraint" || status === "Elevated load") return "text-load";
  return "text-muted-foreground";
}

function Index() {
  const renewableNodes = NODES.filter((n) => n.kind === "renewable").length;

  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-16 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,460px)_1fr] lg:gap-16">
              <div>
                <p className="rule-label">Republic of Uzbekistan · Unified power system</p>
                <h1 className="mt-6 text-4xl leading-[1.08] font-semibold sm:text-5xl">
                  Operational intelligence for national energy infrastructure.
                </h1>
                <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                  A single control surface across generation, transmission and demand — combining
                  live telemetry with forecasting and constraint models so operators can dispatch
                  with confidence, not estimation.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#access"
                    className="bg-foreground px-5 py-2.5 font-mono text-xs tracking-[0.14em] text-background uppercase transition-opacity hover:opacity-90"
                  >
                    Request access
                  </a>
                  <a
                    href="#architecture"
                    className="border border-border px-5 py-2.5 font-mono text-xs tracking-[0.14em] uppercase transition-colors hover:bg-secondary"
                  >
                    System architecture
                  </a>
                </div>
                <dl className="mt-12 grid grid-cols-3 gap-px border border-border bg-border">
                  {[
                    ["Substation nodes", "1,284"],
                    ["Monitored corridors", "312"],
                    ["Renewable sites", String(renewableNodes * 9)],
                  ].map(([k, v]) => (
                    <div key={k} className="bg-surface px-4 py-4">
                      <dd className="font-mono text-xl tabular-nums">{v}</dd>
                      <dt className="mt-1 text-xs text-muted-foreground">{k}</dt>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="border border-border bg-surface">
                <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                  <p className="rule-label">Grid topology · live</p>
                  <p className="font-mono text-[11px] text-muted-foreground">
                    500 kV / 220 kV · 12 primary nodes
                  </p>
                </div>
                <div className="p-2">
                  <UzbekistanGrid />
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border px-4 py-3">
                  {[
                    ["Thermal", "var(--thermal)"],
                    ["Hydro", "var(--hydro)"],
                    ["Renewable", "var(--renewable)"],
                    ["Load centre", "var(--foreground)"],
                    ["Critical", "var(--critical)"],
                  ].map(([label, color]) => (
                    <span key={label} className="flex items-center gap-2">
                      <span className="h-2 w-2" style={{ backgroundColor: color }} />
                      <span className="rule-label">{label}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KPI strip */}
        <section id="platform" className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6">
            <div className="grid gap-px bg-border md:grid-cols-3 xl:grid-cols-5">
              {KPI.map((k) => (
                <div key={k.label} className="bg-background px-6 py-7">
                  <p className="rule-label">{k.label}</p>
                  <p className="mt-3 font-mono text-3xl tabular-nums">
                    <span
                      className={
                        k.accent === "renewable"
                          ? "text-renewable"
                          : k.accent === "load"
                            ? "text-load"
                            : undefined
                      }
                    >
                      {k.value}
                    </span>
                    <span className="ml-1.5 text-sm text-muted-foreground">{k.unit}</span>
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">{k.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Generation */}
        <section id="generation" className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-16">
            <div className="mb-8 max-w-2xl">
              <p className="rule-label">02 · Generation and demand</p>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Every megawatt accounted for, from plant to feeder.
              </h2>
            </div>
            <div className="border border-border">
              <GenerationMix />
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section id="grid" className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-16">
            <div className="mb-10 max-w-2xl">
              <p className="rule-label">03 · Platform modules</p>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Engineering models, not dashboards for their own sake.
              </h2>
            </div>
            <div className="grid gap-px bg-border md:grid-cols-2 xl:grid-cols-4">
              {CAPABILITIES.map((c) => (
                <article key={c.idx} className="bg-surface p-6">
                  <p className="font-mono text-xs text-muted-foreground">{c.idx}</p>
                  <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture / data flow */}
        <section id="architecture" className="border-b border-border tech-grid">
          <div className="mx-auto max-w-[1400px] px-6 py-16">
            <div className="mb-10 max-w-2xl">
              <p className="rule-label">04 · Data flow</p>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                From field telemetry to dispatch decision in under two seconds.
              </h2>
            </div>
            <ol className="grid gap-px bg-border md:grid-cols-4">
              {PIPELINE.map((p, i) => (
                <li key={p.stage} className="relative bg-surface p-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-renewable">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{p.stage}</h3>
                  <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                    {p.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Reliability table */}
        <section id="reliability" className="border-b border-border">
          <div className="mx-auto max-w-[1400px] px-6 py-16">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <p className="rule-label">05 · Reliability register</p>
                <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                  Regional supply performance
                </h2>
              </div>
              <p className="font-mono text-xs text-muted-foreground">
                SAIDI min/customer · SAIFI interruptions/customer · trailing 12 months
              </p>
            </div>
            <div className="overflow-x-auto border border-border">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="bg-surface-raised">
                    {["Region", "SAIDI", "SAIFI", "Peak load, MW", "Status"].map((h) => (
                      <th
                        key={h}
                        className="border-b border-border px-4 py-3 text-left font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {RELIABILITY.map((r) => (
                    <tr key={r.region} className="bg-surface transition-colors hover:bg-surface-raised">
                      <td className="border-b border-border px-4 py-3">{r.region}</td>
                      <td className="border-b border-border px-4 py-3 font-mono tabular-nums">
                        {r.saidi}
                      </td>
                      <td className="border-b border-border px-4 py-3 font-mono tabular-nums">
                        {r.saifi}
                      </td>
                      <td className="border-b border-border px-4 py-3 font-mono tabular-nums">
                        {r.load}
                      </td>
                      <td
                        className={`border-b border-border px-4 py-3 font-mono text-xs ${statusColor(r.status)}`}
                      >
                        {r.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Access */}
        <section id="access">
          <div className="mx-auto max-w-[1400px] px-6 py-20">
            <div className="grid gap-10 border border-border bg-surface p-10 lg:grid-cols-[1.2fr_1fr] lg:p-14">
              <div>
                <p className="rule-label">Deployment</p>
                <h2 className="mt-4 max-w-lg text-2xl leading-snug font-semibold sm:text-3xl">
                  Deployed on-premise inside the operator perimeter, or in sovereign cloud.
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                  Access is granted to system operators, regional distribution companies and
                  ministry-level analysts. Integration begins with a read-only telemetry link and a
                  four-week parallel run against existing dispatch practice.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4 border-l border-border pl-0 lg:pl-10">
                <a
                  href="mailto:operations@uzgrid.uz"
                  className="bg-foreground px-5 py-3 text-center font-mono text-xs tracking-[0.14em] text-background uppercase transition-opacity hover:opacity-90"
                >
                  operations@uzgrid.uz
                </a>
                <a
                  href="#platform"
                  className="border border-border px-5 py-3 text-center font-mono text-xs tracking-[0.14em] uppercase transition-colors hover:bg-secondary"
                >
                  Technical briefing
                </a>
                <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                  Compliance: IEC 61850 · IEC 62443 · national critical-infrastructure regulation
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-8">
          <p className="rule-label">UzGrid Intelligence · National energy infrastructure platform</p>
          <p className="font-mono text-[11px] text-muted-foreground">
            Telemetry sample · not an operational feed
          </p>
        </div>
      </footer>
    </div>
  );
}
