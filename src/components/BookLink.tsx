"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/lib/links";

/**
 * A booking button for the Contact page. `to="form"` lands on the message form; `to="top"` lands on
 * the page hero. When the visitor is already on the Contact page it scrolls there every time (a
 * plain link does nothing once the URL is unchanged).
 */
export function BookLink({
  to = "form",
  className,
  onClick,
  tabIndex,
  children,
}: {
  to?: "form" | "top";
  className?: string;
  onClick?: () => void;
  tabIndex?: number;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const href = to === "form" ? ROUTES.book : ROUTES.contact;

  return (
    <Link
      href={href}
      className={className}
      tabIndex={tabIndex}
      onClick={(e) => {
        onClick?.();
        if (pathname !== ROUTES.contact) return;
        e.preventDefault();
        const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
        if (to === "top") {
          window.scrollTo({ top: 0, behavior });
        } else {
          document.getElementById("book")?.scrollIntoView({ behavior, block: "start" });
        }
        history.replaceState(null, "", href);
      }}
    >
      {children}
    </Link>
  );
}
