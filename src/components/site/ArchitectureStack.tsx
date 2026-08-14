type Layer = { label: string; items: readonly string[] };

export function ArchitectureStack({ layers }: { layers: readonly Layer[] }) {
  return (
    <div className="flex flex-col">
      {layers.map((layer, i) => {
        const isCore = i === 1;
        return (
          <div key={layer.label}>
            <div
              className={`border p-6 ${
                isCore ? "border-load/60 bg-surface-raised" : "border-border bg-surface"
              }`}
            >
              <p className="rule-label">{layer.label}</p>
              <div className="mt-4 flex flex-wrap gap-px bg-border">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="bg-surface px-4 py-2.5 font-mono text-xs text-foreground/85"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            {i < layers.length - 1 && (
              <div className="flex h-10 flex-col items-center justify-center" aria-hidden="true">
                <span className="h-4 w-px bg-border" />
                <span className="font-mono text-xs text-load">↓</span>
              </div>
            )}

          </div>
        );
      })}
    </div>
  );
}
