"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// The blocks inside a section that arrive one after another. A block nested in another block
// (a paragraph inside a quote) moves with its parent, not on its own.
const BLOCKS = [
  "h2",
  "h3",
  "p",
  "ul",
  "ol",
  "dl",
  "figure",
  "form",
  "details",
  "iframe",
  ".btn",
  ".tile",
  ".area__pic",
  ".track",
  ".detail",
  ".cal__controls",
  ".faq__arch",
  ".index__mark",
  ".foot__logo",
].join(",");

// Never animated: the hero (it has its own load sequence), dialogs and anything fixed on screen.
const SKIP = ".hero, dialog, .bar, .actionbar";

/**
 * Section reveals: each section's blocks rise into place, staggered, once, as the section scrolls in.
 * Hidden states only exist under html.js and prefers-reduced-motion: no-preference (globals.css),
 * so without script or with reduced motion the page is simply there.
 */
export function Reveals() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = document.querySelectorAll<HTMLElement>("main section, footer");
    const targets: HTMLElement[] = [];

    sections.forEach((section) => {
      if (section.closest(SKIP)) return;
      const blocks = Array.from(section.querySelectorAll<HTMLElement>(BLOCKS)).filter((el) => {
        if (el.closest(SKIP)) return false;
        const parent = el.parentElement?.closest(BLOCKS);
        return !parent || !section.contains(parent);
      });
      blocks.forEach((el) => {
        if (el.classList.contains("reveal")) return;
        // Already on screen when the script runs: leave it, so nothing visible blinks out.
        if (el.getBoundingClientRect().top < window.innerHeight) return;
        el.classList.add("reveal");
        targets.push(el);
      });
    });

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        // Blocks that arrive together are staggered in reading order.
        const arriving = entries
          .filter((e) => e.isIntersecting)
          .map((e) => e.target as HTMLElement)
          .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
        arriving.forEach((el, i) => {
          const step = Math.min(i, 6);
          el.style.setProperty("--reveal-i", String(step));
          el.classList.add("is-in");
          io.unobserve(el);
          // Once it has landed, hand the element back to its own hover and press transitions.
          window.setTimeout(() => {
            el.classList.remove("reveal", "is-in");
            el.style.removeProperty("--reveal-i");
          }, 1500 + step * 90);
        });
      },
      { rootMargin: "0px", threshold: 0.05 }
    );
    targets.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      // Anything still waiting (e.g. the footer when the visitor leaves the page before reaching it)
      // is shown again, so the next page's run can pick it up instead of finding it stuck hidden.
      targets.forEach((el) => {
        if (!el.classList.contains("is-in")) el.classList.remove("reveal");
      });
    };
  }, [pathname]);

  return null;
}
