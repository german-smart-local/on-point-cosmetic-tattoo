"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BookLink } from "@/components/BookLink";
import { ANCHORS, BAR_LINKS, NAV_LINKS, PHONE, PHONE_HREF, ROUTES, SERVICE_LINKS } from "@/lib/links";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // The bar stays on screen at all times; once the page has scrolled it gains a bottom line.
  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 8);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Services dropdown (desktop): opens on hover, click or keyboard; closes on Escape or a click outside.
  const [services, setServices] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!services) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setServices(false);
    const onDown = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setServices(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [services]);
  const onService = SERVICE_LINKS.some((s) => s.href === pathname);

  const close = () => setOpen(false);
  const tab = open ? 0 : -1;

  return (
    <header className={cn("bar", scrolled && "is-scrolled")}>
      <div className="wrap bar__in">
        <Link href={ROUTES.home} onClick={close} className="bar__logo" aria-label="On Point Cosmetic Tattoo Studio, home">
          <Image src="/images/arch-monogram.png" alt="" width={324} height={364} priority className="bar__mark" />
          <Image src="/images/logo.png" alt="" width={470} height={80} priority className="bar__word" />
        </Link>

        <nav className="bar__nav" aria-label="Main">
          <Link href={ROUTES.home} aria-current={pathname === ROUTES.home ? "page" : undefined}>
            Home
          </Link>
          <div
            ref={menuRef}
            className={cn("navmenu", services && "is-open", onService && "is-current")}
            onMouseEnter={() => setServices(true)}
            onMouseLeave={() => setServices(false)}
          >
            <button
              type="button"
              className="navmenu__btn"
              aria-expanded={services}
              aria-controls="services-menu"
              onClick={(e) => {
                // With a mouse the hover has already opened it, so a click must not shut it again;
                // touch and keyboard (detail 0) toggle.
                const mouse = e.detail > 0 && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
                setServices((v) => (mouse ? true : !v));
              }}
            >
              Services
            </button>
            <div id="services-menu" className="navmenu__panel">
              {SERVICE_LINKS.map(({ label, href, note }) => (
                <Link
                  key={label}
                  href={href}
                  aria-current={pathname === href ? "page" : undefined}
                  tabIndex={services ? 0 : -1}
                  onClick={() => setServices(false)}
                >
                  <strong>{label}</strong>
                  <span>{note}</span>
                </Link>
              ))}
              <div className="navmenu__all">
                <Link href={ANCHORS.treatments} tabIndex={services ? 0 : -1} onClick={() => setServices(false)}>
                  <strong>All treatments</strong>
                  <span>Compare brows, eyeliner and lips</span>
                </Link>
              </div>
            </div>
          </div>
          {BAR_LINKS.map(({ label, href }) => (
            <Link key={label} href={href} aria-current={pathname === href ? "page" : undefined}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="bar__actions">
          <a href={PHONE_HREF} className="bar__phone">
            {PHONE}
          </a>
          <BookLink to="top" className="btn hidden sm:inline-flex">
            Book a consultation
          </BookLink>
          <button
            type="button"
            className="bar__menu"
            aria-expanded={open}
            aria-controls="drawer"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div id="drawer" className={cn("drawer", open && "is-open")} aria-hidden={!open}>
        <nav aria-label="Menu">
          <Link href={ROUTES.home} onClick={close} tabIndex={tab}>
            Home
          </Link>
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={label} href={href} onClick={close} tabIndex={tab}>
              {label}
            </Link>
          ))}
          <Link href={ROUTES.locations} onClick={close} tabIndex={tab}>
            Areas we serve
          </Link>
          <Link href={ROUTES.contact} onClick={close} tabIndex={tab}>
            Contact
          </Link>
        </nav>
        <div className="drawer__foot">
          <BookLink to="top" onClick={close} className="btn" tabIndex={tab}>
            Book a consultation
          </BookLink>
          <a href={PHONE_HREF} className="link" tabIndex={tab}>
            Call Lisa on {PHONE}
          </a>
        </div>
      </div>
    </header>
  );
}
