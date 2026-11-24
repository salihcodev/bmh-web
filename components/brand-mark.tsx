type Capsule = { kind: "capsule"; x1: number; y1: number; x2: number; y2: number; r: number };
type RoundRect = { kind: "rect"; x: number; y: number; w: number; h: number; r: number };
type Dot = { kind: "circle"; cx: number; cy: number; r: number };
type Diamond = { kind: "diamond"; cx: number; cy: number; s: number };
type Shape = Capsule | RoundRect | Dot | Diamond;

const HAND: Shape[] = [
  { kind: "rect", x: 27, y: 46, w: 46, h: 38, r: 15 },
  { kind: "capsule", x1: 32.5, y1: 26, x2: 32.5, y2: 56, r: 5 },
  { kind: "capsule", x1: 44.2, y1: 18, x2: 44.2, y2: 56, r: 5 },
  { kind: "capsule", x1: 55.8, y1: 20, x2: 55.8, y2: 56, r: 5 },
  { kind: "capsule", x1: 67.5, y1: 28, x2: 67.5, y2: 56, r: 5 },
  { kind: "capsule", x1: 31, y1: 70, x2: 17, y2: 52, r: 5.5 },
];

const HEART: Shape[] = [
  { kind: "circle", cx: 45.8, cy: 62, r: 5.2 },
  { kind: "circle", cx: 54.2, cy: 62, r: 5.2 },
  { kind: "diamond", cx: 50, cy: 65.6, s: 11.6 },
];

function ShapeView({ shape, fill }: { shape: Shape; fill: string }) {
  if (shape.kind === "rect") {
    return <rect x={shape.x} y={shape.y} width={shape.w} height={shape.h} rx={shape.r} fill={fill} />;
  }
  if (shape.kind === "circle") {
    return <circle cx={shape.cx} cy={shape.cy} r={shape.r} fill={fill} />;
  }
  if (shape.kind === "diamond") {
    return (
      <rect
        x={shape.cx - shape.s / 2}
        y={shape.cy - shape.s / 2}
        width={shape.s}
        height={shape.s}
        fill={fill}
        transform={`rotate(45 ${shape.cx} ${shape.cy})`}
      />
    );
  }
  const length = Math.hypot(shape.x2 - shape.x1, shape.y2 - shape.y1);
  const angle = (Math.atan2(shape.y2 - shape.y1, shape.x2 - shape.x1) * 180) / Math.PI;
  return (
    <rect
      x={shape.x1 - shape.r}
      y={shape.y1 - shape.r}
      width={length + shape.r * 2}
      height={shape.r * 2}
      rx={shape.r}
      fill={fill}
      transform={`rotate(${angle} ${shape.x1} ${shape.y1})`}
    />
  );
}

export function BrandMark({
  size = 40,
  tile = false,
  title = "Be My Hand",
}: {
  size?: number;
  tile?: boolean;
  title?: string;
}) {
  const ink = tile ? "#202020" : "currentColor";
  const cutout = tile ? "#c9f158" : "var(--mark-cutout, #f2f3f5)";
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label={title}>
      {tile ? <rect width="100" height="100" rx="28" fill="#c9f158" /> : null}
      <g transform={tile ? "translate(15 15) scale(0.7)" : undefined}>
        {HAND.map((shape, index) => (
          <ShapeView key={`h-${index}`} shape={shape} fill={ink} />
        ))}
        {HEART.map((shape, index) => (
          <ShapeView key={`c-${index}`} shape={shape} fill={cutout} />
        ))}
      </g>
    </svg>
  );
}
