# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/sec-footer1.png`, `docs/design-references/sec-footer2.png`
- **Interaction model:** static (link hover)
- **id:** wrap in `id="footer"`

## Structure
Two parts:
1. **Full-width image band** ABOVE the footer body: `/images/facial-treatment.jpg` (1425×550, woman receiving a facial, eyes closed, hands on face), full width, height ~340px desktop / ~200px mobile, `object-cover`, object-position center top. (This belongs at the top of the Footer component.)
2. **Footer body:** bg `#F7F3EA` (cream), `position: relative`, with decorative line-art flower background `/images/footer-bg.png` (absolute, right/center, low opacity ~0.5, pointer-events none, behind content). Padding ~60px 24px 30px.
   - **Centered logo** `/images/logo.png` (height ~50px) at top, margin 0 auto 40px.
   - **3 columns** (grid, max-width ~1100px centered, gap ~40px):
     - **SITE LINKS** (heading: Josefin Sans uppercase 14px, letter-spacing 1px, color `#303030`, margin-bottom 16px). Links (Source Sans 14px, color #444, line-height 2.2, hover gold):
       Home (#top), About Us (#artist), Testimonials (#testimonials), Eyebrows (#services), Eye Liners (#services), Lips (#services), After Care (#footer), Areas Near Us (#footer), Contact Us (#contact).
       (In screenshot "Testimonials" is slightly indented under About Us — render flat list is fine.)
     - **CONTACT** (same heading style). Rows with small gold icons + text (Source Sans 14px #444), line-height 2:
       - PhoneIcon "0414 502 807" (`tel:`)
       - MailIcon "onpointcosmetictattoo@gmail.com" (`mailto:`)
       - MapPinIcon "Buderim, QLD 4556"
       - AbnIcon "ABN 79 955 974 433"
       - then plain text "Certified Cosmetic Tattoo Artist" (italic, #666, margin-top 8px)
       - Social icons row (margin-top 14px, gap 10px, dark ~28px circles): Facebook, LocalSearch, GoogleBusiness, Instagram.
     - **TRADING HOURS** (same heading style). Two rows (flex justify-between, max-width ~260px, Source Sans 14px #444, line-height 2):
       - "Mon - Fri" ........ "9:00 am - 5:00 pm"
       - "Sat - Sun" ........ "Appointment Only"
       - Below: a small white card (border-radius 8px, box-shadow, padding 14px, width ~150px, margin-top 18px, text-align center) containing: a small VerifiedIcon (gold), "2026" (bold), "Certificate of trust" (small grey), and `/images... ` use text "localsearch" styled (LocalSearchIcon + "localsearch" wordmark in blue `#2d6cdf`). 
       - Below card: "Powered by" (tiny grey) + "localsearch" (blue bold).
   - **Bottom bar:** centered text, margin-top 40px, Source Sans 13px, color #777: "© 2026 All Rights Reserved |" then new line "On Point Cosmetic Tattoo Studio".

## Behaviors
- Links hover → color `#C09569`, transition 0.3s.

## Assets
- `/images/facial-treatment.jpg`, `/images/footer-bg.png`, `/images/logo.png`
- Icons: PhoneIcon, MailIcon, MapPinIcon, AbnIcon, FacebookIcon, InstagramIcon, LocalSearchIcon, GoogleBusinessIcon, VerifiedIcon from `@/components/icons`.

## Responsive
- Desktop (1440): 3-col.
- Tablet (768): 3-col or 2-col.
- Mobile (390): stack columns single, center-aligned; image band shorter.

## Imports
- `next/image`, icons, `cn`. Export `Footer`.
