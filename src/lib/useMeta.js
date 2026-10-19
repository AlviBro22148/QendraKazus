import { useEffect } from 'react'

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

// Sets the page title and meta tags. `image` is a path like /img/devoll-960.webp
export function useMeta({ title, description, image }) {
  useEffect(() => {
    document.title = title
    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
    }
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', 'Qendra KAZUS')
    setMeta('property', 'og:locale', document.documentElement.lang === 'en' ? 'en_GB' : 'sq_AL')
    if (image) setMeta('property', 'og:image', new URL(image, window.location.origin).href)
  }, [title, description, image])
}
