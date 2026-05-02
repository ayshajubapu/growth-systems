import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled || open ? "py-3 glass-nav" : "py-4 md:py-6"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-14 flex items-center justify-between gap-4">
      <a
  href="#"
  onClick={() => setOpen(false)}
  className="font-display text-xl sm:text-2xl tracking-tight flex items-center gap-3"
>
  <img
    src="/logo.png"
    alt="SmartPixel Logo"
    className="w-10 h-10 object-contain"
  />

  <span>
    Smart<span className="text-accent">Pixel</span>
  </span>
</a>
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="relative hover:text-foreground transition-colors group py-2">
                {l.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-accent group-hover:w-full transition-all duration-500" />
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919886069488" className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors flex items-center gap-2">
              <Phone size={13} /> 98860 69488
            </a>
            <a href="#contact" className="glass-gold inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-accent hover:text-foreground transition-colors">
              Let's Talk →
            </a>
          </div>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden glass w-10 h-10 flex items-center justify-center"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background/85 backdrop-blur-2xl" onClick={() => setOpen(false)} />
        <nav className="relative h-full flex flex-col justify-center px-7 sm:px-10 gap-1 overflow-y-auto py-24">
          <p className="eyebrow mb-8" style={{ transitionDelay: open ? "60ms" : "0ms" }}>— Navigate</p>
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              className={`font-display text-4xl sm:text-5xl py-3 border-b border-border transition-all duration-700 hover:text-accent ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+919886069488"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${120 + links.length * 60}ms` : "0ms" }}
            className={`mt-8 inline-flex items-center gap-3 text-sm text-muted-foreground transition-all duration-700 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Phone size={14} className="text-accent" /> +91 98860 69488
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${180 + links.length * 60}ms` : "0ms" }}
            className={`mt-6 glass-gold inline-flex w-fit items-center gap-3 px-6 py-4 text-sm uppercase tracking-[0.2em] text-accent transition-all duration-700 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Let's Talk About Your Project →
          </a>
        </nav>
      </div>
    </>
  );
};

export default Nav;
