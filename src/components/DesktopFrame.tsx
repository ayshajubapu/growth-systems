import { cn } from "@/lib/utils";

interface DesktopFrameProps {
  src: string;
  alt: string;
  variant?: "after" | "before";
  className?: string;
}

/**
 * Renders a screenshot inside a MacBook-style desktop frame.
 * Keeps a consistent 16:10 aspect ratio so before/after images
 * always line up regardless of source dimensions.
 */
const DesktopFrame = ({ src, alt, variant = "after", className }: DesktopFrameProps) => {
  const isAfter = variant === "after";
  return (
    <div
      className={cn(
        "relative w-full select-none",
        className
      )}
    >
      {/* Bezel */}
      <div
        className={cn(
          "relative rounded-[14px] p-[6px] sm:p-[8px] bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] ring-1",
          isAfter ? "ring-accent/30" : "ring-white/10"
        )}
      >
        {/* Top camera dot */}
        <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-zinc-600" />

        {/* Screen */}
        <div className="relative overflow-hidden rounded-[8px] bg-black aspect-[16/10]">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={cn(
              "absolute inset-0 w-full h-full object-cover object-top transition-all duration-700",
              isAfter
                ? "group-hover:scale-[1.02]"
                : "opacity-70 grayscale-[20%] group-hover:opacity-90"
            )}
          />
        </div>
      </div>

      {/* Base / hinge */}
      <div className="mx-auto h-[6px] w-[55%] rounded-b-[6px] bg-gradient-to-b from-zinc-700 to-zinc-900" />
      <div className="mx-auto h-[3px] w-[18%] rounded-b-[3px] bg-zinc-800/70" />
    </div>
  );
};

export default DesktopFrame;
