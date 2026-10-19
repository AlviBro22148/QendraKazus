// UI strings in Albanian (sq, default) and English (en).
// Anything the visitor sees that is NOT a project, post or notification lives here.
// To change a label: edit the text. To add a string: add the same key to BOTH `sq` and `en`.
//
// Entries marked "REVIEW" are English translations written by the developer
// (the original site is Albanian). Please have a native speaker check them.

export const translations = {
  sq: {
    'site.name': 'Qendra KAZUS',
    'site.tagline': 'Qendra KAZUS, Korçë, Albania',
    'meta.home': 'Qendra KAZUS | Avokim rinor në Korçë',
    'meta.homeDesc':
      'Qendra KAZUS është organizatë rinore për avokim në Korçë, Shqipëri. Projekte, lajme dhe njoftime.',

    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projektet tona',
    'nav.media': 'Media',
    'nav.notifications': 'Njoftime',
    'nav.contact': 'Contact',
    'nav.menu': 'Menuja',
    'nav.close': 'Mbyll',
    'nav.main': 'Navigimi kryesor',
    'nav.skip': 'Kalo te përmbajtja',
    'lang.switch': 'English',
    'lang.switchLabel': 'Switch the site to English',

    'home.mission.title': 'Misioni ynë',
    'home.mission.text':
      'Të kontribuojmë direkt dhe indirekt në forcimin e demokracisë dhe zbatimin e ligjit si dhe zhvillimin ekonomik e shoqëror nëpërmjet advokimit rinor në vendimmarrjen publike lokale dhe qëndrore',
    'home.mission.cta': 'MË SHUMË',
    'home.latest.title': 'Më të fundit',
    'home.more.title': 'Më shumë nga aktivitetet tona',
    'home.engage.title': 'Angazhim, Reagim, Veprim',
    'home.engage.text':
      'Të rrisim ndërgjegjësimin dhe presionin qytetar në: mbrojtjen e mjedisit, ruatjen e trashëgimisë kulturore, aftësimin në fushën e Teknologjisë së Informacionit dhe Komunikimit dhe medias, zhvillimit të bujqësisë dhe industrisë së turizmit në vend, si dhe të inkurajojmë përmirësimin e jetës sociale në Shqipëri.',
    'home.network.title': 'Rrjetëzim',
    'home.network.text': 'Bashkohu me ne dhe rrit mundësitë për të formësuar komunitetin tënd',
    'home.network.cta': 'Zbulo më shumë',
    'home.empower.title': 'Fuqizojmë të rinjtë',
    'home.contact.title': 'QENDRA KAZUS',

    'about.title': 'About',
    // The live About page is English only. The Albanian below is a translation. REVIEW
    'about.intro.title': 'Fuqizojmë të rinjtë të udhëheqin ndryshimin',
    'about.intro.text':
      'Qendra Kazus udhëhiqet nga misioni për të frymëzuar aktivizmin rinor dhe për të krijuar mundësi që liderët e rinj t’i formësojnë komunitetet e tyre. Jemi të përkushtuar të nxisim nisma që ndërtojnë një të ardhme më të ndritur dhe më gjithëpërfshirëse.',
    'about.team.title': 'Fuqizojmë brezin e ardhshëm të ndryshuesve',
    'about.team.text': 'Njihuni me individët e përkushtuar që e çojnë përpara misionin tonë.',
    'meta.about': 'About | Qendra KAZUS',
    'meta.aboutDesc': 'Qendra KAZUS frymëzon aktivizmin rinor dhe krijon mundësi për liderët e rinj.',

    'projects.title': 'Projektet tona',
    'projects.intro': 'Projektet e Qendrës KAZUS: kulturë, mjedis, trashëgimi dhe rrjetëzim rinor.',
    'projects.filter.all': 'Të gjitha',
    'projects.filter.label': 'Filtro projektet',
    'projects.readMore': 'Lexo më shumë',
    'projects.posts': 'Postimet e këtij projekti',
    'projects.noPosts': 'Ende nuk ka postime për këtë projekt.',
    'projects.noDescription': 'Informacioni për këtë projekt do të shtohet së shpejti.',
    'projects.gallery': 'Galeria',
    'projects.back': 'Të gjitha projektet',
    'projects.count': '{n} postime',
    'projects.count1': '1 postim',
    'projects.tag.culture': 'Kulturë',
    'projects.tag.environment': 'Mjedis',
    'projects.tag.erasmus': 'Erasmus+',
    'meta.projects': 'Projektet tona | Qendra KAZUS',
    'meta.projectsDesc': 'Projektet e Qendrës KAZUS në Korçë: kulturë, mjedis, trashëgimi dhe Erasmus+.',

    'media.title': 'Media',
    'media.subtitle': 'Aktivitetet tona',
    'media.allProjects': 'Të gjitha projektet',
    'media.filterLabel': 'Filtro sipas projektit',
    'media.album.title': 'Fotoalbumi',
    'media.album.cta': 'Shiko fotoalbumin',
    'meta.media': 'Media | Qendra KAZUS',
    'meta.mediaDesc': 'Aktivitetet e Qendrës KAZUS: postime, dokumentarë dhe fotoalbume.',

    'post.by': 'Nga',
    'post.projects': 'Projektet',
    'post.back': 'Të gjitha postimet',
    'post.download': 'Shkarko',
    'post.gallery': 'Foto',
    'post.read': 'Lexo më shumë',
    'post.next': 'Postimi tjetër',
    'post.video': 'Video',
    'post.notFound': 'Ky postim nuk u gjet.',

    'carousel.label': 'Postimet e fundit',
    'carousel.prev': 'Postimi i mëparshëm',
    'carousel.next': 'Postimi tjetër',
    'carousel.goto': 'Shko te postimi {n}',
    'carousel.position': 'Postimi {n} nga {total}',
    'cards.loadMore': 'Shfaq më shumë',
    'cards.shown': 'Po shfaqen {n} nga {total}',

    'notif.title': 'Njoftime',
    'notif.intro': 'Thirrje, afate dhe njoftime nga Qendra KAZUS.',
    'notif.filterLabel': 'Filtro sipas llojit',
    'notif.all': 'Të gjitha',
    'notif.deadline': 'Afati',
    'notif.expired': 'Afati ka kaluar',
    'notif.open': 'Hap lidhjen',
    'notif.empty': 'Nuk ka njoftime për këtë filtër.',
    'notif.emptyAll': 'Aktualisht nuk ka njoftime.',
    'notif.sample': 'Shembull',
    'notif.status.open': 'Hapur',
    'notif.status.closed': 'Mbyllur',
    'notif.status.postponed': 'Shtyrë',
    'notif.status.cancelled': 'Anuluar',
    'notif.type.call-experts': 'Thirrje për ekspertë',
    'notif.type.call-project': 'Thirrje për projekt të ri',
    'notif.type.postponed': 'Projekt i shtyrë',
    'notif.type.cancelled': 'Projekt i anuluar',
    'notif.type.erasmus-partners': 'Thirrje për ekipe ose partnerë Erasmus+',
    'notif.type.deadline': 'Afat',
    'notif.type.announcement': 'Njoftim i përgjithshëm',
    'meta.notif': 'Njoftime | Qendra KAZUS',
    'meta.notifDesc': 'Thirrje për ekspertë, projekte, partnerë Erasmus+, afate dhe njoftime nga Qendra KAZUS.',

    'contact.title': 'Contact',
    'contact.address': 'Adresa',
    'contact.phone': 'Telefoni',
    'contact.email': 'Email',
    'meta.contact': 'Contact | Qendra KAZUS',
    'meta.contactDesc': 'Kontakto Qendrën KAZUS: Korçë, Albania | +355692942794 | qendrakazus@gmail.com',

    'footer.nav': 'Lidhje',
    'footer.contact': 'Kontakt',
    'footer.rights': 'Të gjitha të drejtat e rezervuara.',

    'gallery.open': 'Hap foton në madhësi të plotë',
    'gallery.close': 'Mbyll',
    'gallery.prev': 'Foto e mëparshme',
    'gallery.next': 'Foto tjetër',

    'notfound.title': 'Faqja nuk u gjet',
    'notfound.text': 'Faqja që kërkoni nuk ekziston ose është zhvendosur.',
    'notfound.home': 'Kthehu te kreu',
    'loading': 'Duke u ngarkuar…',
  },

  en: {
    'site.name': 'Qendra KAZUS',
    'site.tagline': 'Qendra KAZUS, Korçë, Albania',
    'meta.home': 'Qendra KAZUS | Youth advocacy in Korçë',
    'meta.homeDesc':
      'Qendra KAZUS is a youth advocacy organisation in Korçë, Albania. Projects, news and notifications.', // REVIEW

    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Our Projects',
    'nav.media': 'Media',
    'nav.notifications': 'Notifications',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'nav.main': 'Main navigation',
    'nav.skip': 'Skip to content',
    'lang.switch': 'Shqip',
    'lang.switchLabel': 'Ndrysho faqen në shqip',

    'home.mission.title': 'Our Mission', // REVIEW
    'home.mission.text':
      'To contribute directly and indirectly to strengthening democracy and the rule of law, as well as economic and social development, through youth advocacy in local and central public decision-making.', // REVIEW
    'home.mission.cta': 'LEARN MORE', // REVIEW
    'home.latest.title': 'Latest', // REVIEW
    'home.more.title': 'More from our activities', // REVIEW
    'home.engage.title': 'Engagement, Response, Action', // REVIEW
    'home.engage.text':
      'To raise awareness and civic pressure on: protecting the environment, preserving cultural heritage, building skills in Information and Communication Technology and media, developing agriculture and the tourism industry in the country, and encouraging improvement of social life in Albania.', // REVIEW
    'home.network.title': 'Networking', // REVIEW
    'home.network.text': 'Join us and increase your opportunities to shape your community', // REVIEW
    'home.network.cta': 'Discover more', // REVIEW
    'home.empower.title': 'Empowering Young People', // REVIEW
    'home.contact.title': 'QENDRA KAZUS',

    'about.title': 'About',
    'about.intro.title': 'Empowering Youth to Lead Change',
    'about.intro.text':
      'Qendra Kazus is driven by a mission to inspire youth activism and create opportunities for young leaders to shape their communities. We are committed to fostering initiatives that build a brighter, more inclusive future.',
    'about.team.title': 'Empowering the Next Generation of Changemakers',
    'about.team.text': 'Meet the passionate individuals driving our mission forward.',
    'meta.about': 'About | Qendra KAZUS',
    'meta.aboutDesc':
      'Qendra KAZUS inspires youth activism and creates opportunities for young leaders.', // REVIEW

    'projects.title': 'Our Projects',
    'projects.intro': 'Projects of Qendra KAZUS: culture, environment, heritage and youth networking.', // REVIEW
    'projects.filter.all': 'All',
    'projects.filter.label': 'Filter projects',
    'projects.readMore': 'Read more',
    'projects.posts': 'Posts from this project',
    'projects.noPosts': 'There are no posts for this project yet.',
    'projects.noDescription': 'Information about this project will be added soon.',
    'projects.gallery': 'Gallery',
    'projects.back': 'All projects',
    'projects.count': '{n} posts',
    'projects.count1': '1 post',
    'projects.tag.culture': 'Culture',
    'projects.tag.environment': 'Environment',
    'projects.tag.erasmus': 'Erasmus+',
    'meta.projects': 'Our Projects | Qendra KAZUS',
    'meta.projectsDesc':
      'Projects of Qendra KAZUS in Korçë: culture, environment, heritage and Erasmus+.', // REVIEW

    'media.title': 'Media',
    'media.subtitle': 'Our Activities', // REVIEW
    'media.allProjects': 'All projects',
    'media.filterLabel': 'Filter by project',
    'media.album.title': 'Photo album',
    'media.album.cta': 'View the photo album',
    'meta.media': 'Media | Qendra KAZUS',
    'meta.mediaDesc': 'Activities of Qendra KAZUS: posts, documentaries and photo albums.', // REVIEW

    'post.by': 'By',
    'post.projects': 'Projects',
    'post.back': 'All posts',
    'post.download': 'Download',
    'post.gallery': 'Photos',
    'post.read': 'Read more',
    'post.next': 'Next post',
    'post.video': 'Video',
    'post.notFound': 'This post was not found.',

    'carousel.label': 'Latest posts',
    'carousel.prev': 'Previous post',
    'carousel.next': 'Next post',
    'carousel.goto': 'Go to post {n}',
    'carousel.position': 'Post {n} of {total}',
    'cards.loadMore': 'Show more',
    'cards.shown': 'Showing {n} of {total}',

    'notif.title': 'Notifications',
    'notif.intro': 'Calls, deadlines and announcements from Qendra KAZUS.',
    'notif.filterLabel': 'Filter by type',
    'notif.all': 'All',
    'notif.deadline': 'Deadline',
    'notif.expired': 'Deadline passed',
    'notif.open': 'Open link',
    'notif.empty': 'There are no notifications for this filter.',
    'notif.emptyAll': 'There are no notifications at the moment.',
    'notif.sample': 'Sample',
    'notif.status.open': 'Open',
    'notif.status.closed': 'Closed',
    'notif.status.postponed': 'Postponed',
    'notif.status.cancelled': 'Cancelled',
    'notif.type.call-experts': 'Call for experts',
    'notif.type.call-project': 'Call for a new project',
    'notif.type.postponed': 'Project postponed',
    'notif.type.cancelled': 'Project cancelled',
    'notif.type.erasmus-partners': 'Call for Erasmus+ teams or partners',
    'notif.type.deadline': 'Deadline',
    'notif.type.announcement': 'General announcement',
    'meta.notif': 'Notifications | Qendra KAZUS',
    'meta.notifDesc':
      'Calls for experts, projects, Erasmus+ partners, deadlines and announcements from Qendra KAZUS.', // REVIEW

    'contact.title': 'Contact',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'meta.contact': 'Contact | Qendra KAZUS',
    'meta.contactDesc':
      'Contact Qendra KAZUS: Korçë, Albania | +355692942794 | qendrakazus@gmail.com',

    'footer.nav': 'Links',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',

    'gallery.open': 'Open photo full size',
    'gallery.close': 'Close',
    'gallery.prev': 'Previous photo',
    'gallery.next': 'Next photo',

    'notfound.title': 'Page not found',
    'notfound.text': 'The page you are looking for does not exist or has moved.',
    'notfound.home': 'Back to home',
    'loading': 'Loading…',
  },
}
