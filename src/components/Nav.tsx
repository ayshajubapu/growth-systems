import { useEffect, useState } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "py-4 backdrop-blur-md bg-background/70 border-b border-border" : "py-7"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 lg:px-14 flex items-center justify-between">
        <a href="#" className="font-display text-2xl tracking-tight">
          Maison<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <a href="#systems" className="hover:text-foreground transition-colors">Systems</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#insights" className="hover:text-foreground transition-colors">Insights</a>
          <a href="#studio" className="hover:text-foreground transition-colors">Studio</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex text-xs uppercase tracking-[0.25em] border-b border-accent text-accent pb-1">
          Apply
        </a>
      </div>
    </header>
  );
};

export default Nav;
