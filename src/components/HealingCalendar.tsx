"use client";

import { useId, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Tile } from "@/components/Tile";

type Treatment = "brows" | "eyeliner" | "lips";

interface Stage {
  name: string;
  /** Plain label shown before a date is known (and without script). */
  when: string;
  /** Day offsets from the appointment: one day, or a [from, to] window. */
  offset?: number | [number, number];
  items: (t: Treatment, fmt: (offset: number) => string | null) => string[];
  photo: (t: Treatment) => { src: string; alt: string };
}

const FRESH: Record<Treatment, { src: string; alt: string }> = {
  brows: { src: "/images/sub/eb-work-3.jpg", alt: "Fresh hair-stroke brows straight after the appointment" },
  eyeliner: { src: "/images/sub/el-work-2.jpg", alt: "Fresh designer eyeliner straight after the appointment" },
  lips: { src: "/images/sub/lip-work-3.png", alt: "Fresh lip tattoo, colour still bright and glossy" },
};

// Every instruction below is from the studio's own aftercare guide.
const STAGES: Stage[] = [
  {
    name: "Consultation",
    when: "Before you book",
    photo: () => ({ src: "/images/sub/eb-technique.jpg", alt: "A client relaxed in the studio chair before treatment" }),
    items: () => [
      "Skin type, medical considerations and the technique that suits you",
      "Shape, proportion and pigment tone, mapped and reviewed with you",
      "Preparation and the stages of healing, explained",
    ],
  },
  {
    name: "One week before",
    when: "7 days to go",
    photo: () => ({ src: "/images/sub/ac-section.png", alt: "Natural brows and skin before a cosmetic tattoo" }),
    offset: -7,
    items: (t) => [
      "No tanning or long stretches in the sun",
      "No retinol on the area",
      ...(t === "eyeliner" ? ["Have any lash extensions removed"] : []),
      ...(t === "lips" ? ["Prone to cold sores? Seek medical advice first"] : []),
    ],
  },
  {
    name: "Two days before",
    when: "48 hours to go",
    photo: () => ({ src: "/images/sub/ac-work-1.jpg", alt: "Soft, natural brows on a client of the studio" }),
    offset: -2,
    items: () => [
      "No alcohol, coffee or non-prescribed blood thinners",
      "No picking, tweezing, tinting or waxing the area",
    ],
  },
  {
    name: "Your appointment",
    when: "The day",
    photo: (t) => FRESH[t],
    offset: 0,
    items: () => [
      "Shape, proportion and pigment tone are reviewed before treatment",
      "Colour appears darker immediately after treatment",
      "Mild redness, swelling, tenderness or flaking may occur",
    ],
  },
  {
    name: "Healing",
    // The studio's guide gives no fixed length for early healing, so this stage has no dates.
    when: "While it heals",
    photo: () => ({ src: "/images/sub/ac-work-3.jpg", alt: "Healed brows after one session, before the touch-up" }),
    items: () => [
      "Apply the recommended cream as directed",
      "No exercise, swimming, spas or sun exposure during early healing",
      "Do not pick or scratch the area",
    ],
  },
  {
    name: "Follow-up",
    when: "6 to 8 weeks later",
    photo: () => ({ src: "/images/sub/ac-work-2.jpg", alt: "Settled, natural-looking brows after healing" }),
    offset: [42, 56],
    items: () => ["A follow-up visit is usually booked six to eight weeks after your appointment"],
  },
];

const TREATMENTS: { id: Treatment; label: string }[] = [
  { id: "brows", label: "Brows" },
  { id: "eyeliner", label: "Eyeliner" },
  { id: "lips", label: "Lips" },
];

const dayFmt = new Intl.DateTimeFormat("en-AU", { weekday: "short", day: "numeric", month: "short" });

function toInput(d: Date) {
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

function fromInput(v: string): Date | null {
  const [y, m, d] = v.split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

function addDays(d: Date, n: number) {
  const out = new Date(d);
  out.setDate(out.getDate() + n);
  return out;
}

const noopSubscribe = () => () => {};

/** Two weeks out, moved to the next weekday (the studio's weekday hours). */
function defaultAppointment() {
  let d = addDays(new Date(), 14);
  while (d.getDay() === 0 || d.getDay() === 6) d = addDays(d, 1);
  return toInput(d);
}

export function HealingCalendar({ headingLevel = 2 }: { headingLevel?: 2 | 3 }) {
  const uid = useId();
  const [treatment, setTreatment] = useState<Treatment>("brows");
  const [picked, setPicked] = useState<string | null>(null);
  const [open, setOpen] = useState(0);
  // The dots breathe to show they can be tapped, until the visitor has tried one.
  const [explored, setExplored] = useState(false);
  // The suggested date depends on today, so it only exists in the browser; the server shows plain labels.
  const suggested = useSyncExternalStore(noopSubscribe, defaultAppointment, () => "");
  const date = picked ?? suggested;

  const appt = fromInput(date);
  const fmt = (offset: number) => (appt ? dayFmt.format(addDays(appt, offset)) : null);

  const whenFor = (s: Stage) => {
    if (s.offset === undefined || !appt) return s.when;
    if (Array.isArray(s.offset)) return `${fmt(s.offset[0])} – ${fmt(s.offset[1])}`;
    return fmt(s.offset) ?? s.when;
  };

  const Heading = headingLevel === 2 ? "h2" : "h3";
  const StageHeading = headingLevel === 2 ? "h3" : "h4";

  const current = STAGES[open];
  const photo = current.photo(treatment);

  return (
    <div>
      <div className="grid12 cal__intro">
        <Heading id={`${uid}-title`} className="t-head">
          Your visit, day by day
        </Heading>
        <div>
          <p className="t-lead measure">
            Choose a treatment and a date. The calendar fills in what to do, and when, from the
            studio&apos;s own preparation and aftercare guide.
          </p>
          <div className="cal__controls">
            <fieldset className="cal__choice">
              <legend>Treatment</legend>
              {TREATMENTS.map((t) => (
                <span key={t.id}>
                  <input
                    type="radio"
                    id={`${uid}-${t.id}`}
                    name={`${uid}-treatment`}
                    value={t.id}
                    checked={treatment === t.id}
                    onChange={() => setTreatment(t.id)}
                  />
                  <label htmlFor={`${uid}-${t.id}`}>{t.label}</label>
                </span>
              ))}
            </fieldset>
            <label className="cal__date">
              <span>Appointment date</span>
              <input type="date" value={date} onChange={(e) => setPicked(e.target.value)} />
            </label>
          </div>
        </div>
      </div>

      <ol className={cn("track", !explored && "is-inviting")} aria-labelledby={`${uid}-title`}>
        {STAGES.map((s, i) => (
          <li key={s.name}>
            <button
              type="button"
              className="stop"
              aria-pressed={open === i}
              aria-controls={`${uid}-detail`}
              onClick={() => {
                setOpen(i);
                setExplored(true);
              }}
            >
              <span className="stop__dot" aria-hidden />
              <span>
                <span className="stop__name">{s.name}</span>
                <span className="stop__when">{whenFor(s)}</span>
              </span>
            </button>
          </li>
        ))}
      </ol>

      {/* Keyed by stage and treatment so the panel animates in each time it changes. */}
      <div key={`${open}-${treatment}`} id={`${uid}-detail`} className="detail" aria-live="polite">
        <div>
          <StageHeading>{current.name}</StageHeading>
          <p className="detail__when">{whenFor(current)}</p>
          <ul className="ticks">
            {current.items(treatment, fmt).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <Tile className="detail__pic" texture="none">
          <Image src={photo.src} alt={photo.alt} width={800} height={800} sizes="(min-width: 900px) 22rem, 80vw" />
        </Tile>
      </div>
    </div>
  );
}
