export function FlowChain({ stages }: { stages: readonly string[] }) {
  return (
    <div className="flex flex-col gap-px bg-border md:flex-row">
      {stages.map((s, i) => (
        <div key={s} className="relative flex-1 bg-surface px-6 py-8">
          <span className="font-mono text-xs text-muted-foreground">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="mt-3 text-base font-semibold">{s}</p>
          <span className="mt-4 block h-px w-full bg-border" />
          <span
            className="mt-4 block h-1 w-full"
            style={{
              background: `linear-gradient(to right, var(--load) ${((i + 1) / stages.length) * 100}%, var(--border) 0%)`,
              opacity: 0.7,
            }}
          />
          {i < stages.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute top-1/2 -right-2.5 z-10 hidden h-4 w-4 -translate-y-1/2 items-center justify-center bg-background font-mono text-xs text-load md:flex"
            >
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
