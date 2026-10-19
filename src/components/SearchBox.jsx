import { useId } from 'react'
import { useLang } from '../lib/i18n.jsx'

// Search field with a clear button. `count` is the number of results, announced to screen readers.
export function SearchBox({ value, onChange, count, placeholderKey = 'search.placeholder' }) {
  const { t } = useLang()
  const id = useId()
  return (
    <div className="search" role="search">
      <label htmlFor={id} className="visually-hidden">
        {t('search.label')}
      </label>
      <svg className="search__icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <input
        id={id}
        type="search"
        className="search__input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t(placeholderKey)}
        autoComplete="off"
        spellCheck="false"
      />
      {value && (
        <button type="button" className="search__clear" onClick={() => onChange('')} aria-label={t('search.clear')}>
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        </button>
      )}
      <p className="visually-hidden" aria-live="polite">
        {value ? t('search.results', { n: count }) : ''}
      </p>
    </div>
  )
}
