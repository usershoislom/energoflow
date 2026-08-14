type Node = {
  id: string;
  name: string;
  x: number;
  y: number;
  kind: "thermal" | "hydro" | "renewable" | "hub";
  mw: number;
  status: "nominal" | "load" | "critical";
};

export const NODES: Node[] = [
  { id: "TSH", name: "Toshkent", x: 640, y: 158, kind: "hub", mw: 2140, status: "load" },
  { id: "SYR", name: "Sirdaryo TPP", x: 566, y: 214, kind: "thermal", mw: 3050, status: "nominal" },
  { id: "NAV", name: "Navoiy TPP", x: 400, y: 236, kind: "thermal", mw: 1780, status: "nominal" },
  { id: "TAL", name: "Talimarjon", x: 452, y: 320, kind: "thermal", mw: 1600, status: "load" },
  { id: "CHR", name: "Charvoq HPP", x: 690, y: 128, kind: "hydro", mw: 620, status: "nominal" },
  { id: "AND", name: "Andijon", x: 786, y: 190, kind: "hydro", mw: 190, status: "critical" },
  { id: "BUX", name: "Buxoro PV", x: 302, y: 268, kind: "renewable", mw: 250, status: "nominal" },
  { id: "QRQ", name: "Qoraqalpogʻiston WPP", x: 148, y: 128, kind: "renewable", mw: 500, status: "nominal" },
  { id: "XOR", name: "Xorazm PV", x: 196, y: 196, kind: "renewable", mw: 220, status: "nominal" },
  { id: "SAM", name: "Samarqand", x: 490, y: 272, kind: "hub", mw: 860, status: "nominal" },
  { id: "QSH", name: "Qarshi", x: 428, y: 352, kind: "hub", mw: 540, status: "nominal" },
  { id: "TRM", name: "Termiz", x: 470, y: 420, kind: "hub", mw: 380, status: "load" },
];

const LINES: [string, string, number][] = [
  ["QRQ", "XOR", 220],
  ["XOR", "BUX", 220],
  ["BUX", "NAV", 500],
  ["NAV", "SAM", 500],
  ["SAM", "SYR", 500],
  ["SYR", "TSH", 500],
  ["TSH", "CHR", 220],
  ["TSH", "AND", 500],
  ["SAM", "TAL", 220],
  ["TAL", "QSH", 220],
  ["QSH", "TRM", 220],
  ["NAV", "TAL", 220],
  ["SYR", "AND", 220],
];

const KIND_COLOR: Record<Node["kind"], string> = {
  thermal: "var(--thermal)",
  hydro: "var(--hydro)",
  renewable: "var(--renewable)",
  hub: "var(--foreground)",
};

const STATUS_COLOR: Record<Node["status"], string> = {
  nominal: "var(--renewable)",
  load: "var(--load)",
  critical: "var(--critical)",
};

const UZ_OUTLINE =
  "M96 150 L120 96 L182 74 L236 92 L268 76 L318 96 L352 78 L398 104 L436 96 L470 120 L520 118 L556 142 L600 132 L636 142 L664 120 L706 112 L742 132 L790 152 L836 176 L822 208 L780 216 L742 198 L700 206 L668 190 L630 200 L596 190 L560 214 L520 226 L500 258 L520 300 L498 336 L468 356 L486 402 L472 442 L442 436 L424 396 L394 356 L358 330 L318 306 L272 298 L232 274 L196 254 L168 226 L128 206 L100 182 Z";

export function UzbekistanGrid() {
  const byId: Record<string, Node> = Object.fromEntries(NODES.map((n) => [n.id, n]));


  return (
    <svg viewBox="0 0 900 480" className="h-auto w-full" role="img" aria-label="Power grid topology of Uzbekistan with generation nodes and transmission corridors">
      <defs>
        <pattern id="uzhatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="var(--grid-line)" strokeWidth="1" />
        </pattern>
      </defs>

      <g opacity="0.5">
        {Array.from({ length: 15 }, (_, i) => (
          <line key={`v${i}`} x1={i * 64} y1="0" x2={i * 64} y2="480" stroke="var(--grid-line)" strokeWidth="0.5" />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 64} x2="900" y2={i * 64} stroke="var(--grid-line)" strokeWidth="0.5" />
        ))}
      </g>

      <path d={UZ_OUTLINE} fill="url(#uzhatch)" stroke="var(--muted-foreground)" strokeWidth="1.25" />

      {LINES.map(([a, b, kv]) => {
        const from = byId[a]!;
        const to = byId[b]!;
        return (

          <g key={`${a}-${b}`}>
            <line
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={kv === 500 ? "var(--load)" : "var(--muted-foreground)"}
              strokeWidth={kv === 500 ? 1.4 : 0.9}
              strokeOpacity={kv === 500 ? 0.85 : 0.5}
              strokeDasharray={kv === 500 ? undefined : "4 3"}
            />
          </g>
        );
      })}

      {NODES.map((n) => (
        <g key={n.id}>
          <rect
            x={n.x - 5}
            y={n.y - 5}
            width="10"
            height="10"
            fill="var(--background)"
            stroke={KIND_COLOR[n.kind]}
            strokeWidth="1.5"
          />
          <rect x={n.x - 1.5} y={n.y - 1.5} width="3" height="3" fill={STATUS_COLOR[n.status]} />
          <text
            x={n.x + 11}
            y={n.y + 3.5}
            fill="var(--foreground)"
            fontSize="10.5"
            fontFamily="var(--font-mono)"
            opacity="0.82"
          >
            {n.name}
          </text>
          <text
            x={n.x + 11}
            y={n.y + 16}
            fill="var(--muted-foreground)"
            fontSize="9.5"
            fontFamily="var(--font-mono)"
          >
            {n.mw.toLocaleString("en-US")} MW
          </text>
        </g>
      ))}
    </svg>
  );
}
