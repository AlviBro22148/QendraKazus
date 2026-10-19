import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav, site } from '../data/site.js'
import { useLang } from '../lib/i18n.jsx'
import { Img } from './Img.jsx'

export function Header() {
  const { t, lang, setLang } = useLang()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const buttonRef = useRef(null)

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const toggleLang = () => setLang(lang === 'sq' ? 'en' : 'sq')

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <Link to="/" className="brand" aria-label={t('site.name')}>
          <Img src={site.logo} alt="" sizes="44px" eager className="brand__mark" />
          <span className="brand__name">
            Qendra <b>KAZUS</b>
          </span>
        </Link>

        <nav className={`nav ${open ? 'is-open' : ''}`} id="main-nav" aria-label={t('nav.main')}>
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.end}>
                  {t(item.label)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLang}
            aria-label={t('lang.switchLabel')}
            lang={lang === 'sq' ? 'en' : 'sq'}
          >
            {t('lang.switch')}
          </button>
          <button
            type="button"
            ref={buttonRef}
            className="menu-button"
            aria-expanded={open}
            aria-label={open ? t('nav.close') : t('nav.menu')}
            aria-controls="main-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-button__label">{open ? t('nav.close') : t('nav.menu')}</span>
            <span className="menu-button__bars" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
