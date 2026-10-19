import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../data/translations.js'

const STORAGE_KEY = 'kazus-lang'
const LangContext = createContext(null)

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'sq' || saved === 'en') return saved
  } catch {
    /* storage blocked: fall back to default */
  }
  return 'sq' // Albanian is the default
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const value = useMemo(() => {
    const dict = translations[lang]
    const locale = lang === 'sq' ? 'sq-AL' : 'en-GB'
    // UI string by key, with optional {placeholders}.
    const t = (key, vars) => {
      let s = dict[key] ?? translations.sq[key] ?? key
      if (vars) for (const k of Object.keys(vars)) s = s.replace(`{${k}}`, vars[k])
      return s
    }
    // Pick the current language from a { sq, en } field. Falls back to Albanian.
    const pick = (field) => (field ? field[lang] || field.sq || '' : '')
    // Albanian month names are fixed here because some browsers have no Albanian locale data.
    const sqMonths = ['janar', 'shkurt', 'mars', 'prill', 'maj', 'qershor', 'korrik', 'gusht', 'shtator', 'tetor', 'nëntor', 'dhjetor']
    const formatDate = (iso) => {
      const d = new Date(iso + 'T12:00:00')
      if (lang === 'sq') return `${d.getDate()} ${sqMonths[d.getMonth()]} ${d.getFullYear()}`
      return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(d)
    }
    return { lang, setLang, t, pick, formatDate }
  }, [lang, setLang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
