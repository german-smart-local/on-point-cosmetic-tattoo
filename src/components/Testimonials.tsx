"use client";

import { useState } from "react";
import { EXTERNAL } from "@/lib/links";
import { Flora } from "@/components/Flora";
import { StarIcon } from "@/components/icons";

// Real Google reviews, as published on the studio's site (5.0 from 34 reviews). Excerpts, in the reviewers' words.
const REVIEWS = [
  {
    name: "Lisa Barrett",
    treatment: "nano brows",
    text: "On the day, she ensured I was comfortable with everything, talked me through every step and was OBSESSIVE over the colour choices and mapping of my brows.",
  },
  {
    name: "Alegra Horstman",
    treatment: "nano brows",
    text: "She took the time to carefully assess my face shape and natural brows, ensuring the final result was perfectly suited to me.",
  },
  {
    name: "Kate Roberts",
    treatment: "brows",
    text: "Lisa did an amazing job and her attention to detail was exceptional. I'm already planning to book in for lip blushing with her soon!",
  },
  {
    name: "Shanelle Wilson",
    treatment: "Google review",
    text: "Lisa was amazing & I would never go to someone else again! She is a perfectionist and this is the clinic to book.",
  },
];

/** Five gold stars. Every review shown is 5 stars: the studio's Google average is 5.0 from 34. */
function Stars() {
  return (
    <span className="stars" role="img" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <StarIcon key={i} aria-hidden />
      ))}
    </span>
  );
}

/** One review is featured large; choosing any of the others brings it forward. */
export function Testimonials() {
  const [lead, setLead] = useState(0);
  const featured = REVIEWS[lead];

  return (
    <section id="testimonials" aria-labelledby="reviews-title" className="section on-white has-flora">
      <Flora at="bl" />
      <div className="wrap">
        <div className="grid12 reviews__head">
          <h2 id="reviews-title" className="t-head">
            Rated 5.0 from 34 Google reviews
          </h2>
          <a href={EXTERNAL.google} target="_blank" rel="noopener noreferrer" className="link">
            Read them all on Google
          </a>
        </div>
        <div className="grid12 reviews__body">
          <figure key={featured.name} className="lead-quote" aria-live="polite">
            <Stars />
            <blockquote>
              <p>{featured.text}</p>
            </blockquote>
            <figcaption>
              <strong>{featured.name}</strong>, {featured.treatment}
            </figcaption>
          </figure>
          <div className="quotes" role="group" aria-label="More reviews">
            {REVIEWS.map((r, i) =>
              i === lead ? null : (
                <button key={r.name} type="button" className="quote" onClick={() => setLead(i)}>
                  <Stars />
                  <span className="quote__text">{r.text}</span>
                  <span className="quote__by">
                    <strong>{r.name}</strong>, {r.treatment}
                  </span>
                  <span className="quote__cta">Read as featured</span>
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
