"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ANCHORS, EXTERNAL, NAV_LINKS, PHONE, PHONE_HREF, ROUTES, SOCIAL_LINKS } from "@/lib/links";
import {
  MapPinIcon,
  ChevronDownIcon,
  MenuIcon,
  CloseIcon,
} from "@/components/icons";

const SERVICE_LINKS = [
  { label: "Eyebrows", href: ROUTES.eyebrows },
  { label: "Eye Liners", href: ROUTES.eyeliners },
  { label: "Lips", href: ROUTES.lips },
];

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      {/* Top bar */}
      <div className="flex h-11 items-center justify-between bg-cream px-6">
        <a
          href={EXTERNAL.maps}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-colors hover:text-gold"
        >
          <MapPinIcon className="text-[16px] text-gold" />
          <span className="text-[14px] text-ink">Buderim, QLD 4556</span>
        </a>
        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-gold"
            >
              <Icon className="text-[15px]" />
            </a>
          ))}
        </div>
      </div>

      {/* Main nav row */}
      <div className="flex h-[92px] items-center justify-between border-b border-black/5 bg-white/90 px-8">
        {/* Left: desktop nav links */}
        <nav className="hidden items-center gap-7 lg:flex">
          <div className="group relative">
            <Link
              href={ANCHORS.about}
              className="flex items-center gap-1 font-josefin text-[15px] uppercase tracking-wide text-ink transition-colors hover:text-gold"
            >
              About Us
              <ChevronDownIcon className="text-[14px]" />
            </Link>
            <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="min-w-[160px] rounded-lg bg-white py-1 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <Link
                  href={ANCHORS.testimonials}
                  className="block px-4 py-2 font-josefin text-[15px] text-ink transition-colors hover:text-gold"
                >
                  Testimonials
                </Link>
              </div>
            </div>
          </div>

          <div className="group relative">
            <Link
              href={ANCHORS.services}
              className="flex items-center gap-1 font-josefin text-[15px] uppercase tracking-wide text-ink transition-colors hover:text-gold"
            >
              Services
              <ChevronDownIcon className="text-[14px]" />
            </Link>
            <div className="invisible absolute left-0 top-full z-50 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="min-w-[160px] rounded-lg bg-white py-1 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                {SERVICE_LINKS.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="block px-4 py-2 font-josefin text-[15px] text-ink transition-colors hover:text-gold"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href={ROUTES.afterCare}
            className="font-josefin text-[15px] uppercase tracking-wide text-ink transition-colors hover:text-gold"
          >
            After Care
          </Link>
        </nav>

        {/* Center: logo */}
        <Link href={ROUTES.home} className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="On Point Cosmetic Tattoo"
            width={300}
            height={52}
            priority
            className="h-[40px] w-auto lg:h-[52px]"
          />
        </Link>

        {/* Right: desktop buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={ROUTES.contact}
            className="rounded-[15px] border border-ink bg-transparent px-7 py-3 font-josefin text-[18px] text-ink transition-colors hover:border-gold hover:bg-gold hover:text-white"
          >
            Book Now
          </Link>
          <a
            href={PHONE_HREF}
            className="rounded-[10px] border border-ink bg-cream px-6 py-3 font-josefin text-[18px] text-ink transition-colors hover:border-gold hover:bg-gold hover:text-white"
          >
            {PHONE}
          </a>
        </div>

        {/* Mobile: hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
          className="text-[28px] text-ink lg:hidden"
        >
          <MenuIcon />
        </button>
      </div>

      {/* Mobile drawer + overlay */}
      <div
        aria-hidden={!drawerOpen}
        onClick={closeDrawer}
        className={cn(
          "fixed inset-0 z-[100] bg-black/40 transition-opacity lg:hidden",
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />
      <div
        className={cn(
          "fixed left-0 top-0 z-[101] flex h-full w-[280px] flex-col bg-cream p-6 transition-transform lg:hidden",
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeDrawer}
          className="self-end text-[28px] text-ink"
        >
          <CloseIcon />
        </button>

        <nav className="mt-4 flex flex-col">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={closeDrawer}
              className="py-2 font-josefin text-[15px] uppercase tracking-wide text-ink transition-colors hover:text-gold"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3 pt-6">
          <Link
            href={ROUTES.contact}
            onClick={closeDrawer}
            className="rounded-[15px] border border-ink bg-transparent px-7 py-3 text-center font-josefin text-[18px] text-ink transition-colors hover:border-gold hover:bg-gold hover:text-white"
          >
            Book Now
          </Link>
          <a
            href={PHONE_HREF}
            onClick={closeDrawer}
            className="rounded-[10px] border border-ink bg-white px-6 py-3 text-center font-josefin text-[18px] text-ink transition-colors hover:border-gold hover:bg-gold hover:text-white"
          >
            {PHONE}
          </a>
        </div>
      </div>
    </header>
  );
}
