"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Tile } from "@/components/Tile";

export interface WorkImage {
  src: string;
  alt: string;
  caption: string;
}

/**
 * Three photographs of the same size, in the arch-topped frames used across the site. Each opens
 * full size in a native <dialog>, with previous/next, arrow keys and Esc.
 */
export function WorkStrip({ title, images }: { title: string; images: WorkImage[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const step = (by: number) =>
    setIndex((i) => (i === null ? i : (i + by + images.length) % images.length));

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const onClose = () => setIndex(null);
    el.addEventListener("keydown", onKey);
    el.addEventListener("close", onClose);
    return () => {
      el.removeEventListener("keydown", onKey);
      el.removeEventListener("close", onClose);
    };
    // step only reads images.length, which is fixed for the strip's lifetime
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = index === null ? null : images[index];

  return (
    <section className="section on-white" aria-label={title}>
      <div className="wrap">
        <h2 className="t-head">{title}</h2>
        <div className="work">
          {images.map((img, i) => (
            <figure key={img.src}>
              <button
                type="button"
                className="work__open"
                onClick={() => open(i)}
                aria-label={`View larger: ${img.caption}`}
              >
                <Tile as="span" className="work__pic" texture="none">
                  <Image src={img.src} alt={img.alt} width={1440} height={1440} sizes="(min-width: 900px) 33vw, 100vw" />
                </Tile>
              </button>
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <dialog
        ref={dialog}
        className="viewer"
        aria-label={current ? current.caption : title}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
      >
        {current && (
          <div className="viewer__in">
            <div className="viewer__pic">
              <Image src={current.src} alt={current.alt} fill sizes="90vw" />
            </div>
            <div className="viewer__bar">
              <p>
                {current.caption}
                <span className="soft">
                  {" "}
                  ({(index ?? 0) + 1} of {images.length})
                </span>
              </p>
              <div className="viewer__controls">
                <button type="button" className="viewer__btn" onClick={() => step(-1)}>
                  Previous
                </button>
                <button type="button" className="viewer__btn" onClick={() => step(1)}>
                  Next
                </button>
                <button type="button" className="viewer__btn" onClick={() => dialog.current?.close()}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
