# GetInTouch Specification

## Overview
- **Target file:** `src/components/GetInTouch.tsx`
- **Screenshot:** `docs/design-references/sec-getintouch.png`
- **Interaction model:** static form (client component for basic submit handler — `"use client"`)
- **id:** wrap section in `id="contact"`

## Structure
White bg, padding ~80px 24px, max-width ~1180px centered, text-align center for heading.
- H2 "Get in Touch" — Montserrat weight 300, ~56px (large), color `#C09569`, text-align center, margin-bottom ~48px.
- **Form** (max-width ~1120px):
  - Row 1: 3 columns (grid, gap ~24px): Name, Email, Phone. Each field:
    - Label above (Source Sans, bold, ~15px, color `#303030`, margin-bottom 6px): "Name" / "Email" / "Phone".
    - Input: full width, bg `#F7F3EA` (cream tint), border none, border-bottom optional, height ~44px, padding 10px 12px, radius 2px, font Source Sans 16px. Focus: subtle gold outline.
  - Row 2: "Message" label + textarea full width, bg `#F7F3EA`, min-height ~110px, padding 12px, radius 2px, resize vertical.
  - Submit button centered, margin-top ~28px: "Book Now" — bg `#F7F3EA`, border `1px solid #303030` (subtle) or none, radius 15px, padding 14px 48px, Josefin Sans 18px, color `#303030`. Hover → bg gold, white. `type="submit"`.

## Behaviors
- On submit: `e.preventDefault()`, show a small success message "Thank you for contacting On Point Cosmetic Tattoo Studio. We will get back to you as soon as possible." (gold text) — toggled via `useState`. No real backend.
- Input fields controlled or uncontrolled (simple).

## Field labels (verbatim)
- Name, Email, Phone, Message
- Submit: "Book Now"
- Success: "Thank you for contacting On Point Cosmetic Tattoo Studio. We will get back to you as soon as possible."

## Responsive
- Desktop (1440): 3-col row for Name/Email/Phone.
- Tablet (768): keep 3-col or 2-col.
- Mobile (390): stack all fields single column; button full width.

## Imports
- `cn` from `@/lib/utils`. Export `GetInTouch`.
