import { useCallback, useEffect, useRef, useState } from 'react'
import { heroSlides } from '../data/site.js'
import { useLang } from '../lib/i18n.jsx'
import { Img } from './Img.jsx'

const INTERVAL = 6000

// Full-width photo slideshow at the top of the home page. Photos only, no text over them.
// Swipe on touch, arrows and dots, arrow keys, and a pause button. Autoplay stops for good
// once a visitor uses a control, and never runs with "reduce motion".
export function HeroSlider() {
  const { t, pick } = useLang()
  const track = useRef(null)
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [paused, setPaused] = useState(false) // hover or focus inside
  const count = heroSlides.length

  const goTo = useCallback(
    (i) => {
      const el = track.current
      if (!el) return
      const next = (i + count) % count
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      el.scrollTo({ left: next * el.clientWidth, behavior: reduce ? 'auto' : 'smooth' })
    },
    [count],
  )

  // Start autoplay only when motion is allowed.
  useEffect(() => {
    setPlaying(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    const el = track.current
    if (!el) return
    let frame
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setIndex(Math.round(el.scrollLeft / el.clientWidth)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    if (!playing || paused) return
    const id = setInterval(() => goTo(index + 1), INTERVAL)
    return () => clearInterval(id)
  }, [playing, paused, index, goTo])

  const manual = (i) => {
    setPlaying(false)
    goTo(i)
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      manual(index + 1)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      manual(index - 1)
    }
  }

  return (
    <section
      className="hero-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label={t('hero.label')}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hero-slider__track" ref={track} tabIndex={0} onKeyDown={onKeyDown} onTouchStart={() => setPlaying(false)}>
        {heroSlides.map((s, i) => (
          <figure
            key={s.src}
            className="hero-slider__slide"
            role="group"
            aria-roledescription="slide"
            aria-label={t('carousel.position', { n: i + 1, total: count })}
            inert={i !== index}
          >
            <Img src={s.src} alt={s.alt} sizes="100vw" eager />
          </figure>
        ))}
      </div>

      <button type="button" className="round-btn hero-slider__arrow hero-slider__arrow--prev" onClick={() => manual(index - 1)} aria-label={t('carousel.prev')}>
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button type="button" className="round-btn hero-slider__arrow hero-slider__arrow--next" onClick={() => manual(index + 1)} aria-label={t('carousel.next')}>
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="hero-slider__bar">
        <button type="button" className="hero-slider__pause" onClick={() => setPlaying((p) => !p)} aria-label={playing ? t('hero.pause') : t('hero.play')}>
          {playing ? (
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path d="M8 5v14M16 5v14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
              <path d="M8 5l11 7-11 7z" fill="currentColor" />
            </svg>
          )}
        </button>
        <div className="dots">
          {heroSlides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              className={`dot dot--light ${i === index ? 'is-active' : ''}`}
              aria-label={t('carousel.goto', { n: i + 1 })}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => manual(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
