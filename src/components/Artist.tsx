import Image from "next/image";
import { BookLink } from "@/components/BookLink";
import { Flora } from "@/components/Flora";
import { Tile } from "@/components/Tile";

export function Artist() {
  return (
    <section id="about" aria-labelledby="about-title" className="section on-taupe has-flora">
      <Flora at="br" />
      <div className="wrap grid12 about">
        <Tile className="about__pic" texture="charcoal" tilt="left">
          <Image
            src="/images/artist-lisa.jpg"
            alt="Lisa Eagles, certified cosmetic tattoo artist and owner of On Point"
            width={937}
            height={960}
            sizes="(min-width: 900px) 40vw, 90vw"
          />
        </Tile>
        <div className="about__text">
          <h2 id="about-title" className="t-head">
            Meet Lisa Eagles
          </h2>
          <div className="stack mt-6 measure-wide">
            <p className="t-lead">
              Lisa began in the cosmetic field working alongside a Gold Coast plastic surgeon, which
              is where cosmetic tattoo caught her interest.
            </p>
            <p>
              She trained in cosmetic tattoo techniques in Australia and keeps training with educators
              here and overseas, updating her skills as techniques and application methods change.
            </p>
            <p>
              Her work covers nano realism hair strokes, feather touch microblading, powder and
              combination brows, eyeliner enhancement, designer eyeliner and lip tattoo.
            </p>
          </div>
          <dl className="about__facts">
            <div>
              <dt>Since 2016</dt>
              <dd>On Point opened in Buderim</dd>
            </div>
            <div>
              <dt>Certified artist</dt>
              <dd>Lisa is the artist behind the studio</dd>
            </div>
          </dl>
          <BookLink className="btn mt-8">Book with Lisa</BookLink>
        </div>
      </div>
    </section>
  );
}
