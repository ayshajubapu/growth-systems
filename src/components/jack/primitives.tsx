import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState, ReactNode, ElementType, CSSProperties } from "react";

/* ───── FadeIn ───── */
type FadeInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.7,
  y = 30,
  x = 0,
  as = "div",
  className,
  style,
}: FadeInProps) => {
  const MotionTag = motion.create(as as any);
  return (
    <MotionTag
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
    >
      {children}
    </MotionTag>
  );
};

/* ───── Magnet ───── */
type MagnetProps = {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  style?: CSSProperties;
};

export const Magnet = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
  style,
}: MagnetProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const within =
        Math.abs(dx) < r.width / 2 + padding && Math.abs(dy) < r.height / 2 + padding;
      if (within) setPos({ x: dx / strength, y: dy / strength, active: true });
      else setPos({ x: 0, y: 0, active: false });
    };
    window.addEventListener("mousemove", handle, { passive: true });
    return () => window.removeEventListener("mousemove", handle);
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: pos.active ? activeTransition : inactiveTransition,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

/* ───── ContactButton ───── */
type BtnProps = { label?: string; href?: string; className?: string };

export const ContactButton = ({
  label = "Let's Talk",
  href = "/contact",
  className = "",
}: BtnProps) => (
  <a
    href={href}
    className={`relative inline-block rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-transform duration-300 hover:scale-[1.03] ${className}`}
    style={{
      background:
        "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
      boxShadow:
        "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
      outline: "2px solid #ffffff",
      outlineOffset: "-3px",
    }}
  >
    {label}
  </a>
);

export const LiveProjectButton = ({ label = "Visit Site", href = "#" }: BtnProps) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm hover:bg-[#D7E2EA]/10 transition-colors"
  >
    {label}
  </a>
);

/* ───── AnimatedText (character-by-character scroll reveal) ───── */
export const AnimatedText = ({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: CSSProperties;
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when bottom of text at 80% viewport, 1 when top of text at 20%
      const start = vh * 0.8;
      const end = vh * 0.2;
      const total = r.height + (start - end);
      const traveled = start - r.top;
      const p = Math.max(0, Math.min(1, traveled / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const chars = text.split("");
  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((c, i) => {
        const charProgress = i / chars.length;
        const opacity = progress > charProgress ? 1 : 0.2;
        return (
          <span
            key={i}
            style={{ opacity, transition: "opacity 0.3s ease" }}
          >
            {c}
          </span>
        );
      })}
    </p>
  );
};
