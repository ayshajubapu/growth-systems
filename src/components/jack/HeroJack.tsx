import { FadeIn, Magnet, ContactButton } from "./primitives";
import { Link } from "react-router-dom";
import heroImg from "@/assets/sp-hero-3d.jpg";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const HeroJack = () => {
  return (
    <section
      className="relative h-screen flex flex-col"
      style={{ overflowX: "clip", background: "#0C0C0C" }}
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="relative z-20">
        <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-sm md:text-lg lg:text-[1.4rem]">
          <Link
            to="/"
            className="flex items-center gap-2 text-[#D7E2EA] font-medium tracking-wider uppercase"
          >
            <img src="/logo.png" alt="SmartPixel" className="w-8 h-8 md:w-10 md:h-10" />
          </Link>
          <div className="flex items-center gap-6 md:gap-10 lg:gap-14">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity duration-200"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Hero Heading */}
      <div className="relative z-10 overflow-hidden px-4 sm:px-6">
        <FadeIn
          delay={0.15}
          y={40}
          as="h1"
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5"
        >
          SmartPixel.
        </FadeIn>
      </div>

      {/* Hero portrait / 3D visual */}
      <Magnet
        padding={150}
        strength={3}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <FadeIn delay={0.6} y={30}>
          <div className="relative">
            <div className="absolute -inset-10 bg-[#B600A8]/20 blur-3xl rounded-full -z-10" />
            <img
              src={heroImg}
              alt="SmartPixel — Chennai web development agency"
              className="w-full h-auto object-contain"
            />
          </div>
        </FadeIn>
      </Magnet>

      {/* Bottom bar */}
      <div className="mt-auto relative z-20 px-6 md:px-10 flex justify-between items-end pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            A Chennai studio building conversion-focused websites, apps & ecommerce stores.
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton label="Contact Me" href="/contact" />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroJack;
