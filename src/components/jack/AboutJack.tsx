import { FadeIn, AnimatedText, ContactButton } from "./primitives";
import { Sparkles, Code2, Rocket, Globe2 } from "lucide-react";

const AboutJack = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
      style={{ background: "#0C0C0C" }}
    >
      {/* Decorative icon clusters (replacing 3D PNGs with on-brand luxury icons) */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]">
        <div className="w-[120px] sm:w-[160px] md:w-[210px] aspect-square rounded-full glass-gold flex items-center justify-center">
          <Sparkles className="text-accent" size={64} />
        </div>
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]">
        <div className="w-[100px] sm:w-[140px] md:w-[180px] aspect-square rounded-3xl glass flex items-center justify-center">
          <Code2 className="text-[#D7E2EA]" size={56} />
        </div>
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]">
        <div className="w-[120px] sm:w-[160px] md:w-[210px] aspect-square rounded-full glass-gold flex items-center justify-center">
          <Globe2 className="text-accent" size={64} />
        </div>
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]">
        <div className="w-[130px] sm:w-[170px] md:w-[220px] aspect-square rounded-3xl glass flex items-center justify-center">
          <Rocket className="text-[#D7E2EA]" size={64} />
        </div>
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About us
          </h2>
        </FadeIn>

        <AnimatedText
          text="SmartPixel is a Chennai-based studio building conversion-focused websites, mobile apps, and ecommerce stores. We work with ambitious businesses across Pallavaram, Tambaram, Chrompet, Guindy and T Nagar — shipping in two weeks with a 3× average lift in conversion. Let's build something that actually sells."
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[680px]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />
      </div>

      <div className="relative z-10 mt-16 sm:mt-20 md:mt-24">
        <ContactButton label="Start a Project" href="/contact" />
      </div>
    </section>
  );
};

export default AboutJack;
