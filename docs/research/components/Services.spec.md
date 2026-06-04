# Services Specification

## Overview
- **Target file:** `src/components/Services.tsx`
- **Screenshot:** `docs/design-references/sec-services.png`
- **Interaction model:** static (card hover)

## Structure
Section, white/cream bg, padding ~80px 24px, max-width ~1200px centered. Optional decorative gold circle (a large `border: 1px solid #C09569` circle, ~340px, low opacity) absolutely positioned behind the cards on the right — optional nicety.
- **Header row** (flex, justify-between, align-center, margin-bottom ~40px):
  - Left: H2 "Services" — Montserrat weight 300, 40px, color `#C09569`.
  - Right: two buttons inline (gap 12px):
    - "Book Now" — filled cream `#F7F3EA`, border `1px solid #303030`, radius 15px, padding 13px 30px, Josefin Sans 18px, color `#303030`, `href="#contact"`.
    - "0414 502 807" — same style but radius 10px, `href="tel:0414502807"`.
- **Cards grid:** 3 columns, gap ~24px (desktop). Each card:
  - `position: relative`, border-radius ~6px, overflow hidden, aspect ratio ~1/1 (≈319×320).
  - Background image (`next/image` fill, object-cover):
    - Card 1 Eyebrows → `/images/service-eyebrows.png`
    - Card 2 Eye Liners → `/images/service-eyeliners.png`
    - Card 3 Lips → `/images/service-lips.png`
  - Overlay: linear-gradient from taupe `rgba(176,161,141,0.55)` (top) to `rgba(48,48,48,0.65)` (bottom), covering full card.
  - Content (absolute, padding ~20px, flex column, justify-center, text-align center, color white):
    - H3 title — Montserrat weight 100, 25px, color white, margin-bottom 10px.
    - Description — Source Sans ~14px, color white, line-height 1.5.

## Card content (verbatim)
- **Eyebrows:** "My eyebrow tattoo services include feather touch brows, microblading, powder brows, combination brows and hair strokes."
- **Eye Liners:** "At my studio, I offer cosmetic eyeliner tattoos, including eyeliner enhancement and designer eyeliner."
- **Lips:** "My lip tattoo options include lip liner tattoo, lip blend tattoo and full lip tattoo. During consultation, I review lip tone, border definition and colour selection."

## Behaviors
- Card hover: overlay darkens (increase dark stop opacity to ~0.8), slight `scale(1.02)` or image `scale(1.05)`, transition 0.4s ease. cursor pointer.
- Buttons hover → bg gold `#C09569`, white text, 0.3s.

## Assets
- `/images/service-eyebrows.png`, `/images/service-eyeliners.png`, `/images/service-lips.png`

## Responsive
- Desktop (1440): 3 columns.
- Tablet (768): 3 columns (smaller) or 2; header row keeps buttons.
- Mobile (390): 1 column stacked; header stacks H2 above buttons; buttons full width.

## Imports
- `next/image`. Define cards array inline. Export `Services`.
