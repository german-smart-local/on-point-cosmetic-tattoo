import { PHONE_HREF } from "@/lib/links";
import { BookLink } from "@/components/BookLink";

/** Fixed to the bottom of the screen on phones only (hidden from 900px by CSS). */
export function ActionBar() {
  return (
    <nav className="actionbar" aria-label="Quick actions">
      <a href={PHONE_HREF} className="btn btn--light">
        Call Lisa
      </a>
      <BookLink className="btn">Book</BookLink>
    </nav>
  );
}
