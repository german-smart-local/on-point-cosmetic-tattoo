# Artist Specification

## Overview
- **Target file:** `src/components/Artist.tsx`
- **Screenshot:** `docs/design-references/sec-artist.png`
- **Interaction model:** static
- **id:** wrap section in `id="artist"`

## Structure
Two-column section. Subtle cream/white bg. Max-width ~1200px centered, padding ~80px 24px, gap ~48px, align items stretch/center.
- **Left col (~48%):** image `/images/artist-lisa.jpg` (629×650, woman with blonde hair, hand resting on chin, dark top, soft studio backdrop). `next/image`, object-cover, width 100%, border-radius ~4px.
- **Right col (~52%):** a cream card (`bg #F7F3EA`, padding ~40px, border-radius ~6px) OR plain — original is a light cream panel. Content:
  - H2 "Meet Your Artist" — Montserrat weight 300, 40px, color `#C09569`, margin-bottom 6px.
  - H3 "Lisa Eagles" — Montserrat weight 100, 25px, color `#303030`, margin-bottom 18px.
  - 4 paragraphs (Source Sans 15px, color #444, line-height 1.7, margin-bottom 14px):
    1. "Established in 2016, On Point Cosmetic Tattoo Studio operates from Buderim, servicing clients across the Sunshine Coast. Lisa is the certified cosmetic tattoo artist behind the studio."
    2. "Lisa began her career in the cosmetic field while working alongside a Gold Coast plastic surgeon, where she developed an interest in cosmetic tattoo procedures. She later trained in cosmetic tattoo techniques in Australia and has continued professional development through additional training with industry educators, both nationally and internationally."
    3. "Ongoing education forms part of her practice. Lisa regularly updates her skills to stay informed about current techniques and application methods."
    4. "Her work includes nano realism hair strokes, feather touch microblading, powder and combination brows, eyeliner enhancement, designer eyeliner and lip tattoo techniques."

## Behaviors
- Static.

## Assets
- `/images/artist-lisa.jpg`

## Responsive
- Desktop (1440): 2-col, image left.
- Tablet (768): 2-col maintained or stack < 820px.
- Mobile (390): stack — image on top full width, text card below.

## Imports
- `next/image`. Export `Artist`.
