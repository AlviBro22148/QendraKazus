import { useCallback, useEffect, useRef, useState } from 'react'
import { heroSlides } from '../data/site.js'
import { useLang } from '../lib/i18n.jsx'
import { Img } from './Img.jsx'

const INTERVAL = 6000

// Full-width photo slideshow at the top of the home page. Photos only, no text over them.
// Moves by itself every few seconds (pauses while the pointer or keyboard focus is on it).
// Swipe on touch, arrows and dots, arrow keys. Does not autoplay for visitors who turned on "reduce motion".
export function HeroSlider() {
  const { t, pick } = useLang()
  const track = useRef(null)
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false) // true unless the visitor prefers reduced motion
  const [paused, setPaused] = useState(false) // hover or focus inside
  const count = heroSlides.length

  const goTo = useCallback(
    (i) => {
      const el = track.current
      if (!el) return
      const next = (i + count) % count
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      el.scrollTo({ left: next * el.clientWidth, behavior: reduce ? 'auto' : 'smooth' })
      // Some browsers skip smooth scrolling (background tabs, power saving): make sure the slide still changes.
      setTimeout(() => {
        if (Math.abs(el.scrollLeft - next * el.clientWidth) > 2 && !el.matches(':active')) el.scrollTo({ left: next * el.clientWidth, behavior: 'auto' })
      }, 1000)
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
    const onScroll = () => setIndex(Math.round(el.scrollLeft / el.clientWidth))
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!playing || paused) return
    const id = setInterval(() => goTo(index + 1), INTERVAL)
    return () => clearInterval(id)
  }, [playing, paused, index, goTo])

  const manual = (i) => goTo(i)

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
      onFocus={(e) => e.target.matches(':focus-visible') && setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hero-slider__track" ref={track} tabIndex={0} onKeyDown={onKeyDown}>
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
