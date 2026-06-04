# Welcome Specification

## Overview
- **Target file:** `src/components/Welcome.tsx`
- **Screenshot:** `docs/design-references/sec-welcome.png`
- **Interaction model:** static (button hover)

## Structure
Two-column section on white bg. Max-width ~1200px centered, padding ~80px 24px, gap ~56px. Align items center.
- **Left col (~45%):** image `/images/welcome-face.png` (629×820 portrait, close-up of a woman's eyes/face). `next/image`, rounded corners optional (original is square), `object-cover`, width 100%, max-width ~520px.
- **Right col (~55%):** stacked:
  - H2 "Welcome to My Cosmetic Tattoo Studio" — Montserrat weight 300, 40px, color `#C09569` (gold), margin-bottom ~20px, line-height 1.2.
  - Paragraph 1 (Source Sans, ~16px, color `#303030`, line-height 1.7): "On Point Cosmetic Tattoo Studio provides cosmetic tattooing from my Buderim studio, welcoming clients from across the Sunshine Coast. I focus exclusively on cosmetic tattoo procedures for eyebrows, eyeliner and lips."
  - Paragraph 2: "Cosmetic tattooing requires planning, pigment selection and structured application. During your consultation, I will discuss skin type, medical considerations, preparation requirements and healing stages."
  - **3 feature rows** (icon left ~28px gold, text right), gap ~18px, margin-top ~24px:
    1. CertifiedIcon — title "Certified Artist" (bold, uppercase-ish small caps, Montserrat 15px, color `#303030`) + desc "As a cosmetic tattoo studio with a certified artist, I follow consultation protocols and hygiene standards suited to cosmetic tattoo procedures." (Source Sans 14px, color #555)
    2. CustomisedIcon — "Customised designs" + "Lisa maps each cosmetic tattoo design to your natural features and selected technique. I assess shape, proportion and pigment choice."
    3. PremiumIcon — "Premium EQUIPMENT" + "I use premium cosmetic tattoo pigments and devices selected for cosmetic procedures and explain product choice during your consultation."
  - Line (Source Sans italic ~14px, color #777, margin-top 16px): "Call 0414 502 807 to arrange your consultation."
  - Button "Get In Touch" — filled cream `#F7F3EA`, border `1px solid #303030`, radius 15px, padding 14px 40px, Josefin Sans 18px, color `#303030`, `href="#contact"`. Hover → bg gold, white text, 0.3s.

## Feature row layout
Each row: flex, icon in a small gold-tinted circle (bg `#F7F3EA`, ~44px, gold icon ~22px) OR plain gold icon. Title above description in the text block.

## Behaviors
- Button hover as above.

## Assets
- `/images/welcome-face.png`
- Icons: CertifiedIcon, CustomisedIcon, PremiumIcon from `@/components/icons`.

## Responsive
- Desktop (1440): 2-col side by side.
- Tablet (768): 2-col maintained, gap reduces; or stack if cramped (~stack < 820px).
- Mobile (390): stack to single column — image on top full width, text below, button full width.

## Imports
- `next/image`, icons. Export `Welcome`.
