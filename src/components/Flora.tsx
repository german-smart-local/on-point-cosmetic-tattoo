/**
 * The studio's line-drawn flowers as a quiet decoration behind a section's content.
 * `at` picks the corner it grows from; the colour comes from the section it sits in (globals.css).
 * The parent section needs the `has-flora` class so the flowers sit behind its content.
 */
export function Flora({ at }: { at: "bl" | "br" | "tl" | "tr" }) {
  return <span className={`flora flora--${at}`} aria-hidden />;
}
