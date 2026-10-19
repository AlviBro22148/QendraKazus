# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Confirmed by the client brief: React + Vite + React Router, plain CSS (variables / CSS modules), no UI frameworks. Fully static: no backend, database, API, admin or CMS. Deployable to any static host. All content lives in editable files in `src/data/`.

## Users

- Primary: young people (high-school, university, early-career) in Korçë and the wider Albanian region, plus rural youth (e.g. Maliq, Pojan, Lozhan) who may find the NGO through social media on a phone.
- Secondary: donors and institutional partners (EU-funded schemes, AMSHC, Erasmus+ partners, NCCS, Metamorphosis/TechSoup), journalists, local authorities, community members signing petitions or reading project news.
- Languages: Albanian is primary; English for international partners and funders.

## Product Purpose

Public website of Qendra KAZUS (Korçë, Albania), a youth advocacy NGO. It presents the mission, projects, media and news, and publishes notifications (calls for experts, project calls, postponements, Erasmus partner calls, deadlines). Success: visitors understand what the organisation does, can read every project and post in Albanian or English, and can reach the team; the staff can add content by editing data files only.

## Positioning

A local, youth-led advocacy centre that works through youth advocacy in public decision-making, environment (Devoll river), cultural heritage (Korça monuments, Macedonian minority in Pustec), ICT/media and civic engagement. Its own photographs of real activities are the main evidence.

## Operating Context

- Replaces an existing WordPress/Astra site at https://qendrakazus.com/ (not to be edited).
- Staff add projects, posts and notifications by hand in `src/data/*.js` and rebuild.
- Funders and partners appear in post text (AMSHC, EU via NCCS/Artivista for CULTUR-AL, Metamorphosis Foundation + TechSoup + CIVICUS Digital Spark).

## Capabilities and Constraints

- Albanian default, English toggle for the entire site; choice persisted in localStorage; `html lang` updated.
- Posts link to one or more projects (no categories). Notifications page with type filter, newest first, expired-deadline state.
- Home: carousel of latest posts + card section reaching all posts.
- Light mode only. Brand tokens given: primary #0EA5E9, dark accent #0284C7, tint #E0F2FE, text #0F172A, muted #475569, border #E2E8F0, white background.
- Contact (must not change): Korçë, Albania | +355692942794 | qendrakazus@gmail.com
- Content must be preserved verbatim; fixes only: "akdvokimit" → "advokimit", restore ë/ç in titles (e.g. Devoll petition); every fix reported.
- English translations are produced by us and flagged for client review.
- Decisions: projects = the 5 cards from the live site (Rrjeti CULTURAL, Minoriteti maqedonas në Pustec, Erasmus +, EcoAction Picnic, Heritage Voices); no separate Media project. Notifications ship with clearly labelled SAMPLE demo entries. Team section on About is hidden until the client sends names/roles/photos.

## Brand Commitments

Name: Qendra KAZUS (also written KAZUS). Existing logo files from the live site (LOGO-KAZUS.jpeg, E42D573F… PNG, Gray-and-Black-Simple-Studio-Logo PNGs) are the starting identity; client will send further images and files. Reference sites (allgreencentre.org, bya.ngo/projects) are for patterns only; no copying.

## Evidence on Hand

Six posts, seven pages, 45 media items, 2 YouTube documentaries (Pustec), a downloadable photo-album PDF (Katalogu), an exhibition by photographer Roland Beqiraj, a Change.org petition link. Crawl dump in `crawl/`. Absent: team members, partner logos, testimonials, notifications, social-media links, about-page Albanian text. None may be invented.

## Product Principles

1. The organisation's own photos and words come first; design frames them.
2. Albanian first; English is a full peer, never a partial afterthought.
3. Static and hand-editable: anything the staff must change is a plain data entry with a comment.
4. Never invent content; mark every uncertain translation or mapping for review.
5. Lightweight and phone-friendly for rural youth on mobile data.

## Accessibility & Inclusion

Semantic HTML, alt text, visible focus, sufficient contrast, keyboard-operable menu and carousel, no autoplay trap, `lang` attribute correct per language, respects reduced motion.
