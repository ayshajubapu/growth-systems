import { useEffect, useRef, useState } from "react";
import cs1a from "@/assets/cs-1-after.jpg";
import cs2a from "@/assets/cs-2-after.jpg";
import cs3a from "@/assets/cs-3-after.jpg";
import cs4a from "@/assets/cs-4-after.jpg";
import cs5a from "@/assets/cs-5-after.jpg";
import cs6a from "@/assets/cs-6-after.jpg";
import csGulf from "@/assets/cs-gulf2world-after.png";
import csTravel from "@/assets/cs-travelhub-after.png";
import csLts from "@/assets/cs-lts-after.png";
import csManohar from "@/assets/cs-manohar-after.png";
import csSurya from "@/assets/cs-suryaprakash-after.png";
import csAyish from "@/assets/cs-ayishro-after.png";
import csManha from "@/assets/cs-manha-after.png";
import csFly from "@/assets/cs-flyingbird-after.png";
import csBloss from "@/assets/cs-blossombloom-after.png";

const all = [
  cs1a, cs2a, cs3a, cs4a, cs5a, cs6a,
  csGulf, csTravel, csLts, csManohar, csSurya,
  csAyish, csManha, csFly, csBloss,
];

const row1 = all.slice(0, 8);
const row2 = all.slice(8);

const MarqueeJack = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const next = (window.scrollY - top + window.innerHeight) * 0.3;
      setOffset(next);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: "#0C0C0C" }}
    >
      <div className="flex flex-col gap-3">
        <div className="flex gap-3" style={{ transform: `translateX(${offset - 200}px)`, willChange: "transform" }}>
          {[...row1, ...row1, ...row1].map((src, i) => (
            <img
              key={`r1-${i}`}
              src={src}
              loading="lazy"
              alt=""
              className="rounded-2xl object-cover shrink-0"
              style={{ width: 420, height: 270 }}
            />
          ))}
        </div>
        <div className="flex gap-3" style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: "transform" }}>
          {[...row2, ...row2, ...row2].map((src, i) => (
            <img
              key={`r2-${i}`}
              src={src}
              loading="lazy"
              alt=""
              className="rounded-2xl object-cover shrink-0"
              style={{ width: 420, height: 270 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeJack;
