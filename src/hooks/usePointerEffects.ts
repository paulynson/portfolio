import { useEffect } from "react";

/**
 * Pointer interactions are progressive enhancements: no extra render per pointer
 * move, no touch effects, and no animation for reduced-motion preferences.
 */
export function usePointerEffects() {
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    if (!finePointer.matches || !motion.matches) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    let current: HTMLElement | null = null;
    const glow = document.getElementById("cursor-glow");

    const reset = (element: HTMLElement | null) => {
      if (!element) return;
      element.style.removeProperty("--pointer-x");
      element.style.removeProperty("--pointer-y");
      element.style.removeProperty("--tilt-x");
      element.style.removeProperty("--tilt-y");
      element.style.removeProperty("--magnet-x");
      element.style.removeProperty("--magnet-y");
    };

    const paint = () => {
      frame = 0;
      if (glow) {
        glow.style.transform = `translate3d(${x - 110}px, ${y - 110}px, 0)`;
        glow.style.opacity = "1";
      }
      if (!current) return;
      const rect = current.getBoundingClientRect();
      const px = (x - rect.left) / rect.width;
      const py = (y - rect.top) / rect.height;
      current.style.setProperty("--pointer-x", `${px * 100}%`);
      current.style.setProperty("--pointer-y", `${py * 100}%`);
      if (current.matches("[data-pointer-tilt]")) {
        current.style.setProperty("--tilt-x", `${(0.5 - py) * 6}deg`);
        current.style.setProperty("--tilt-y", `${(px - 0.5) * 6}deg`);
      }
      if (current.matches("[data-pointer-magnetic]")) {
        current.style.setProperty("--magnet-x", `${(px - 0.5) * 12}px`);
        current.style.setProperty("--magnet-y", `${(py - 0.5) * 12}px`);
      }
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      x = event.clientX;
      y = event.clientY;
      const target = event.target;
      const next = target instanceof Element
        ? target.closest<HTMLElement>("[data-pointer-tilt], [data-pointer-magnetic], [data-pointer-spotlight]")
        : null;
      if (next !== current) {
        reset(current);
        current = next;
      }
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const onLeave = () => {
      reset(current);
      current = null;
      if (glow) glow.style.opacity = "0";
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      if (frame) cancelAnimationFrame(frame);
      onLeave();
    };
  }, []);
}
