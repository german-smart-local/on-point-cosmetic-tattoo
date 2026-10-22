import type { CSSProperties, ReactNode } from "react";

export interface FaceMapMarker {
  label: string;
  x: number;
  y: number;
  /** Which side of the point the label sits on (default above). */
  side?: "above" | "below" | "left" | "right";
}

export interface FaceMapData {
  /** The part of the photo the square frame shows, in the photo's own pixels: [x, y, width, height]. */
  view: [number, number, number, number];
  /** Guide lines, in the photo's own pixels. */
  paths: string[];
  markers: FaceMapMarker[];
}

/**
 * The homepage hero's mapping lines (dots, guide lines and labels) drawn over an inner-page photo.
 * Wraps the photo so the map zooms, drifts and fades in with it (see .facemap in globals.css).
 */
export function FaceMap({ map, children }: { map: FaceMapData; children: ReactNode }) {
  const [vx, vy, vw, vh] = map.view;
  const at = (m: FaceMapMarker): CSSProperties => ({
    left: `${((m.x - vx) / vw) * 100}%`,
    top: `${((m.y - vy) / vh) * 100}%`,
  });

  return (
    <div className="facemap">
      {children}
      <svg viewBox={map.view.join(" ")} preserveAspectRatio="xMidYMid slice" aria-hidden focusable="false">
        {map.paths.map((d) => (
          <path key={d} className="map__line" pathLength={1} d={d} />
        ))}
        {map.markers.map((m, i) => (
          <circle key={`pulse-${m.label}`} className={`facemap__pulse facemap__pulse--${i}`} cx={m.x} cy={m.y} r={vw * 0.011} />
        ))}
        {map.markers.map((m, i) => (
          <circle key={m.label} className={`map__dot map__dot--${i}`} cx={m.x} cy={m.y} r={vw * 0.011} />
        ))}
      </svg>
      {map.markers.map((m, i) => (
        <span
          key={m.label}
          className={`map__label map__label--${i} map__label--${m.side ?? "above"}`}
          style={at(m)}
          aria-hidden
        >
          {m.label}
        </span>
      ))}
    </div>
  );
}
