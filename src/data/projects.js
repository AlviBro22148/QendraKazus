// PROJECTS. One entry per project. The "Our Projects" page and every project page read from here.
//
// To add a project, copy one block and change:
//   id           unique, short, no spaces. Posts refer to it in their `projects` list.
//   slug         the URL: /projects/<slug>
//   title        { sq, en }
//   description  { sq, en }  paragraphs separated by a blank line (\n\n). Empty string = "coming soon" text.
//   tag          optional filter group: 'culture' | 'environment' | 'erasmus' (see translations.js: projects.tag.*)
//   cover        image name from public/img (see src/data/imageManifest.json), without size suffix
//   coverAlt     { sq, en } short description of the photo for screen readers
//   images       extra photos for the project gallery: [{ src, alt: { sq, en } }]
//
// Images: put the original in crawl/assets (or any folder), add it to scripts/make-images.mjs,
// run `npm run images`, then use the name here.
//
// English text marked REVIEW was translated by the developer and needs a native check.

export const projects = [
  {
    id: 'cultural',
    slug: 'rrjeti-cultural',
    tag: 'culture',
    title: { sq: 'Rrjeti CULTURAL', en: 'The CULTURAL network' }, // REVIEW (en)
    description: {
      sq: 'Qendra KAZUS është pjesë e rrjetit CULTUR-AL!\n\nNë takimin e parë me anëtarët e rrjetit patëm mundësinë të ndajmë përvoja, diskutojmë dhe njihemi me aktorë të ndryshëm që punojnë për ruajtjen e trashëgimisë kulturore dhe promovimin e saj.\n\nRritja e angazhimit të shoqërisë civile dhe përfshirja e aktorëve lokale mbetet një domosdoshmëri në procesin e mbajtjes gjallë dhe ruajtjes së trashëgimisë kulturore.',
      en: 'Qendra KAZUS is part of the CULTUR-AL network!\n\nAt the first meeting with the network members we had the chance to share experiences, discuss and get to know different actors working to preserve cultural heritage and promote it.\n\nIncreasing civil society engagement and involving local actors remains a necessity in keeping cultural heritage alive and preserving it.', // REVIEW
    },
    cover: 'cultural-wordmark',
    coverAlt: { sq: 'Fjala CULTURAL e shkruar me ombrella shumëngjyrëshe', en: 'The word CULTURAL filled with colourful umbrellas' },
    images: [],
  },
  {
    id: 'pustec',
    slug: 'minoriteti-maqedonas-ne-pustec',
    tag: 'culture',
    title: { sq: 'Minoriteti maqedonas në Pustec', en: 'The Macedonian minority in Pustec' }, // REVIEW (en)
    description: {
      sq: 'Në kuadër të projektit “Minoriteti Maqedonas në Pustec, trashëgimi brez pas brezi”, i zbatuar nga Qendra Kazus dhe mbështetur nga Agjencia për Mbështetjen e Shoqërisë Civile, çelim ekspozitën fotografike të fotografit Roland Beqiraj.\n\nÇdo fotografi përcjell artistikisht jetën e përditshme të komunitetit maqedonas: portrete që i ka shënjuar tradita e veçantë dhe kultura e larmishme, rituale unikë, peizazhe dhe copëza natyre, që flasin dhe frymojnë përmes ngjyrave dhe kontrasteve, ekzistencën shekullore.\n\nEkspozita vjen si narrativë e sinqertë dhe pa filtra e asaj që Prespa ruan në thellësi të zemrës, një pasuri që dëshmon identitet, vlera dhe vendosmërinë për vazhdimësi.',
      en: 'As part of the project “The Macedonian Minority in Pustec, Heritage Generation after Generation”, implemented by Qendra Kazus and supported by the Agency for the Support of Civil Society, we opened the photo exhibition by photographer Roland Beqiraj.\n\nEach photograph artistically conveys the everyday life of the Macedonian community: portraits marked by distinctive tradition and diverse culture, unique rituals, landscapes and fragments of nature that speak and breathe, through colour and contrast, a centuries-old existence.\n\nThe exhibition comes as an honest, unfiltered narrative of what Prespa keeps deep in its heart, a wealth that bears witness to identity, values and the determination to continue.', // REVIEW
    },
    cover: 'pustec-cover',
    coverAlt: { sq: 'Roll-up i projektit “Minoriteti maqedonas në Pustec, trashëgimi brez pas brezi” me Liqenin e Prespës', en: 'Roll-up banner of the project “The Macedonian minority in Pustec” with Lake Prespa' }, // REVIEW (en)
    images: [
      { src: 'pustec-exhibition', alt: { sq: 'Posteri i projektit “Minoriteti maqedonas në Pustec, trashëgimi brez pas brezi”', en: 'Poster of the project “The Macedonian minority in Pustec, heritage generation after generation”' } }, // REVIEW (en)
      { src: 'pustec-rollup-gallery', alt: { sq: 'Roll-up i projektit në sallën e ekspozitës', en: 'Project roll-up banner in the exhibition hall' } }, // REVIEW (en)
      { src: 'photo-album-cover', alt: { sq: 'Kopertina e fotoalbumit “Minoriteti Maqedonas në Pustec, trashëgimi brez pas brezi”', en: 'Cover of the photo album “The Macedonian Minority in Pustec, Heritage Generation after Generation”' } }, // REVIEW (en)
    ],
  },
  {
    id: 'erasmus',
    slug: 'erasmus-plus',
    tag: 'erasmus',
    title: { sq: 'Erasmus +', en: 'Erasmus +' },
    // The live site has no text for this project. Add it here when you have it.
    description: { sq: '', en: '' },
    cover: 'cycling-group',
    coverAlt: { sq: 'Grup të rinjsh me biçikleta në një aktivitet në natyrë', en: 'A group of young people with bicycles at an outdoor activity' }, // REVIEW (en)
    images: [],
  },
  {
    id: 'ecoaction',
    slug: 'ecoaction-picnic',
    tag: 'environment',
    title: { sq: 'EcoAction Picnic', en: 'EcoAction Picnic' },
    description: {
      sq: 'EcoAction Picnic – Transformimi i të rinjve nga zonat rurale në advokues për mjedisin\n\nKy projekt po zbatohet nga Qendra KAZUS në Bashkinë e Maliqit, Shqipëri, me qëllim fuqizimin e të rinjve për t’u bërë kampionë aktivë të mbrojtjes së mjedisit përmes angazhimit dixhital dhe pjesëmarrjes qytetare. Projekti fokusohet në zonën e Pojanit dhe Lozhanit dhe nxit të rinjtë që duke përdorur teknologjinë dhe rrëfimin e historive të ngrenë zërin e tyre për mbrojtjen e lumit Devoll dhe të promovojnë të drejtën për një mjedis të pastër dhe të shëndetshëm.\n\nEcoAction Picnic, is supported through the Digital Spark granting scheme, as part of the Regional Support Mechanism EECA project, implemented by Metamorphosis Foundation and TechSoup, in partnership with CIVICUS and under the Digital Democracy Initiative (DDI) that covers the Global South.',
      en: 'EcoAction Picnic – Transforming Rural Youth into Environmental Advocates\n\nThis project is being implemented by Qendra KAZUS in the Municipality of Maliq, Albania, with the aim of empowering young people to become active champions of environmental protection through digital engagement and civic participation. The project focuses on the Pojan and Lozhan area and encourages young people, using technology and storytelling, to raise their voices for the protection of the Devoll river and to promote the right to a clean and healthy environment.\n\nEcoAction Picnic, is supported through the Digital Spark granting scheme, as part of the Regional Support Mechanism EECA project, implemented by Metamorphosis Foundation and TechSoup, in partnership with CIVICUS and under the Digital Democracy Initiative (DDI) that covers the Global South.', // REVIEW (first two paragraphs; the subtitle matches the logo text "Transforming Rural Youth into Environmental Advocates")
    },
    cover: 'ecoaction-cover',
    coverAlt: { sq: 'Logoja e EcoAction Picnic', en: 'EcoAction Picnic logo' },
    images: [
      { src: 'ecoaction-poster', alt: { sq: 'Posteri i EcoAction Picnic', en: 'EcoAction Picnic poster' } },
      { src: 'devoll', alt: { sq: 'Lumi Devoll me mbetje plastike në breg', en: 'The Devoll river with plastic waste on the bank' } }, // REVIEW (alt describes the photo)
      { src: 'riverside-walk', alt: { sq: 'Të rinj në një shëtitje buzë lumit', en: 'Young people on a walk by the river' } }, // REVIEW (alt describes the photo)
    ],
  },
  {
    id: 'heritage',
    slug: 'heritage-voices',
    tag: 'culture',
    title: { sq: 'Heritage Voices', en: 'Heritage Voices' },
    description: {
      sq: 'Ky aktivitet u realizua në kuadër të projektit “HeritageVoices: Digital Storytelling for Korça’s Monuments”, i zbatuar nga Qendra KAZUS, si pjesë e skemës së nëngranteve të projektit CULTUR-AL, i financuar nga Bashkimi Evropian dhe i zbatuar nga Qendra Kombëtare për Shërbime Komunitare (NCCS) në partneritet me qendrën Artivista.',
      en: 'This activity was carried out within the project “HeritageVoices: Digital Storytelling for Korça’s Monuments”, implemented by Qendra KAZUS, as part of the sub-grant scheme of the CULTUR-AL project, funded by the European Union and implemented by the National Center for Community Services (NCCS) in partnership with the Artivista center.', // REVIEW
    },
    cover: 'heritage-cover',
    coverAlt: { sq: 'Prezantimi i projektit HeritageVoices: rrëfime digjitale për monumentet e Korçës', en: 'Presentation slide of the HeritageVoices project' }, // REVIEW (en)
    images: [
      { src: 'bootcamp-2', alt: { sq: 'Të rinj në aktivitetin e parë të HeritageVoices', en: 'Young people at the first HeritageVoices activity' } }, // REVIEW
      { src: 'bootcamp-3', alt: { sq: 'Trajnimi i HeritageVoices', en: 'The HeritageVoices training' } }, // REVIEW
      { src: 'bootcamp-4', alt: { sq: 'Pjesëmarrës në trajnimin e HeritageVoices', en: 'Participants in the HeritageVoices training' } }, // REVIEW
      { src: 'bootcamp-1', alt: { sq: 'Prezantim në trajnimin e HeritageVoices', en: 'A presentation at the HeritageVoices training' } }, // REVIEW
    ],
  },
]
