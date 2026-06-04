import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * HeadingCursor
 * Premium glass cursor that appears under headings (h1/h2/h3) and
 * elements with the `.hover-title` class. Desktop only.
 */
const SELECTOR = "h1, h2, h3, .hover-title";
const SIZE = 150; // px
const OFFSET_Y = 64; // px below cursor
const MAGNETIC = 0.18; // pull toward heading center

const HeadingCursor = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch =
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const el = rootRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = -200;
    let targetX = mouseX;
    let targetY = mouseY;
    let currentX = mouseX;
    let currentY = mouseY;
    let lastX = mouseX;
    let lastY = mouseY;
    let speed = 0;
    let active = false;
    let activeRect: DOMRect | null = null;

    gsap.set(el, { xPercent: -50, yPercent: -50, scale: 0, opacity: 0 });
    if (!reduce) {
      gsap.to(inner, { rotate: 360, duration: 18, repeat: -1, ease: "none" });
    }

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY + OFFSET_Y;
    };

    const isHeading = (node: Element | null): HTMLElement | null => {
      if (!node) return null;
      return (node.closest?.(SELECTOR) as HTMLElement) ?? null;
    };

    const onOver = (e: MouseEvent) => {
      const h = isHeading(e.target as Element);
      if (h && !active) {
        active = true;
        activeRect = h.getBoundingClientRect();
        gsap.to(el, {
          scale: 1,
          opacity: 1,
          duration: 0.9,
          ease: "elastic.out(1, 0.55)",
        });
      } else if (h) {
        activeRect = h.getBoundingClientRect();
      }
    };

    const onOut = (e: MouseEvent) => {
      const from = isHeading(e.target as Element);
      const to = isHeading(e.relatedTarget as Element);
      if (from && !to && active) {
        active = false;
        activeRect = null;
        gsap.to(el, {
          scale: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power3.in",
        });
      }
    };

    const tick = () => {
      targetX = mouseX;
      targetY = mouseY;
      if (active && activeRect) {
        const cx = activeRect.left + activeRect.width / 2;
        const cy = activeRect.top + activeRect.height / 2 + OFFSET_Y;
        targetX += (cx - targetX) * MAGNETIC;
        targetY += (cy - targetY) * MAGNETIC;
      }
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      const dx = currentX - lastX;
      const dy = currentY - lastY;
      const inst = Math.min(60, Math.hypot(dx, dy));
      speed += (inst - speed) * 0.2;
      lastX = currentX;
      lastY = currentY;

      const blur = Math.min(8, speed * 0.25);
      const glow = 0.4 + Math.min(0.6, speed * 0.03);

      gsap.set(el, {
        x: currentX,
        y: currentY,
        filter: `blur(${blur * 0.35}px)`,
      });
      el.style.setProperty("--glow", String(glow));
    };

    gsap.ticker.add(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      gsap.killTweensOf([el, inner]);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{
        width: SIZE,
        height: SIZE,
        willChange: "transform, filter",
      }}
    >
      <div
        ref={innerRef}
        className="relative w-full h-full rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, hsl(190 100% 70% / 0.35), hsl(220 100% 60% / 0.18) 55%, transparent 75%)",
          backdropFilter: "blur(14px) saturate(160%)",
          WebkitBackdropFilter: "blur(14px) saturate(160%)",
          border: "1px solid hsl(190 100% 80% / 0.35)",
          boxShadow:
            "0 0 calc(60px * var(--glow, 0.5)) hsl(190 100% 60% / calc(0.55 * var(--glow, 0.5))), inset 0 0 30px hsl(200 100% 80% / 0.18)",
        }}
      >
        {/* particles */}
        {[
          { t: "12%", l: "30%", s: 4 },
          { t: "70%", l: "22%", s: 3 },
          { t: "40%", l: "75%", s: 5 },
          { t: "80%", l: "65%", s: 2 },
          { t: "25%", l: "60%", s: 3 },
        ].map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              top: p.t,
              left: p.l,
              width: p.s,
              height: p.s,
              background: "hsl(190 100% 85%)",
              boxShadow: "0 0 8px hsl(190 100% 70% / 0.9)",
              animationDuration: `${2 + i * 0.4}s`,
            }}
          />
        ))}
        <div
          className="absolute inset-2 rounded-full"
          style={{
            border: "1px dashed hsl(190 100% 80% / 0.25)",
          }}
        />
      </div>
    </div>
  );
};

export default HeadingCursor;
