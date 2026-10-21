import { cn } from "@/lib/utils";

/** "none" keeps the rounded square photo with no backing tile behind it. */
export type Texture =
  | "petal"
  | "linen"
  | "speckle"
  | "stripe"
  | "charcoal"
  | "wave"
  | "dots"
  | "grid"
  | "hatch"
  | "ruled"
  | "grid-dark"
  | "none";

const TEXTURES: Texture[] = ["petal", "linen", "speckle", "stripe"];

/** Pick a texture by position, so neighbouring photos never share one. */
export const textureAt = (i: number): Texture => TEXTURES[i % TEXTURES.length];

/**
 * A photograph in a rounded square, set on an offset backing with a texture (styles in globals.css).
 * `tilt` flips which way a square backing leans; `shape="disc"` swaps the square backing for a
 * textured circle behind one corner and a thin ring across the other.
 */
export function Tile({
  className,
  texture,
  tilt = "right",
  shape = "square",
  as: Tag = "div",
  children,
}: {
  className?: string;
  texture: Texture;
  tilt?: "left" | "right";
  shape?: "square" | "disc" | "screen";
  as?: "div" | "span";
  children: React.ReactNode;
}) {
  const Inner = Tag === "span" ? "span" : "div";
  return (
    <Tag
      className={cn(
        className,
        "tile",
        `tile--${texture}`,
        tilt === "left" && "tile--left",
        shape === "disc" && "tile--disc",
        shape === "screen" && "tile--screen"
      )}
    >
      <Inner className="tile__photo">{children}</Inner>
    </Tag>
  );
}
