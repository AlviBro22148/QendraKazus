// Filter chips. `items` = [{ value, label }]. Controlled by `value` / `onChange`.
export function Chips({ items, value, onChange, label }) {
  return (
    <div className="chips" role="group" aria-label={label}>
      {items.map((it) => (
        <button
          key={it.value}
          type="button"
          className={`chip ${value === it.value ? 'is-active' : ''}`}
          aria-pressed={value === it.value}
          onClick={() => onChange(it.value)}
        >
          {it.label}
        </button>
      ))}
    </div>
  )
}
