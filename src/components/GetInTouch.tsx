"use client";

import { useState } from "react";
import { EMAIL, HOURS, PHONE, PHONE_HREF } from "@/lib/links";
import { Flora } from "@/components/Flora";

/**
 * There is no form backend, so sending opens the visitor's email app with the enquiry written out
 * to the studio's address.
 */
export function GetInTouch({ title = "Book a consultation" }: { title?: string }) {
  const [opened, setOpened] = useState(false);
  const [treatment, setTreatment] = useState("");
  const [errors, setErrors] = useState<{ name?: string; contact?: string }>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const name = get("name");

    // Lisa needs a name and one way to reply; say which is missing, next to the field.
    const found: typeof errors = {};
    if (!name) found.name = "Add your name so Lisa knows who to reply to.";
    if (!get("phone") && !get("email")) found.contact = "Add a phone number or an email so Lisa can reply.";
    setErrors(found);
    if (found.name || found.contact) {
      e.currentTarget.querySelector<HTMLInputElement>(found.name ? "#book-name" : "#book-phone")?.focus();
      return;
    }

    const body = [
      "Hi Lisa,",
      "",
      `I'd like to book a consultation${treatment ? ` for ${treatment.toLowerCase()}` : ""}.`,
      "",
      get("message"),
      "",
      name,
      get("phone"),
      get("email"),
    ].join("\n");
    const subject = `Consultation enquiry${name ? ` from ${name}` : ""}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <section id="book" aria-labelledby="book-title" className="section book has-flora">
      <Flora at="bl" />
      <div className="wrap grid12 book__in">
        <div className="book__text">
          <h2 id="book-title" className="t-head">
            {title}
          </h2>
          <p className="t-lead measure">
            Tell Lisa what you have in mind and she&apos;ll come back to you with a time. If you reach
            voicemail, leave your name and number.
          </p>
          <p className="mt-8">
            <a href={PHONE_HREF} className="t-h3 font-serif underline decoration-1 underline-offset-[0.2em]">
              {PHONE}
            </a>
          </p>
          <dl>
            {HOURS.map((h) => (
              <div key={h.days} className="contents">
                <dt>{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <form className="book__form" onSubmit={handleSubmit} noValidate>
          <div className="pair">
            <div>
              <label htmlFor="book-name">Name</label>
              <input
                id="book-name"
                name="name"
                type="text"
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "book-name-error" : undefined}
                onInput={() => errors.name && setErrors((x) => ({ ...x, name: undefined }))}
              />
              {errors.name && (
                <p id="book-name-error" className="book__error">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="book-phone">Phone</label>
              <input
                id="book-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                aria-invalid={Boolean(errors.contact)}
                aria-describedby={errors.contact ? "book-contact-error" : undefined}
                onInput={() => errors.contact && setErrors((x) => ({ ...x, contact: undefined }))}
              />
            </div>
          </div>
          <div>
            <label htmlFor="book-email">Email</label>
            <input
              id="book-email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.contact)}
              aria-describedby={errors.contact ? "book-contact-error" : undefined}
              onInput={() => errors.contact && setErrors((x) => ({ ...x, contact: undefined }))}
            />
            {errors.contact && (
              <p id="book-contact-error" className="book__error">
                {errors.contact}
              </p>
            )}
          </div>
          <fieldset className="book__choice">
            <legend>Treatment</legend>
            <div>
              {["Eyebrows", "Eyeliner", "Lips", "Not sure yet"].map((t) => (
                <label key={t} className="chip">
                  <input
                    type="radio"
                    name="treatment"
                    value={t === "Not sure yet" ? "" : t}
                    checked={treatment === (t === "Not sure yet" ? "" : t)}
                    onChange={(e) => setTreatment(e.target.value)}
                  />
                  <span>{t}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <div>
            <label htmlFor="book-message">Message</label>
            <textarea id="book-message" name="message" />
          </div>
          <button type="submit" className="btn btn--block">
            Send to Lisa
          </button>
          <p className="book__note" aria-live="polite">
            {opened
              ? `Your email app should have opened with the message. If it didn't, write to ${EMAIL}.`
              : "Sending opens your email app with the message ready to go."}
          </p>
        </form>
      </div>
    </section>
  );
}
