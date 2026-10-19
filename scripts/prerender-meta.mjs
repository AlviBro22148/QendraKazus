// Runs after `vite build`. Writes one HTML file per route into dist/ so that
//   - every page has its own <title> and meta tags in the HTML (search engines, WhatsApp/Facebook previews)
//   - direct links work on any static host without special rewrite rules
//   - old WordPress URLs redirect to the new routes
// The React app takes over in the browser as usual.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { projects } from '../src/data/projects.js'
import { posts } from '../src/data/posts.js'
import { translations } from '../src/data/translations.js'
import { redirects } from '../src/data/redirects.js'
import { site } from '../src/data/site.js'

const t = (k) => translations.sq[k]
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const shell = readFileSync('dist/index.html', 'utf8')

function page(route, { title, description, image }) {
  const url = site.url + route
  let html = shell
    .replace(/<title>.*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(description)}" />`)
  const extra = [
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(site.name)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:locale" content="sq_AL" />`,
    image ? `<meta property="og:image" content="${esc(site.url + image)}" />` : '',
    `<meta name="twitter:card" content="summary_large_image" />`,
  ].filter(Boolean).join('\n    ')
  html = html.replace('</head>', `    ${extra}\n  </head>`)
  const dir = route === '/' ? 'dist' : 'dist' + route
  mkdirSync(dir, { recursive: true })
  writeFileSync(dir + '/index.html', html)
}

const first = (s) => (s || '').split(/\n\n+/)[0].slice(0, 200)

page('/', { title: t('meta.home'), description: t('meta.homeDesc'), image: '/img/group-flags-960.webp' })
page('/about', { title: t('meta.about'), description: t('meta.aboutDesc'), image: '/img/group-flags-960.webp' })
page('/projects', { title: t('meta.projects'), description: t('meta.projectsDesc'), image: '/img/ecoaction-cover-480.webp' })
page('/media', { title: t('meta.media'), description: t('meta.mediaDesc'), image: '/img/bootcamp-2-960.webp' })
page('/notifications', { title: t('meta.notif'), description: t('meta.notifDesc') })
page('/contact', { title: t('meta.contact'), description: t('meta.contactDesc') })

for (const p of projects) {
  page('/projects/' + p.slug, {
    title: `${p.title.sq} | ${site.name}`,
    description: first(p.description.sq) || t('meta.projectsDesc'),
    image: `/img/${p.cover}-480.webp`,
  })
}
for (const p of posts) {
  const cover = p.cover || projects.find((x) => x.id === p.projects[0])?.cover
  page('/posts/' + p.slug, {
    title: `${p.title.sq} | ${site.name}`,
    description: p.excerpt.sq || first(p.body.sq[0]) || t('meta.mediaDesc'),
    image: cover ? `/img/${cover}-960.webp` : undefined,
  })
}

// Old WordPress URLs -> small redirect pages
function redirectPage(from, to) {
  const html = `<!doctype html>
<html lang="sq"><head><meta charset="utf-8" />
<title>${esc(site.name)}</title>
<meta http-equiv="refresh" content="0; url=${esc(to)}" />
<link rel="canonical" href="${esc(site.url + to)}" />
<script>location.replace(${JSON.stringify(to)})</script>
</head><body><a href="${esc(to)}">${esc(to)}</a></body></html>
`
  mkdirSync('dist' + from, { recursive: true })
  writeFileSync('dist' + from + '/index.html', html)
}
for (const [from, to] of Object.entries(redirects)) redirectPage(from, to)
for (const p of posts) redirectPage('/' + p.slug, '/posts/' + p.slug)

// Fallback for hosts that serve a 404 page (GitHub Pages) and for unknown routes: the app shows its own "not found".
writeFileSync('dist/404.html', shell)
console.log('Prerendered meta for', 6 + projects.length + posts.length, 'pages and', Object.keys(redirects).length + posts.length, 'redirects.')
