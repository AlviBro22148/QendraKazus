// Organisation details and navigation. Edit here, never inside components.

export const site = {
  name: 'Qendra KAZUS',
  url: 'https://qendrakazus.com',
  // Kept exactly as on the live site.
  contact: {
    address: 'Korçë, Albania',
    phone: '+355692942794',
    email: 'qendrakazus@gmail.com',
  },
  logo: 'logo-mark',
}

// Order of the main menu. `label` is a key in translations.js.
export const nav = [
  { to: '/', label: 'nav.home', end: true },
  { to: '/about', label: 'nav.about' },
  { to: '/projects', label: 'nav.projects' },
  { to: '/media', label: 'nav.media' },
  { to: '/notifications', label: 'nav.notifications' },
  { to: '/contact', label: 'nav.contact' },
]

// How many of the newest posts the home carousel shows (always the 5 newest by date: adding a newer post pushes the oldest out automatically).
// The cards section below it shows the rest, so every post is reachable.
export const CAROUSEL_COUNT = 5
// How many cards are shown at first, and added by each "show more" click.
export const CARDS_PAGE_SIZE = 6

// HOME SLIDESHOW (photos only, no text). Change, reorder or add photos here.
// src = image name from public/img (see scripts/make-images.mjs); alt = description for screen readers.
export const heroSlides = [
  { src: 'cycling-group', alt: { sq: 'Grup të rinjsh me biçikleta në një aktivitet në natyrë', en: 'A group of young people with bicycles at an outdoor activity' } }, // REVIEW alt
  { src: 'group-flags', alt: { sq: 'Grup të rinjsh me flamuj të vendeve të ndryshme përpara një mozaiku', en: 'A group of young people holding flags of different countries in front of a mosaic' } }, // REVIEW alt
  { src: 'group-photo-2', alt: { sq: 'Të rinj të ulur në tavolina gjatë një aktiviteti trajnimi', en: 'Young people seated at tables during a training activity' } }, // REVIEW alt
  { src: 'team-meeting', alt: { sq: 'Të rinj në një takim pune rreth tavolinës', en: 'Young people at a working meeting around a table' } }, // REVIEW alt
]
