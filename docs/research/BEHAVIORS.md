# Behaviors — onpointcosmetictattoo.com.au

## Global
- **Smooth scroll lib:** none (native scroll). No scroll-snap, no parallax, no animation-timeline.
- **Fixed header:** `position: fixed; top:0; z-index:13; height:~185px; background: rgba(255,255,255,0.925)`. Appearance does NOT change on scroll (same at scrollY 0 and 800). Content sits beneath it.
- **Entrance animations:** Duda fade/slide-in on scroll into view is subtle; acceptable to add light fade-up but not required for fidelity.

## Header / Nav
- "ABOUT US" and "SERVICES" have ▾ caret → dropdown submenus.
  - ABOUT US ▾ → Testimonials
  - SERVICES ▾ → Eyebrows, Eye Liners, Lips
- Trigger: hover (desktop). Submenu fades/expands.
- Buttons "Book Now" (outline, border #303030, radius 15px) and "0414 502 807" (filled cream #F7F3EA, radius 10px) — hover: subtle bg/opacity shift.

## Buttons (global)
- Font Josefin Sans 20px. Radius 10–15px. Padding ~13-15px vertical.
- Hover: background lightens / slight opacity or color shift (~0.3s ease).

## Service cards
- Image with taupe→transparent gradient overlay; white title (Montserrat 25px weight 100) + white description.
- Hover: overlay darkens slightly / card lifts (subtle). Transition ~0.3s.

## Get in Touch form
- Inputs: underline/box style, cream-tinted field bg (`#F7F3EA`-ish), no visible border until focus.
- Submit "Book Now": filled cream rounded; success/error messages exist ("Thank you for contacting..." / "Oops, there was an error...") — static clone shows form only.

## Testimonials carousel
- Localsearch widget: rating summary "5.0 ★★★★★ (24)", 3 visible cards, dot pagination, auto-advance + manual dots.
- Rebuild as a simple auto-advancing carousel with the captured reviews.

## Responsive
- **Desktop 1440:** multi-column as described in topology.
- **Tablet 768:** 2-col sections may keep 2-col or stack; nav still may show; service cards → 2 or 1 col.
- **Mobile 390:** nav → hamburger drawer (z-101, bg #F7F3EA, slides from side). All 2-col sections stack to single column; images full-width; service cards stack; form fields stack.
- Breakpoint: ~768px primary; nav hamburger appears ~<1000px on Duda.

## Captured reviews (testimonials)
- Amy Lewis · 2 months ago · ★★★★★ · "I couldn't be happier with my brows! Lisa did an amazing job. She really took the time to liste…"
- Lorraine Jones · 2 months ago · ★★★★★ · "I travel from Gladstone to the Sunny Coast to have my Eyebrows Cosmetic Tattoo with…"
- Tegan McPherson · 4 months ago · ★★★★★ · "I couldn't have asked for a better first experience with cosmetic tattooing. I had micro…"
- Summary: 5.0 average, 24 reviews (Google).
