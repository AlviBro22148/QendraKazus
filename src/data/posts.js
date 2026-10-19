// POSTS. Newest posts can go anywhere in the list: the site sorts by `date`.
//
// To add a post, copy a block and change:
//   id        unique number or text
//   slug      URL: /posts/<slug>
//   date      'YYYY-MM-DD'
//   author    shown under the title (optional)
//   title / excerpt  { sq, en }   excerpt = the short text on cards
//   body      { sq: [...], en: [...] }  one string per paragraph.
//             Links: [link text](https://...)   Bold: **text**
//   cover     image name from public/img (no size suffix); omit for no image
//   coverAlt  { sq, en }
//   gallery   more photos: [{ src, alt: { sq, en } }]
//   videos    YouTube videos: [{ id: 'VIDEO_ID', title: { sq, en } }]
//   downloads files in public/files: [{ file: 'name.pdf', label: { sq, en } }]
//   projects  LIST OF PROJECT IDS from projects.js. One or more. The post shows under every project listed.
//             A wrong id is reported when you run `npm run dev` or `npm run build`.
//
// English text marked REVIEW was translated by the developer and needs a native check.

export const posts = [
  {
    id: 345,
    slug: 'heritage-voices-digital-storytelling-for-korcas-monuments',
    date: '2026-09-30',
    author: 'Dhorjela Cule',
    projects: ['heritage', 'cultural'],
    title: {
      sq: 'Heritage Voices: Digital Storytelling for Korça’s Monuments.',
      en: 'Heritage Voices: Digital Storytelling for Korça’s Monuments.',
    },
    excerpt: {
      sq: 'Zhvilluam aktivitetin e parë të projektit HeritageVoices: Digital Storytelling for Korça’s Monuments.',
      en: 'We held the first activity of the project HeritageVoices: Digital Storytelling for Korça’s Monuments.', // REVIEW
    },
    cover: 'bootcamp-2',
    coverAlt: { sq: 'Të rinj gjatë aktivitetit të parë të HeritageVoices', en: 'Young people during the first HeritageVoices activity' }, // REVIEW
    body: {
      sq: [
        'Zhvilluam aktivitetin e parë të projektit HeritageVoices: Digital Storytelling for Korça’s Monuments.',
        '15 të rinj mësuan si të përdorin telefonin për të treguar histori, ku u njohën me teknikat e filmimit dhe me konceptin e storytelling-ut (MoJo). Ata diskutuan për monumentet e kulturës dhe shtëpitë monument në Korçë, si dhe për ligjin e trashëgimisë kulturore dhe rolin që kanë qytetarët në mbrojtjen e saj.',
        'Hapi tjetër: të rinjtë do të dalin në terren për të dokumentuar shtëpitë monument të qytetit të Korcës dhe për t’i kthyer në video-histori që do t’i ndajmë me ju.',
        'Ky aktivitet u realizua në kuadër të projektit “HeritageVoices: Digital Storytelling for Korça’s Monuments”, i zbatuar nga Qendra KAZUS, si pjesë e skemës së nëngranteve të projektit CULTUR-AL, i financuar nga Bashkimi Evropian dhe i zbatuar nga Qendra Kombëtare për Shërbime Komunitare (NCCS) në partneritet me qendrën Artivista.',
        '#HeritageVoices #ZëriIMonumenteve #Korça #TrashëgimiaKulturore #QendraKAZUS',
      ],
      en: [
        'We held the first activity of the project HeritageVoices: Digital Storytelling for Korça’s Monuments.',
        '15 young people learned how to use their phones to tell stories, getting to know filming techniques and the concept of storytelling (MoJo). They discussed cultural monuments and monument houses in Korçë, as well as the cultural heritage law and the role citizens have in protecting it.',
        'Next step: the young people will go out into the field to document the monument houses of the city of Korçë and turn them into video stories that we will share with you.',
        'This activity was carried out within the project “HeritageVoices: Digital Storytelling for Korça’s Monuments”, implemented by Qendra KAZUS, as part of the sub-grant scheme of the CULTUR-AL project, funded by the European Union and implemented by the National Center for Community Services (NCCS) in partnership with the Artivista center.',
        '#HeritageVoices #ZëriIMonumenteve #Korça #TrashëgimiaKulturore #QendraKAZUS',
      ], // REVIEW (all en paragraphs)
    },
    gallery: [
      { src: 'bootcamp-3', alt: { sq: 'Foto nga trajnimi HeritageVoices', en: 'Photo from the HeritageVoices training' } }, // REVIEW
      { src: 'bootcamp-4', alt: { sq: 'Foto nga trajnimi HeritageVoices', en: 'Photo from the HeritageVoices training' } }, // REVIEW
      { src: 'bootcamp-1', alt: { sq: 'Foto nga trajnimi HeritageVoices', en: 'Photo from the HeritageVoices training' } }, // REVIEW
    ],
  },

  {
    id: 342,
    slug: 'peticion-online-per-mbrojtjen-e-lumit-devoll',
    date: '2026-09-26',
    author: 'Dhorjela Cule',
    projects: ['ecoaction'],
    title: {
      sq: 'PETICION ONLINE PËR MBROJTJEN E LUMIT DEVOLL', // fixed: PER -> PËR
      en: 'ONLINE PETITION FOR THE PROTECTION OF THE DEVOLL RIVER', // REVIEW
    },
    excerpt: {
      sq: 'E ardhmja e lumit Devoll është në duart tona. Sa më shumë nënshkrime të mbledhim, aq më i fuqishëm do të jetë zëri ynë.',
      en: 'The future of the Devoll river is in our hands. The more signatures we collect, the stronger our voice will be.', // REVIEW
    },
    cover: 'devoll',
    coverAlt: { sq: 'Lumi Devoll me mbetje plastike në breg', en: 'The Devoll river with plastic waste on the bank' }, // REVIEW
    body: {
      sq: [
        'E ardhmja e lumit Devoll është në duart tona. Sa më shumë nënshkrime të mbledhim, aq më i fuqishëm do të jetë zëri ynë.',
        '👉 Kliko [këtu](https://c.org/fCr9pTjW79) për të firmosur peticionin.',
      ],
      en: [
        'The future of the Devoll river is in our hands. The more signatures we collect, the stronger our voice will be.',
        '👉 Click [here](https://c.org/fCr9pTjW79) to sign the petition.',
      ], // REVIEW
    },
  },

  {
    id: 330,
    slug: 'ecoaction-picnic',
    date: '2026-09-02',
    author: 'Dhorjela Cule',
    projects: ['ecoaction'],
    title: { sq: 'EcoAction Picnic', en: 'EcoAction Picnic' },
    excerpt: {
      sq: 'EcoAction Picnic – Transformimi i të rinjve nga zonat rurale në advokues për mjedisin.',
      en: 'EcoAction Picnic – Transforming rural youth into environmental advocates.', // REVIEW
    },
    cover: 'ecoaction-poster',
    coverAlt: { sq: 'Posteri i EcoAction Picnic', en: 'EcoAction Picnic poster' },
    body: {
      sq: [
        'EcoAction Picnic – Transformimi i të rinjve nga zonat rurale në advokues për mjedisin',
        'Ky projekt po zbatohet nga Qendra KAZUS në Bashkinë e Maliqit, Shqipëri, me qëllim fuqizimin e të rinjve për t’u bërë kampionë aktivë të mbrojtjes së mjedisit përmes angazhimit dixhital dhe pjesëmarrjes qytetare. Projekti fokusohet në zonën e Pojanit dhe Lozhanit dhe nxit të rinjtë që duke përdorur teknologjinë dhe rrëfimin e historive të ngrenë zërin e tyre për mbrojtjen e lumit Devoll dhe të promovojnë të drejtën për një mjedis të pastër dhe të shëndetshëm.',
        'EcoAction Picnic, is supported through the Digital Spark granting scheme, as part of the Regional Support Mechanism EECA project, implemented by Metamorphosis Foundation and TechSoup, in partnership with CIVICUS and under the Digital Democracy Initiative (DDI) that covers the Global South.',
      ],
      en: [
        'EcoAction Picnic – Transforming rural youth into environmental advocates',
        'This project is being implemented by Qendra KAZUS in the Municipality of Maliq, Albania, with the aim of empowering young people to become active champions of environmental protection through digital engagement and civic participation. The project focuses on the Pojan and Lozhan area and encourages young people, using technology and storytelling, to raise their voices for the protection of the Devoll river and to promote the right to a clean and healthy environment.',
        'EcoAction Picnic, is supported through the Digital Spark granting scheme, as part of the Regional Support Mechanism EECA project, implemented by Metamorphosis Foundation and TechSoup, in partnership with CIVICUS and under the Digital Democracy Initiative (DDI) that covers the Global South.',
      ], // REVIEW (first two paragraphs; the third is English on the original site)
    },
  },

  {
    id: 170,
    slug: 'dokumentari-minoriteti-maqedonas-ne-pustec-trashegimi-brez-pas-brezi',
    date: '2026-03-07',
    author: 'Dhorjela Cule',
    projects: ['pustec'],
    title: {
      sq: 'Dokumentarë: Minoriteti maqedonas në Pustec, trashëgimi brez pas brezi',
      en: 'Documentaries: The Macedonian minority in Pustec, heritage generation after generation', // REVIEW
    },
    // The live site has no text for this post, only two embedded videos.
    excerpt: { sq: '', en: '' },
    body: { sq: [], en: [] },
    videos: [
      { id: 'jYY6J_P6uUA', title: { sq: 'Dokumentar - "Minoriteti Maqedonas në Pustec, trashëgimi brez pas brezi"', en: 'Documentary - "The Macedonian Minority in Pustec, Heritage Generation after Generation"' } }, // REVIEW (en)
      { id: '_36728dTmgk', title: { sq: 'Minoriteti maqedonas në Pustec, trashëgimi brez pas brezi', en: 'The Macedonian minority in Pustec, heritage generation after generation' } }, // REVIEW (en)
    ],
  },

  {
    id: 151,
    slug: 'fotoalbumi-minoriteti-maqedonas-ne-pustec-trashegimi-brez-pas-brezi',
    date: '2026-03-07',
    author: 'Dhorjela Cule',
    projects: ['pustec'],
    title: {
      sq: 'Fotoalbumi Minoriteti maqedonas në Pustec, trashëgimi brez pas brezi',
      en: 'Photo album: The Macedonian minority in Pustec, heritage generation after generation', // REVIEW
    },
    excerpt: {
      sq: 'Ky album është realizuar me qëllim dokumentimin, ruajtjen dhe promovimin e vlerave të çmuara kulturore, etnografike dhe historike të komunitetit maqedonas në zonën e Pustecit.',
      en: 'This album was created with the aim of documenting, preserving and promoting the precious cultural, ethnographic and historical values of the Macedonian community in the Pustec area.', // REVIEW
    },
    cover: 'photo-album-cover',
    coverAlt: { sq: 'Kopertina e fotoalbumit “Minoriteti Maqedonas në Pustec, trashëgimi brez pas brezi”', en: 'Cover of the photo album “The Macedonian Minority in Pustec, Heritage Generation after Generation”' }, // REVIEW (en)
    body: {
      sq: [
        'Ky album është realizuar me qëllim dokumentimin, ruajtjen dhe promovimin e vlerave të çmuara kulturore, etnografike dhe historike të komunitetit maqedonas në zonën e Pustecit. Përmes këtij albumi, që u realizua në kuadër të projektit “Minoriteti maqedonas në Pustec, trashëgimi brez pas brezi” synohet të ndërtohet një urë komunikimi midis të kaluarës dhe të ardhmes, duke mbledhur në një botim të vetëm dëshmitë e gjalla të një kulture unike.',
        'Ky botim dhe digjitalizimi i materialeve arkivore u mundësua me mbështetjen financiare të Agjencisë për Mbështetjen e Shoqërisë Civile (AMSHC).',
      ],
      en: [
        'This album was created with the aim of documenting, preserving and promoting the precious cultural, ethnographic and historical values of the Macedonian community in the Pustec area. Through this album, made within the project “The Macedonian minority in Pustec, heritage generation after generation”, the aim is to build a bridge of communication between the past and the future, gathering in a single publication the living testimonies of a unique culture.',
        'This publication and the digitisation of the archive materials were made possible with the financial support of the Agency for the Support of Civil Society (AMSHC).',
      ], // REVIEW
    },
    // NOTE: the live post links to Katalogu-mail-6.pdf, which no longer exists (404).
    // The working file Katalogu-mail-1.pdf (used on the old /media page) is used here instead.
    downloads: [
      { file: 'katalogu-fotoalbum-pustec.pdf', label: { sq: 'Katalogu – mail', en: 'Catalogue – mail' } }, // REVIEW (en)
    ],
  },

  {
    id: 98,
    slug: 'minoriteti-maqedonas-ne-pustec-trashegimi-brez-pas-brezi',
    date: '2025-12-28',
    author: 'Dhorjela Cule',
    projects: ['pustec'],
    title: {
      sq: 'Minoriteti Maqedonas në Pustec, trashëgimi brez pas brezi',
      en: 'The Macedonian Minority in Pustec, heritage generation after generation', // REVIEW
    },
    excerpt: {
      sq: 'Në kuadër të projektit “Minoriteti Maqedonas në Pustec, trashëgimi brez pas brezi”, i zbatuar nga Qendra Kazus dhe mbështetur nga Agjencia për Mbështetjen e Shoqërisë Civile, çelim ekspozitën fotografike të fotografit Roland Beqiraj.',
      en: 'As part of the project “The Macedonian Minority in Pustec, Heritage Generation after Generation”, implemented by Qendra Kazus and supported by the Agency for the Support of Civil Society, we opened the photo exhibition by photographer Roland Beqiraj.', // REVIEW
    },
    cover: 'pustec-exhibition',
    coverAlt: { sq: 'Posteri i projektit “Minoriteti maqedonas në Pustec, trashëgimi brez pas brezi”', en: 'Poster of the project “The Macedonian minority in Pustec, heritage generation after generation”' }, // REVIEW
    body: {
      sq: [
        'Në kuadër të projektit “Minoriteti Maqedonas në Pustec, trashëgimi brez pas brezi”, i zbatuar nga Qendra Kazus dhe mbështetur nga Agjencia për Mbështetjen e Shoqërisë Civile, çelim ekspozitën fotografike të fotografit Roland Beqiraj.',
        'Çdo fotografi përcjell artistikisht jetën e përditshme të komunitetit maqedonas: portrete që i ka shënjuar tradita e veçantë dhe kultura e larmishme, rituale unikë, peizazhe dhe copëza natyre, që flasin dhe frymojnë përmes ngjyrave dhe kontrasteve, ekzistencën shekullore.',
        'Ekspozita vjen si narrativë e sinqertë dhe pa filtra e asaj që Prespa ruan në thellësi të zemrës, një pasuri që dëshmon identitet, vlera dhe vendosmërinë për vazhdimësi.', // fixed accents: thellēsi tē -> thellësi të, njē -> një, dēshmon -> dëshmon, vazhdimēsi -> vazhdimësi
      ],
      en: [
        'As part of the project “The Macedonian Minority in Pustec, Heritage Generation after Generation”, implemented by Qendra Kazus and supported by the Agency for the Support of Civil Society, we opened the photo exhibition by photographer Roland Beqiraj.',
        'Each photograph artistically conveys the everyday life of the Macedonian community: portraits marked by distinctive tradition and diverse culture, unique rituals, landscapes and fragments of nature that speak and breathe, through colour and contrast, a centuries-old existence.',
        'The exhibition comes as an honest, unfiltered narrative of what Prespa keeps deep in its heart, a wealth that bears witness to identity, values and the determination to continue.',
      ], // REVIEW
    },
  },
]
