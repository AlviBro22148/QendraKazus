// Client-side search. No server, no index: the data files are filtered in the browser.

// Lowercase and strip accents so "pustec", "Korce" and "korçë" all match.
export function normalize(text) {
  return String(text || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
}

// Every word typed must appear somewhere in the text.
export function matches(haystack, query) {
  const words = normalize(query).split(/\s+/).filter(Boolean)
  if (!words.length) return true
  const hay = normalize(haystack)
  return words.every((w) => hay.includes(w))
}

const bothLangs = (field) => (field ? `${field.sq || ''} ${field.en || ''}` : '')

// Text searched for a post: titles, excerpts, body, author, linked project names (both languages).
export function postText(post, projectTitles = []) {
  return [
    bothLangs(post.title),
    bothLangs(post.excerpt),
    (post.body?.sq || []).join(' '),
    (post.body?.en || []).join(' '),
    post.author || '',
    projectTitles.join(' '),
  ].join(' ')
}

export function projectText(project) {
  return [bothLangs(project.title), bothLangs(project.description)].join(' ')
}
