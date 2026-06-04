# Testimonials Specification

## Overview
- **Target file:** `src/components/Testimonials.tsx`
- **Screenshot:** `docs/design-references/sec-testimonials.png`
- **Interaction model:** auto-advancing carousel + dot pagination (client component — `"use client"`)
- **id:** wrap section in `id="testimonials"`

## Structure
White bg, padding ~70px 24px, max-width ~1100px centered, text-align center.
- H2 "Testimonials" — Montserrat weight 300, 40px, color `#C09569`, margin-bottom ~32px.
- **Rating summary bar** (light cream rounded panel `bg #F7F3EA`, padding ~14px 20px, border-radius 8px, inline-flex, gap 10px, margin 0 auto 28px, width fit): "5.0" (bold ~22px) + 5 gold `StarIcon` (~18px, color #f5a623) + "(24)" (grey ~14px) + small GoogleIcon.
- **Review cards row:** 3 cards visible (grid 3-col desktop, gap 20px). Each card: bg white, border `1px solid #eee`, border-radius 8px, padding 18px, box-shadow `0 2px 10px rgba(0,0,0,0.04)`, text-align left.
  - Card header (flex, gap 10px, align center): round avatar (~36px) with initials on colored bg (use `avatarColor`), then column: name (Source Sans bold 15px #303030) + VerifiedIcon (gold ~14px) inline; below name a row: GoogleIcon (~14px) + timeAgo (grey 12px).
  - Stars row: 5 gold StarIcon ~14px, margin 8px 0.
  - Review text: Source Sans 14px, color #555, line-height 1.5, clamped ~3 lines (`-webkit-line-clamp:3`).
  - "Read more" link: gold `#C09569`, 13px, margin-top 6px.
- **Dot pagination:** row of 5 dots centered, margin-top 24px. Active dot gold `#C09569` filled, inactive grey `#ccc`, ~8px circles, gap 8px. Clicking a dot changes the visible set.

## Carousel behavior
- Store reviews array (6 items, cycle). `useState` activeIndex. Auto-advance every 5s (`useEffect` + `setInterval`), clear on unmount. Dots set index. Show a window of 3 cards based on index (or fade between pages). Keep simple: paginate pages of 3.
- Optional: pause on hover.

## Review data (verbatim captured; fill remaining with plausible 5-star reviews to reach 6)
1. name "Amy Lewis", initials "AL", color "#7e57c2", timeAgo "2 months ago", rating 5, text "I couldn't be happier with my brows! Lisa did an amazing job. She really took the time to listen to what I wanted and the result is so natural."
2. name "Lorraine Jones", initials "LJ", color "#26a69a", timeAgo "2 months ago", rating 5, text "I travel from Gladstone to the Sunny Coast to have my Eyebrows Cosmetic Tattoo with Lisa. Absolutely worth every kilometre — she is a true professional."
3. name "Tegan McPherson", initials "TM", color "#ef5350", timeAgo "4 months ago", rating 5, text "I couldn't have asked for a better first experience with cosmetic tattooing. I had microblading and the whole process was calm and comfortable."
4. name "Sarah Bennett", initials "SB", color "#42a5f5", timeAgo "5 months ago", rating 5, text "Lisa is so skilled and professional. My powder brows healed beautifully and look incredible. Highly recommend On Point."
5. name "Kylie Roberts", initials "KR", color "#ec407a", timeAgo "6 months ago", rating 5, text "Beautiful studio and an amazing artist. My lip blush is exactly what I hoped for. Thank you Lisa!"
6. name "Megan Walsh", initials "MW", color "#ab47bc", timeAgo "7 months ago", rating 5, text "From consult to aftercare Lisa was wonderful. My eyeliner tattoo is perfect and so subtle. Couldn't be happier."

## Behaviors
- Card hover: subtle shadow lift.

## Responsive
- Desktop (1440): 3 cards per page.
- Tablet (768): 2 cards per page.
- Mobile (390): 1 card per page; dots remain.

## Imports
- `StarIcon`, `VerifiedIcon`, `GoogleIcon` from `@/components/icons`. `cn` from `@/lib/utils`. Export `Testimonials`.
