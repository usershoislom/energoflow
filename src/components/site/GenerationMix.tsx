const MIX = [
  { label: "Thermal (gas)", share: 58.2, color: "var(--thermal)" },
  { label: "Hydro", share: 12.4, color: "var(--hydro)" },
  { label: "Solar PV", share: 14.1, color: "var(--renewable)" },
  { label: "Wind", share: 8.6, color: "var(--renewable)" },
  { label: "Imports / balancing", share: 6.7, color: "var(--load)" },
];

// 24h load curve, GW
const LOAD = [
  8.9, 8.4, 8.1, 8.0, 8.2, 8.9, 10.1, 11.4, 12.2, 12.6, 12.8, 13.1, 13.4, 13.2, 12.9, 12.7, 13.3,
  14.6, 15.2, 14.8, 13.7, 12.4, 10.9, 9.6,
];

export function GenerationMix() {
  const max = Math.max(...LOAD);

  return (
    <div className="grid gap-px bg-border lg:grid-cols-[1fr_1.25fr]">
      <div className="bg-surface p-6">
        <p className="rule-label">Generation mix · rolling 24h</p>
        <div className="mt-6 flex h-3 w-full overflow-hidden">
          {MIX.map((m) => (
            <div key={m.label} style={{ width: `${m.share}%`, backgroundColor: m.color }} />
          ))}
        </div>
        <dl className="mt-6 divide-y divide-border">
          {MIX.map((m) => (
            <div key={m.label} className="flex items-center gap-3 py-2.5">
              <span className="h-2 w-2 shrink-0" style={{ backgroundColor: m.color }} />
              <dt className="text-sm text-muted-foreground">{m.label}</dt>
              <dd className="ml-auto font-mono text-sm tabular-nums">{m.share.toFixed(1)}%</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="bg-surface p-6">
        <div className="flex items-baseline justify-between">
          <p className="rule-label">National load curve · GW</p>
          <p className="font-mono text-xs text-muted-foreground">peak 15.2 GW · 19:00</p>
        </div>
        <div className="relative mt-6 h-56">
          <div className="absolute inset-0 flex flex-col justify-between">
            {[16, 12, 8, 4].map((g) => (
              <div key={g} className="flex items-center gap-3">
                <span className="w-6 font-mono text-[10px] text-muted-foreground">{g}</span>
                <span className="h-px flex-1 bg-border" />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 ml-9 flex items-end gap-[3px]">
            {LOAD.map((v, i) => (
              <div
                key={i}
                className="flex-1"
                style={{
                  height: `${(v / max) * 100}%`,
                  backgroundColor: v > 14 ? "var(--load)" : "var(--muted-foreground)",
                  opacity: v > 14 ? 0.95 : 0.55,
                }}
              />
            ))}
          </div>
        </div>
        <div className="mt-3 ml-9 flex justify-between font-mono text-[10px] text-muted-foreground">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
          <span>24:00</span>
        </div>
      </div>
    </div>
  );
}
