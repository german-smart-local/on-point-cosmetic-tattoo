import { useId } from "react";
import Image from "next/image";
import { PHONE, PHONE_HREF } from "@/lib/links";

export interface FaqItem {
  q: string;
  a: string;
}

/** Native exclusive <details> (shared name): one answer open at a time, and it works without script. */
export function Faq({ title = "Questions, answered", items }: { title?: string; items: FaqItem[] }) {
  const group = useId();
  return (
    <section id="questions" aria-labelledby={`${group}-title`} className="section">
      <div className="wrap grid12 faq">
        <div className="faq__head">
          <h2 id={`${group}-title`} className="t-head">
            {title}
          </h2>
          <p className="soft">
            Something else on your mind? Call Lisa on{" "}
            <a href={PHONE_HREF} className="link">
              {PHONE}
            </a>
            .
          </p>
          <Image src="/images/arch-flowers.png" alt="" width={436} height={558} className="faq__arch" aria-hidden />
        </div>
        <div className="faq__list">
          {items.map((item, i) => (
            <details key={item.q} name={group} open={i === 0}>
              <summary>
                <span className="faq__q">{item.q}</span>
                <span className="faq__icon" aria-hidden />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
