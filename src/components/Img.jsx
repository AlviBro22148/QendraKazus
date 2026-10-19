import manifest from '../data/imageManifest.json'
import { useLang } from '../lib/i18n.jsx'

// Responsive, lazy-loaded image from public/img. `src` is the image name without size suffix.
// `alt` may be a string or a { sq, en } object. Use eager for the first image on a page.
export function Img({ src, alt, sizes = '100vw', eager = false, className, style }) {
  const { pick } = useLang()
  const m = manifest[src]
  if (!m) {
    if (import.meta.env.DEV) console.warn(`[data] Image "${src}" not found. Run "npm run images".`)
    return null
  }
  const text = typeof alt === 'string' ? alt : pick(alt)
  const srcSet = m.widths.map(([suffix, w]) => `/img/${src}-${suffix}.webp ${w}w`).join(', ')
  const [suffix] = m.widths[Math.min(1, m.widths.length - 1)]
  return (
    <img
      className={[className, m.fit === 'contain' ? 'fit-contain' : m.h > m.w * 1.1 ? 'is-portrait' : ''].filter(Boolean).join(' ')}
      style={style}
      src={`/img/${src}-${suffix}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      width={m.w}
      height={m.h}
      alt={text}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={eager ? 'high' : undefined}
    />
  )
}
