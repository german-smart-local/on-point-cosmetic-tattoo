# Hero Specification

## Overview
- **Target file:** `src/components/Hero.tsx`
- **Screenshot:** `docs/design-references/sec-header-hero.png`
- **Interaction model:** static

## Structure
Full-bleed hero. Background image `/images/hero.png` (1425×852, a woman's face/shoulder portrait on the right, soft cream/beige tone). The image itself already contains the cream left zone.
- Container: `position: relative`, full width, height ~620px desktop (image `object-cover object-right`), background `#F7F3EA` fallback.
- Use `next/image` with `fill` + `priority`, `object-cover`, `object-position: right center`.
- Below the hero image, a **tagline band**: full-width, bg `#F7F3EA` (cream), centered text.
  - H1: "Cosmetic Tattooing on the Sunshine Coast" — Montserrat, font-weight 200, font-size 50px (desktop) / ~30px mobile, text-transform uppercase, color `#C09569` (gold), letter-spacing ~1px, padding ~40px 20px, text-align center.

## Layout detail
- Hero image area sits directly under the fixed header. Add top padding/margin at page level so header doesn't cover it (the page wrapper handles a ~139px top offset; Hero itself starts at 0).
- The logo wordmark in the screenshot is part of the header overlay — do NOT duplicate logo here. Hero shows just the portrait + the H1 band beneath.

## Behaviors
- Static. No animation required (optional subtle fade-in on H1).

## Assets
- Background: `/images/hero.png`

## Text Content (verbatim)
- H1: "Cosmetic Tattooing on the Sunshine Coast"

## Responsive
- Desktop (1440): image height ~620px, H1 50px.
- Tablet (768): image height ~440px, H1 ~36px.
- Mobile (390): image height ~360px, `object-position: 70% center`, H1 ~26px, padding reduced.

## Imports
- `next/image`. Export `Hero`.
