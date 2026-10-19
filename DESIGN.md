---
name: Qendra KAZUS
description: A plain, trustworthy NGO site in white and sky blue where the organisation's own photographs and words carry the page.
colors:
  white: "#ffffff"
  sky: "#0ea5e9"
  sky-dark: "#0284c7"
  sky-tint: "#e0f2fe"
  sky-ink: "#0369a1"
  sky-deep: "#075985"
  ink: "#0f172a"
  muted: "#475569"
  line: "#e2e8f0"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 1.5rem + 4.4vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.8rem, 1.4rem + 2vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1.08rem + 0.35vw, 1.35rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Figtree Variable, Figtree, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Figtree Variable, Figtree, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)"
    fontWeight: 700
    lineHeight: 1.35
rounded:
  md: "10px"
  lg: "18px"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "clamp(3.5rem, 2rem + 6vw, 7rem)"
  gutter: "clamp(1rem, 4vw, 2rem)"
components:
  button-primary:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.5rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.sky-ink}"
    textColor: "{colors.white}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.5rem"
    height: "48px"
  button-inverse:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "48px"
  chip:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.1rem"
    height: "44px"
  chip-active:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
  tag:
    backgroundColor: "{colors.sky-tint}"
    textColor: "{colors.sky-deep}"
    rounded: "{rounded.pill}"
    padding: "0.15rem 0.7rem"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
  band:
    backgroundColor: "{colors.sky}"
    textColor: "{colors.ink}"
---

# Design System: Qendra KAZUS

## Overview

**Creative North Star: "The Open Notice Board"**

The category standard played straight. A white page, pale-blue tint bands, one drenched sky-blue band, and the organisation's own photographs shown large. Headlines in Bricolage Grotesque say what the NGO does; Figtree carries the reading. Nothing is decorated that a photo or a sentence could do better. Light only, bilingual (Albanian and English), built for youth and partners who want to learn the mission, read the latest posts, find projects, and write or call.

Density is calm and generous: wide section padding, a 1240px container, cards in an auto-fill grid. Sky blue marks action and is never spread as ornament; the drenched band is the single full-bleed moment of colour.

**Key Characteristics:**
- White ground, `sky-tint` bands, one `sky` band; ink text throughout.
- Pill-shaped controls, rounded (18px) photo and card corners.
- Real photos first; tint is the placeholder behind them.
- Self-hosted variable fonts (Fontsource), fluid type scale.
- Soft single shadow, used for response to state and for the hero photos only.

## Colors

A restrained sky-blue-on-white palette with slate ink; blue is for action, one band, and tint surfaces.

### Primary
- **Sky** (#0ea5e9): button and active-chip fills, the drenched `band` section, scrollbar, selection. Always carries ink text, never white.
- **Sky Dark** (#0284c7): focus ring (3px), hover borders, active carousel dot, language-button border. Large UI and strokes only.
- **Sky Ink** (#0369a1): link colour, button hover fill, brand wordmark accent, current-nav text. This is the small-text blue. It is derived: #0ea5e9 and #0284c7 fail AA for small text on white, so any blue text under large-type size uses #0369a1 (about 5.9:1 on white).
- **Sky Deep** (#075985): text on tint backgrounds (tags, badges, contact labels, language button text).

### Neutral
- **White** (#ffffff): page ground, cards, inverse button.
- **Sky Tint** (#e0f2fe): section bands, page heads, tag and slide backgrounds, image placeholders, hover/current nav pill.
- **Ink** (#0f172a): body text, headings, footer ground, ghost-button outline.
- **Muted** (#475569): meta lines, excerpts.
- **Line** (#e2e8f0): hairline borders on cards, header, chips.

Footer and badge states also use a few literal slate and sky values (#cbd5e1, #94a3b8, #7dd3fc, #bae6fd, #0c4a6e, #334155) that are not tokens; treat them as one-offs, not palette.

### Named Rules
**The Ink-On-Sky Rule.** Text on a #0ea5e9 fill is ink (#0f172a). White on sky fails contrast.
**The Small-Text Blue Rule.** Blue text below large size is #0369a1 (or #075985 on tint). Never #0ea5e9 or #0284c7.
**The One Band Rule.** One full-bleed sky band per page at most; tint bands carry the rest of the rhythm.

## Typography

**Display Font:** Bricolage Grotesque Variable (with Segoe UI, system-ui)
**Body Font:** Figtree Variable (with Segoe UI, system-ui)

**Character:** Bricolage brings a slightly characterful, human headline voice; Figtree stays friendly and neutral for long reading. Both are self-hosted via Fontsource.

### Hierarchy
- **Display** (700, `--step-4` 2.4rem to 4.75rem, 1.12, -0.03em): hero, page-head and band titles.
- **Headline** (700, `--step-3` 1.8rem to 2.75rem, 1.12, -0.02em): section titles, post titles, contact name (800).
- **Title** (700, `--step-1`/`--step-2` 1.15rem to 1.9rem, 1.25): card and slide titles, band text (600), contact lines (600).
- **Body** (400, `--step-0` about 1rem, 1.65): running text; `.prose` runs at step-1 / 1.7 and caps at 68ch; `.lead` caps at 62ch.
- **Label** (700, `--step--1` about 0.8125rem to 0.875rem): tags, badges, meta (muted, tabular numerals). Footer column titles and contact `dt` labels are set uppercase with 0.04em tracking (see not-canonized note).

### Named Rules
**The Two Voices Rule.** Bricolage for headings, nav on mobile, and large contact lines; Figtree for everything else.

## Layout

Single column on mobile; container 1240px max with fluid gutter (1rem to 2rem). Sections pad with `space-5` (3.5rem to 7rem); page heads use `space-4`. Spacing scale: 0.5, 1, 1.5, 2.5rem. Breakpoints in use: 479 (compact header), 760 (footer 3-col), 820 (gallery mosaic), 860 (carousel split 1.35fr/1fr), 900 (engage two-up, project grid fill), 960 (hero two-up, project detail), 1060 (desktop nav replaces menu button). Header is sticky, 72px, frosted white. The project card grid uses a 6-column fill so the last row never leaves an empty cell. The hero is copy left, three staggered photos right over a tint panel.

## Elevation & Depth

Mostly flat with hairline borders. One soft two-layer shadow exists (`0 1px 2px rgb(15 23 42 / 0.06), 0 10px 28px -8px rgb(15 23 42 / 0.16)`): it appears on card hover/focus-within (with a 3px lift and a sky border), on the mobile menu panel, and at rest on the three hero photos. The header gains a 1px line and a light backdrop blur.

### Named Rules
**The Response-Only Shadow Rule.** Outside the hero photo trio, shadow appears only as a response to hover or focus, or on a floating panel.

## Shapes

Pill (999px) for buttons, chips, tags, badges, nav links and language toggle. 18px for cards, hero and content photos, slides, tint panels. 10px for gallery thumbnails, lightbox image, brand mark and skip link. The brief named 8px photo corners; the build uses 18px and 10px, and the build is what is recorded. Round icon buttons are 48px circles. Focus ring: 3px #0284c7, 3px offset.

## Components

### Buttons
- **Shape:** full pill (999px), 48px min height (56px large), 2px border.
- **Primary:** sky fill, ink bold text, `0 1.5rem` padding.
- **Hover / Focus:** fill and border go to #0369a1 with white text; active nudges 1px down; 0.2s ease-out-expo.
- **Ghost:** transparent, ink border and text, fills ink on hover. **Inverse:** white fill for use on the sky band.

### Chips and Tags
- Filter chip: white, 1.5px line border, 44px tall; active is sky fill with ink bold text. Tag and static chip: tint fill, sky-deep bold text, pill. Notification badges vary by type in tint, sky, sky-ink, dashed, and slate fills.

### Cards / Containers
- Post and project cards: white, 1px line border, 18px radius, 4:3 tint-backed image that zooms 1.03 on hover, body padded 1.5rem, excerpt clamped to 4 lines, whole card clickable via a stretched link.

### Navigation
- Mobile: menu button (tint pill) opens a panel of Bricolage 1.4rem links divided by hairlines. Desktop (1060+): Figtree 600 pill links; hover and current page get a tint pill with sky-deep text. Language toggle is an outlined pill.

### Carousel and Gallery
- Scroll-snap slides on tint with a 1.35fr/1fr image-to-text split; pill-style dots (active dot stretches to 26px); 48px round arrow buttons. Gallery is a grid or four-photo mosaic; images open in a dark-backdrop lightbox.

## Do's and Don'ts

### Do:
- **Do** put ink text on sky (#0ea5e9) fills and #0369a1 / #075985 for small blue text.
- **Do** let real photos lead, on tint placeholders, at 18px corners.
- **Do** keep controls pill-shaped with a 44px minimum touch height.
- **Do** use the 3px #0284c7 focus ring everywhere.
- **Do** keep copy-and-photo sections alternating between white and tint, with at most one sky band.

### Don't:
- **Don't** use #0ea5e9 or #0284c7 as text colour on white.
- **Don't** add decorative icon-card trios, gradient heroes, or ornamental stock imagery.
- **Don't** add shadows at rest to cards or buttons.
- **Don't** introduce a second display face or a dark theme; the site is light only.
- **Don't** use hard-edged corners on controls or cards.

## Not canonized

Uppercase tracked labels on footer column titles and contact-card `dt` are carried by the build but are kicker-style devices and are not a rule for new surfaces. Non-token literal slate/sky hexes in footer and badges and the 4px white border on hero photos are one-offs.
