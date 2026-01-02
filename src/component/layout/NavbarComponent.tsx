import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";

interface NavListItemProps {
  href: string;
  children: React.ReactNode;
}

function NavListItem({ href, children }: NavListItemProps) {
  return (
    <li>
      <a
        href={href}
        className="text-white hover:text-[#A3F323] transition-colors duration-200 font-mono text-sm tracking-wider relative group"
      >
        <span className="text-[#A3F323] mr-1">&gt;</span>
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#A3F323] transition-all duration-300 group-hover:w-full"></span>
      </a>
    </li>
  );
}

function NavList() {
  return (
    <ul className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
      <NavListItem href="#portfolio">PROJECTS</NavListItem>
      <NavListItem href="#about">ABOUT</NavListItem>
      <NavListItem href="#contact">CONTACT</NavListItem>
    </ul>
  );
}

export function NavbarComponent() {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300">
      <nav className={`mx-auto max-w-7xl px-6 py-6 transition-all duration-300 ${
        scrolled 
          ? "bg-black/90 backdrop-blur-md border-b border-[#A3F323]/20" 
          : "bg-transparent"
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-black text-white hover:text-[#A3F323] transition-colors duration-300 font-mono"
          >
            &lt;PAUL_ABAKADA /&gt;
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavList />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            onClick={() => setOpenNav(!openNav)}
            aria-label="Toggle navigation menu"
          >
            {openNav ? (
              <AiOutlineClose className="h-6 w-6 text-white" />
            ) : (
              <HiOutlineMenu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {openNav && (
          <div className="lg:hidden mt-6 pb-4 border-t border-[#A3F323]/20 pt-6">
            <NavList />
          </div>
        )}
      </nav>
    </header>
  );
}
