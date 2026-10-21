"use client";

import { useId, useState } from "react";
import { TECHNIQUES, type TreatmentId } from "@/lib/techniques";

/** The techniques for one treatment as buttons; choosing one says what it is. */
export function TechniquePicker({ treatment }: { treatment: TreatmentId }) {
  const uid = useId();
  const items = TECHNIQUES[treatment];
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className="picker">
      <div className="picker__options" role="group" aria-label="Techniques">
        {items.map((t, i) => (
          <button
            key={t.name}
            type="button"
            className="picker__option"
            aria-pressed={active === i}
            aria-controls={`${uid}-what`}
            onClick={() => setActive(i)}
          >
            {t.name}
          </button>
        ))}
      </div>
      <p key={current.name} id={`${uid}-what`} className="picker__what" aria-live="polite">
        {current.what}
      </p>
    </div>
  );
}
