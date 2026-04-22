import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#systems", label: "Systems" },
  { href: "#work", label: "Work" },
  { href: "#gallery", label: "Gallery" },
  { href: "#voices", label: "Voices" },
  { href: "#insights", label: "Insights" },
  { href: "#studio", label: "Studio" },
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
          scrolled || open ? "py-3 backdrop-blur-md bg-background/80 border-b border-border" : "py-5 md:py-7"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-14 flex items-center justify-between">
          <a href="#" onClick={() => setOpen(false)} className="font-display text-xl sm:text-2xl tracking-tight">
            Start<span className="text-accent">·</span>With<span className="text-accent">·</span>Us
          </a>
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
            ))}
          </nav>
          <a href="#contact" className="hidden lg:inline-flex text-xs uppercase tracking-[0.25em] border-b border-accent text-accent pb-1">
            Apply
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2 text-foreground"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <nav className="relative h-full flex flex-col justify-center px-8 gap-1 overflow-y-auto py-24">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              className={`font-display text-4xl sm:text-5xl py-3 border-b border-border transition-all duration-700 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${120 + links.length * 60}ms` : "0ms" }}
            className={`mt-10 inline-flex w-fit btn-gold transition-all duration-700 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Apply To Work With Us →
          </a>
        </nav>
      </div>
    </>
  );
};

export default Nav;
