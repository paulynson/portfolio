import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";

interface NavListItemProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}

function NavListItem({ href, children, onClick, active }: NavListItemProps) {
  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        aria-current={active ? "location" : undefined}
        className="text-white dark:text-white hover:text-[#A3F323] dark:hover:text-[#A3F323] transition-colors duration-200 font-mono text-sm tracking-wider relative group"
      >
        <span className="text-[#A3F323] dark:text-[#A3F323] mr-1">&gt;</span>
        {children}
        <span className={`absolute -bottom-1 left-0 h-px bg-[#A3F323] dark:bg-[#A3F323] transition-all duration-300 group-hover:w-full ${active ? "w-full" : "w-0"}`}></span>
      </a>
    </li>
  );
}

function NavList({ onNavigate, activeSection }: { onNavigate?: () => void; activeSection: string }) {
  return (
    <ul className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
      <NavListItem href="#portfolio" active={activeSection === "portfolio"} onClick={onNavigate}>PROJECTS</NavListItem>
      <NavListItem href="#about" active={activeSection === "about"} onClick={onNavigate}>ABOUT</NavListItem>
      <NavListItem href="#contact" active={activeSection === "contact"} onClick={onNavigate}>CONTACT</NavListItem>
      <li>
        <a href="/Paul_Abakada_CV.pdf" download="Paul_Abakada_CV.pdf" onClick={onNavigate}
          className="inline-flex items-center justify-center border border-[#A3F323] px-4 py-2 font-mono text-sm font-bold text-[#A3F323] hover:bg-[#A3F323] hover:text-black transition-colors duration-200"
          aria-label="Download Paul Abakada CV as PDF">DOWNLOAD CV</a>
      </li>
    </ul>
  );
}

export function NavbarComponent() {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? Math.min(100, Math.max(0, window.scrollY / scrollable * 100)) : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const sections = ["portfolio", "about", "contact"];
    const updateActiveSection = () => {
      const current = sections.filter((id) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= window.innerHeight * 0.4;
      }).pop() ?? "";
      setActiveSection(current);
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300">
      <nav className={`mx-auto max-w-7xl px-6 py-6 transition-all duration-300 ${
        scrolled 
          ? "bg-black/90 dark:bg-[#1b4444]/90 backdrop-blur-md border-b border-[#A3F323]/20" 
          : "bg-transparent"
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-black text-white dark:text-white hover:text-[#A3F323] dark:hover:text-[#A3F323] transition-colors duration-300 font-mono"
          >
            &lt;PAUL_ABAKADA /&gt;
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavList activeSection={activeSection} onNavigate={() => setOpenNav(false)} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 dark:hover:bg-white/10 transition-colors duration-200"
            onClick={() => setOpenNav(!openNav)}
            aria-label={openNav ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={openNav}
            aria-controls="mobile-navigation"
          >
            {openNav ? (
              <AiOutlineClose className="h-6 w-6 text-white dark:text-white" />
            ) : (
              <HiOutlineMenu className="h-6 w-6 text-white dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {openNav && (
          <div id="mobile-navigation" className="lg:hidden mt-6 pb-4 border-t border-[#A3F323]/20 pt-6 bg-black/95 dark:bg-[#1b4444]/95 backdrop-blur-md rounded-lg">
            <NavList activeSection={activeSection} onNavigate={() => setOpenNav(false)} />
          </div>
        )}
      </nav>
      <div role="progressbar" aria-label="Page scroll progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(scrollProgress)} className="pointer-events-none absolute bottom-0 left-0 h-[3px] bg-[#A3F323] transition-[width] duration-150" style={{ width: `${scrollProgress}%` }} />
    </header>
  );
}
