import { EMAIL, EMAIL_HREF, EXTERNAL, HOURS, PHONE, PHONE_HREF, SITE_NAME } from "@/lib/links";

// Name, address and phone (NAP) with a map of the studio, for the suburb landing pages.
// The NAP matches the footer and the structured data word for word: the studio publishes its suburb
// and postcode, not a street address.
const MAP_QUERY = encodeURIComponent(`${SITE_NAME}, Buderim QLD 4556`);

export function StudioVisit({ from }: { from?: string }) {
  // Directions from the visitor's suburb when there is one, otherwise from wherever they are.
  const directions =
    `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}` +
    (from ? `&origin=${encodeURIComponent(`${from} QLD`)}` : "");

  return (
    <section className="section on-white" aria-labelledby="visit-title">
      <div className="wrap grid12 split">
        <div className="split__text min-[900px]:col-start-1 min-[900px]:col-span-4">
          <h2 id="visit-title" className="t-head">
            {from && from !== "Buderim" ? `From ${from} to the studio` : "Visit the studio"}
          </h2>
          <address className="not-italic">
            <p className="measure">
              <strong>{SITE_NAME}</strong>
              <br />
              <a href={EXTERNAL.maps} target="_blank" rel="noopener noreferrer" className="link">
                Buderim, QLD 4556
              </a>
            </p>
            <ul className="ticks">
              <li>
                <a href={PHONE_HREF} className="link">
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={EMAIL_HREF} className="link break-all">
                  {EMAIL}
                </a>
              </li>
              {HOURS.map((h) => (
                <li key={h.days}>
                  {h.days}: {h.time}
                </li>
              ))}
            </ul>
          </address>
          <a href={directions} target="_blank" rel="noopener noreferrer" className="btn">
            Get directions
          </a>
        </div>
        <div className="col-span-12 min-[900px]:col-start-6 min-[900px]:col-span-7">
          <iframe
            title={`Map of ${SITE_NAME} in Buderim`}
            // The CID pins the studio's own Google Business Profile, not just the suburb.
            src={`${EXTERNAL.googleProfile}&output=embed`}
            className="map-embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
