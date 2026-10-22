import Image from "next/image";
import { PHONE, PHONE_HREF } from "@/lib/links";
import { BookLink } from "@/components/BookLink";
import { Flora } from "@/components/Flora";
import { Tile, type Texture } from "@/components/Tile";
import { FaceMap, type FaceMapData } from "@/components/FaceMap";

interface PageHeroProps {
  /** Two short lines; joined as one heading. */
  title: [string, string];
  lead: string;
  image: string;
  imageAlt: string;
  /** Backing texture for the hero photo; each page gets its own. */
  texture?: Texture;
  /** Mapping lines drawn over the photo, as on the homepage hero. */
  map?: FaceMapData;
}

export function PageHero({ title, lead, image, imageAlt, texture = "linen", map }: PageHeroProps) {
  const photo = <Image src={image} alt={imageAlt} width={900} height={1200} priority sizes="(min-width: 900px) 34vw, 90vw" />;

  return (
    <section aria-labelledby="page-title" className="has-flora">
      <Flora at="bl" />
      <div className="wrap phero__in">
        <div className="phero__text">
          <h1 id="page-title" className="t-display">
            {title[0]} {title[1]}
          </h1>
          <p className="t-lead measure">{lead}</p>
          <div className="hero__actions">
            <BookLink className="btn">Book a consultation</BookLink>
            <a href={PHONE_HREF} className="link">
              Call {PHONE}
            </a>
          </div>
        </div>
        <Tile className="phero__pic" texture={texture} shape="disc">
          {map ? <FaceMap map={map}>{photo}</FaceMap> : photo}
        </Tile>
      </div>
    </section>
  );
}
