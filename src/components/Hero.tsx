"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PHONE, PHONE_HREF, ROUTES } from "@/lib/links";
import { Flora } from "@/components/Flora";
import { BookLink } from "@/components/BookLink";

type Mode = "brows" | "eyeliner" | "lips";

interface Marker {
  label: string;
  x: number;
  y: number;
  /** Which side of the point the label sits on (default above). */
  side?: "above" | "below" | "left" | "right";
}

interface Map {
  label: string;
  /** Guide lines, in the hero photo's own pixels (1920 × 1280). */
  paths: string[];
  markers: Marker[];
  title: string;
  note: string;
  href: string;
}

const NOSE = "M1280,432";

const MAPS: Record<Mode, Map> = {
  brows: {
    label: "Brows",
    // Each line stops at its dot, so nothing pokes out past the label above it.
    paths: [`${NOSE} L1301,240`, `${NOSE} L1184,197`, `${NOSE} L1098,238`],
    markers: [
      { label: "Start", x: 1301, y: 240 },
      { label: "Arch", x: 1184, y: 197 },
      { label: "Tail", x: 1098, y: 238 },
    ],
    title: "Every brow starts as a map.",
    note: "Lines from the side of the nose set where it begins, arches and ends, so the shape suits your face before any pigment goes in.",
    href: ROUTES.eyebrows,
  },
  eyeliner: {
    label: "Eyeliner",
    paths: ["M1272,322 C1240,300 1190,282 1143,284 L1104,266"],
    markers: [
      { label: "Inner corner", x: 1272, y: 322, side: "right" },
      { label: "Lash line", x: 1205, y: 288, side: "below" },
      { label: "Wing", x: 1104, y: 266, side: "left" },
    ],
    title: "The line follows the lashes.",
    note: "Thickness, taper and where a wing lifts are planned along your lash line and lid space, from a fine line within the lashes to a defined wing.",
    href: ROUTES.eyeliners,
  },
  lips: {
    label: "Lips",
    paths: [
      "M1218,526 C1240,505 1280,478 1310,475 Q1327,481 1343,478 C1370,490 1392,530 1398,583 C1370,605 1330,598 1295,578 C1260,560 1235,545 1218,526 Z",
    ],
    markers: [
      { label: "Cupid's bow", x: 1327, y: 474 },
      { label: "Corner", x: 1218, y: 526, side: "left" },
      { label: "Lower border", x: 1330, y: 597, side: "below" },
    ],
    title: "The border is mapped first.",
    note: "The outline and its symmetry are drawn on, then the colour is matched to your own lip tone for a liner, a soft blend or full colour.",
    href: ROUTES.lips,
  },
};

const MODES = Object.keys(MAPS) as Mode[];

// On desktop the frame shows the right-hand 1472 units of the photo (aspect 1.15, anchored right).
const VISIBLE_FROM = 1920 - 1280 * 1.15;
const toLeft = (x: number) => `${((x - VISIBLE_FROM) / (1920 - VISIBLE_FROM)) * 100}%`;
const toTop = (y: number) => `${(y / 1280) * 100}%`;

export function Hero() {
  const [mode, setMode] = useState<Mode>("brows");
  const map = MAPS[mode];

  return (
    <section className="hero has-flora" aria-labelledby="hero-title">
      <Flora at="bl" />
      <div className="wrap hero__in">
        <div className="hero__text">
          <h1 id="hero-title" className="t-display">
            Cosmetic tattoo, mapped to your face
          </h1>
          <p className="t-lead measure">
            Eyebrow, eyeliner and lip tattooing by Lisa Eagles, a certified artist working from her
            studio in Buderim on the Sunshine Coast.
          </p>
          <div className="hero__actions">
            <BookLink className="btn">Book a consultation</BookLink>
            <a href={PHONE_HREF} className="link">
              Call {PHONE}
            </a>
          </div>
          <div className="map__panel">
            <div className="map__tabs" role="group" aria-label="Show the map for">
              {MODES.map((m) => (
                <button
                  key={m}
                  type="button"
                  className="map__tab"
                  aria-pressed={mode === m}
                  onClick={() => setMode(m)}
                >
                  {MAPS[m].label}
                </button>
              ))}
            </div>
            <p aria-live="polite">
              <strong>{map.title}</strong> {map.note}
            </p>
            <Link href={map.href} className="link">
              More about {map.label.toLowerCase()}
            </Link>
          </div>
        </div>

        <figure className="map" aria-label={`${map.label} map on the hero photograph`}>
          <div className="map__frame">
            <Image
              src="/images/hero.png"
              alt="A woman with defined brows, eyeliner and full lips, tilting her face toward the camera"
              fill
              priority
              sizes="(min-width: 900px) 60vw, 100vw"
            />
            {/* Keyed by mode so the lines draw again each time the map changes. */}
            <svg
              key={mode}
              viewBox="0 0 1920 1280"
              preserveAspectRatio="xMaxYMid slice"
              aria-hidden
              focusable="false"
            >
              {map.paths.map((d) => (
                <path key={d} className="map__line" pathLength={1} d={d} />
              ))}
              {map.markers.map((m, i) => (
                <circle key={m.label} className={`map__dot map__dot--${i}`} cx={m.x} cy={m.y} r={11} />
              ))}
            </svg>
            {map.markers.map((m, i) => (
              <span
                key={`${mode}-${m.label}`}
                className={`map__label map__label--${i} map__label--${m.side ?? "above"}`}
                style={{ left: toLeft(m.x), top: toTop(m.y) }}
                aria-hidden
              >
                {m.label}
              </span>
            ))}
          </div>

        </figure>
      </div>
    </section>
  );
}
