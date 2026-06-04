# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/sec-getintouch.png` (header clearly visible at top)
- **Interaction model:** static fixed bar + hover dropdowns + mobile hamburger drawer (client component — uses `"use client"`)

## Structure
Fixed full-width header pinned to top, z-index 50. Two stacked rows:
- **Top bar** (cream `#F7F3EA`, ~44px): left = MapPin icon + "Buderim, QLD 4556" (dark, ~14px); right = 4 social icon links (Facebook, LocalSearch, GoogleBusiness, Instagram) as small dark circles ~22px.
- **Main nav** (white `rgba(255,255,255,0.925)`, ~95px, slight bottom border): 3-column grid.
  - Left: nav links "ABOUT US ▾", "SERVICES ▾", "AFTER CARE" — Josefin Sans, uppercase, ~15px, color `#303030`, letter-spacing ~0.5px, gap ~28px. Caret `ChevronDownIcon` after ABOUT US and SERVICES.
  - Center: logo image `/images/logo.png` (the "ON POINT / COSMETIC TATTOO STUDIO" gold wordmark), height ~56px, `next/image`.
  - Right: two buttons:
    - "Book Now" — outline: bg transparent, border `1px solid #303030`, radius 15px, padding 13px 30px, Josefin Sans 18px, color `#303030`.
    - "0414 502 807" — filled: bg `#F7F3EA`, border `1px solid #303030`, radius 10px, padding 13px 26px, Josefin Sans 18px, color `#303030`. (`href="tel:0414502807"`)

## Dropdowns
- "ABOUT US ▾" → menu with: Testimonials (`#testimonials`)
- "SERVICES ▾" → menu with: Eyebrows, Eye Liners, Lips (`#services`)
- Show on hover (desktop). Small white panel, soft shadow `0 4px 20px rgba(0,0,0,0.08)`, radius 8px, links Josefin Sans 15px padding 8px 16px, hover color gold `#C09569`.

## Behaviors
- Header `position: fixed; top:0; left:0; right:0; z-index:50`. Always semi-transparent white on the main row (no scroll change needed).
- Nav links hover → color `#C09569`, transition 0.3s.
- Buttons hover → bg `#C09569`, color white (subtle), transition 0.3s.

## Mobile (< 1000px)
- Hide left nav links + show a hamburger `MenuIcon` button (left or right). Logo stays centered (smaller, ~44px). Hide the two right buttons or keep just the phone button.
- Hamburger opens a drawer sliding from the left: fixed, bg `#F7F3EA`, width ~280px, z-index 101, with CloseIcon and the full nav list (Home, About Us, Testimonials, Eyebrows, Eye Liners, Lips, After Care, Areas Near Us, Contact Us) stacked, Josefin Sans uppercase, plus Book Now + phone buttons. Dark overlay `rgba(0,0,0,0.4)` behind (z-index 100), click to close.
- Use React `useState` for drawer open/close.

## Nav data
Desktop left: ABOUT US (▾ Testimonials), SERVICES (▾ Eyebrows, Eye Liners, Lips), AFTER CARE.
All section links are anchors: About Us→`#artist`, Testimonials→`#testimonials`, Services/Eyebrows/EyeLiners/Lips→`#services`, After Care→`#footer`, Home→`#top`, Contact Us→`#contact`.

## Imports
- `next/image`, `cn` from `@/lib/utils`, icons from `@/components/icons` (MapPinIcon, FacebookIcon, InstagramIcon, LocalSearchIcon, GoogleBusinessIcon, ChevronDownIcon, MenuIcon, CloseIcon).

## Responsive
- Desktop (1440): full 3-col nav as above.
- Tablet/Mobile (≤1000): hamburger drawer; logo centered; condensed.

## Notes
- Component should accept no required props. Export `Header`.
- Add `pt` spacer is handled at page level — Header itself is fixed.
