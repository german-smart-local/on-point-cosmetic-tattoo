"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface GalleryPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * Photos at their own proportions in a masonry of columns, so before/after pairs are never cropped.
 * Each opens full size in the same <dialog> viewer as the work strips (styles in globals.css).
 */
export function GalleryGrid({ label, photos }: { label: string; photos: GalleryPhoto[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => {
    setIndex(i);
    dialog.current?.showModal();
  };
  const step = (by: number) =>
    setIndex((i) => (i === null ? i : (i + by + photos.length) % photos.length));

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
    // step only reads photos.length, which is fixed for the grid's lifetime
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = index === null ? null : photos[index];

  return (
    <>
      <ul className="gallery">
        {photos.map((p, i) => (
          <li key={p.src}>
            <button type="button" className="gallery__open" onClick={() => open(i)} aria-label={`View larger: ${p.alt}`}>
              <Image src={p.src} alt={p.alt} width={p.width} height={p.height} sizes="(min-width: 900px) 30vw, 50vw" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className="viewer"
        aria-label={current ? current.alt : label}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
      >
        {current && (
          <div className="viewer__in">
            <div className="viewer__pic">
              <Image src={current.src} alt={current.alt} fill sizes="90vw" />
            </div>
            <div className="viewer__bar">
              <p>
                {current.alt}
                <span className="soft">
                  {" "}
                  ({(index ?? 0) + 1} of {photos.length})
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
    </>
  );
}
