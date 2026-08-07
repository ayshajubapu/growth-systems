import { useEffect, useId, useMemo, useRef, useState, FC } from "react";

interface TextLoopProps {
  text?: string;
  shape?: "wave" | "arc" | "line";
  speed?: number;
  direction?: "forward" | "reverse";
  separator?: string;
  curviness?: number;
  fontSize?: number;
  fontWeight?: number;
  letterSpacing?: number;
  uppercase?: boolean;
  color?: string;
  ribbon?: boolean;
  ribbonColor?: string;
  ribbonWidth?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const VIEW_W = 1440;
const VIEW_H = 220;

const buildPath = (shape: TextLoopProps["shape"], curviness: number) => {
  const mid = VIEW_H / 2;
  const c = curviness;
  switch (shape) {
    case "arc":
      return `M-120,${mid + c / 3} Q${VIEW_W / 2},${mid - c} ${VIEW_W + 120},${mid + c / 3}`;
    case "line":
      return `M-120,${mid} L${VIEW_W + 120},${mid}`;
    case "wave":
    default:
      return `M-120,${mid} C${VIEW_W * 0.18},${mid - c} ${VIEW_W * 0.32},${mid + c} ${VIEW_W * 0.5},${mid} S${VIEW_W * 0.82},${mid + c} ${VIEW_W + 120},${mid}`;
  }
};

const TextLoop: FC<TextLoopProps> = ({
  text = "",
  shape = "wave",
  speed = 90,
  direction = "forward",
  separator = "✦",
  curviness = 90,
  fontSize = 46,
  fontWeight = 800,
  letterSpacing = 2,
  uppercase = false,
  color = "currentColor",
  ribbon = false,
  ribbonColor = "#D4AF37",
  ribbonWidth = 86,
  pauseOnHover = true,
  className = "",
}) => {
  const uid = useId().replace(/:/g, "");
  const pathId = `textloop-${uid}`;
  const pathD = useMemo(() => buildPath(shape, curviness), [shape, curviness]);

  const measureRef = useRef<SVGTextElement | null>(null);
  const textPathRef = useRef<SVGTextPathElement | null>(null);
  const pausedRef = useRef(false);
  const [unitWidth, setUnitWidth] = useState(0);

  const unit = useMemo(() => {
    const base = uppercase ? text.toUpperCase() : text;
    return `${base}\u00A0${separator}\u00A0`;
  }, [text, separator, uppercase]);

  const repeated = unitWidth
    ? Array(Math.ceil((VIEW_W + 400) / unitWidth) + 2)
        .fill(unit)
        .join("")
    : unit;

  useEffect(() => {
    if (measureRef.current) setUnitWidth(measureRef.current.getComputedTextLength());
  }, [unit, fontSize, fontWeight, letterSpacing]);

  useEffect(() => {
    if (!unitWidth) return;
    let raf = 0;
    let last = performance.now();
    let offset = -unitWidth;

    const step = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!pausedRef.current && textPathRef.current) {
        offset += (direction === "reverse" ? speed : -speed) * dt;
        if (offset <= -unitWidth) offset += unitWidth;
        if (offset > 0) offset -= unitWidth;
        textPathRef.current.setAttribute("startOffset", `${offset}px`);
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [unitWidth, speed, direction]);

  return (
    <div
      className={`w-full ${className}`}
      onMouseEnter={() => pauseOnHover && (pausedRef.current = true)}
      onMouseLeave={() => pauseOnHover && (pausedRef.current = false)}
    >
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="w-full block select-none overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <path id={pathId} d={pathD} fill="none" />
        </defs>

        {ribbon && (
          <path
            d={pathD}
            fill="none"
            stroke={ribbonColor}
            strokeWidth={ribbonWidth}
            strokeLinecap="round"
          />
        )}

        <text
          ref={measureRef}
          xmlSpace="preserve"
          fontSize={fontSize}
          fontWeight={fontWeight}
          letterSpacing={letterSpacing}
          style={{ visibility: "hidden", opacity: 0 }}
        >
          {unit}
        </text>

        {unitWidth > 0 && (
          <text
            xmlSpace="preserve"
            fill={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            letterSpacing={letterSpacing}
            dominantBaseline="middle"
          >
            <textPath ref={textPathRef} href={`#${pathId}`} startOffset={`${-unitWidth}px`} xmlSpace="preserve">
              {repeated}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

export default TextLoop;
