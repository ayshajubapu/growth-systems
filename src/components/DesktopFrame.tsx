import { cn } from "@/lib/utils";

interface DesktopFrameProps {
  src: string;
  alt: string;
  variant?: "after" | "before";
  className?: string;
}

/**
 * Renders a screenshot inside a MacBook-style desktop frame.
 *
 * Performance optimizations:
 * - Lazy loads below-the-fold screenshots
 * - Async image decoding
 * - Explicit aspect ratio prevents layout shift
 * - Uses transform for hover animation
 * - CSS containment reduces layout/repaint cost
 * - Keeps the existing visual design
 */
const DesktopFrame = ({
  src,
  alt,
  variant = "after",
  className,
}: DesktopFrameProps) => {
  const isAfter = variant === "after";

  return (
    <div
      className={cn(
        "relative w-full select-none",
        "contain-layout",
        className
      )}
    >
      {/* =====================================================
          LAPTOP BEZEL
          ===================================================== */}
      <div
        className={cn(
          "relative rounded-[14px] p-[6px] sm:p-[8px]",
          "bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900",
          "shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]",
          "ring-1",
          isAfter ? "ring-accent/30" : "ring-white/10"
        )}
      >
        {/* ===================================================
            CAMERA DOT
            =================================================== */}
        <div
          aria-hidden="true"
          className="
            absolute
            top-[3px]
            left-1/2
            -translate-x-1/2
            w-1
            h-1
            rounded-full
            bg-zinc-600
          "
        />

        {/* ===================================================
            SCREEN

            aspect-[16/10] reserves the exact layout space
            before the image finishes loading.
            =================================================== */}
        <div
          className="
            relative
            overflow-hidden
            rounded-[8px]
            bg-black
            aspect-[16/10]
            contain-paint
          "
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            width={896}
            height={560}
            className={cn(
              "absolute inset-0",
              "w-full h-full",
              "object-cover object-top",
              "transition-transform duration-700",
              "will-change-transform",
              isAfter
                ? "group-hover:scale-[1.02]"
                : "opacity-70 grayscale-[20%] group-hover:opacity-90"
            )}
          />
        </div>
      </div>

      {/* =====================================================
          LAPTOP BASE
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          mx-auto
          h-[6px]
          w-[55%]
          rounded-b-[6px]
          bg-gradient-to-b
          from-zinc-700
          to-zinc-900
        "
      />

      {/* =====================================================
          HINGE
          ===================================================== */}

      <div
        aria-hidden="true"
        className="
          mx-auto
          h-[3px]
          w-[18%]
          rounded-b-[3px]
          bg-zinc-800/70
        "
      />
    </div>
  );
};

export default DesktopFrame;