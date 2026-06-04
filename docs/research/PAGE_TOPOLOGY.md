# Page Topology — onpointcosmetictattoo.com.au

Single-page site built on Duda. Cream/beige + gold luxury aesthetic. Page height ~5656px @1440.

## Palette
- Cream background: `#F7F3EA` (rgb 247,243,234)
- White: `#FFFFFF`
- Gold accent: `#C09569` (rgb 192,149,105) — headings, logo
- Dark text: `#303030` (rgb 48,48,48)
- Taupe card overlay: ~`#B0A18D` (rgb 176,161,141)

## Fonts
- Headings: **Montserrat** (weights 100/200/300 — very light)
- Body: **Source Sans Pro**
- Buttons/labels: **Josefin Sans** (20px)
- Decorative also present: Alata

## Section order (top → bottom)
1. **TopBar** (inside fixed header) — location "Buderim, QLD 4556" left; 4 social icons right. Cream bg.
2. **Header / Nav** (FIXED, z-13, ~185px tall incl. topbar, bg `rgba(255,255,255,0.925)`) — left: ABOUT US▾, SERVICES▾, AFTER CARE; center: ON POINT logo (text-style image); right: "Book Now" (outline) + "0414 502 807" (filled cream) buttons. Mobile: hamburger drawer (z-101, bg #F7F3EA).
3. **Hero** — full-bleed portrait (`hero.png`), cream left zone, logo + tagline area. H1 "Cosmetic Tattooing on the Sunshine Coast" (50px, weight 200, uppercase, gold) sits in a band below hero image.
4. **Welcome** — 2-col: left face image (`welcome-face.png`), right: H2 "Welcome to My Cosmetic Tattoo Studio" (40px gold weight 300) + 2 paragraphs + 3 feature rows (icon + bold label + desc: Certified Artist / Customised designs / Premium Equipment) + "Call 0414 502 807..." line + "Get In Touch" button.
5. **Services** — H2 "Services" (left, gold) with "Book Now" + "0414 502 807" buttons top-right; 3 image cards (Eyebrows / Eye Liners / Lips) with taupe gradient overlay + white title + description. Decorative circle behind.
6. **GetInTouch** — H2 "Get in Touch" (centered, gold). Form: Name | Email | Phone (3-col row), Message textarea full width, "Book Now" submit button (centered, filled cream rounded). White bg.
7. **Artist** — 2-col: left image (`artist-lisa.jpg`), right cream card: H2 "Meet Your Artist" (gold) + H3 "Lisa Eagles" + 4 bio paragraphs.
8. **Testimonials** — H2 "Testimonials" (centered gold). Localsearch reviews carousel: "5.0 ★★★★★ (24)" header + review cards (avatar, name, verified badge, Google icon, time, 5 stars, text, "Read more") + carousel dots. Rebuild as static carousel.
9. **FacialImage** — full-width band image (`facial-treatment.jpg`, woman receiving facial).
10. **Footer** — cream bg with line-art flower background (`footer-bg.png`). Centered logo, then 3 cols: SITE LINKS / CONTACT (phone, email, address, ABN, socials) / TRADING HOURS (Mon-Fri 9-5, Sat-Sun Appointment Only) + Localsearch "2026 Certificate of trust" badge + "Powered by localsearch". Bottom: "© 2026 All Rights Reserved | On Point Cosmetic Tattoo Studio".

## Layout
- Content max-width ~1200px centered; full-bleed image bands break out.
- Fixed header overlays everything; page content starts under it.
- Z-index: header 13, mobile drawer 101, drawer overlay 6.

## Interaction models
- Header: static fixed (no scroll transform observed; stays semi-transparent white).
- Nav ABOUT US / SERVICES: dropdown menus (▾) on hover/click.
- Service cards / buttons: hover states (overlay/elevation).
- Testimonials: carousel (auto + dots).
- Mobile (<~768px): nav collapses to hamburger drawer.
- No smooth-scroll library, no scroll-snap, no parallax.
