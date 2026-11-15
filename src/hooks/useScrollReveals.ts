import { useEffect } from "react";

/** Reveal existing content as it enters the viewport, without changing markup. */
export function useScrollReveals() {
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches || !("IntersectionObserver" in window)) return;
    const selectors = [
      "#portfolio h2",
      "#portfolio .project-interactive",
      "#about h2",
      "#about [data-experience-card]",
      "#contact h2",
      "#contact .contact-cta",
    ];
    const targets = document.querySelectorAll<HTMLElement>(selectors.join(", "));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        element.classList.add("reveal-visible");
        observer.unobserve(element);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    targets.forEach((element, index) => {
      element.classList.add("reveal-ready");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 3, 2) * 95}ms`);
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      targets.forEach((element) => {
        element.classList.remove("reveal-ready", "reveal-visible");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);
}
