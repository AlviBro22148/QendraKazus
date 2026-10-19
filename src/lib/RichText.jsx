import { Fragment } from 'react'

// Tiny inline formatter for data-file text: [label](url) links and **bold**.
const TOKEN = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g

export function RichText({ text }) {
  const parts = text.split(TOKEN)
  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (link) {
          const external = /^https?:/.test(link[2])
          return (
            <a key={i} href={link[2]} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
              {link[1]}
            </a>
          )
        }
        const bold = part.match(/^\*\*([^*]+)\*\*$/)
        if (bold) return <strong key={i}>{bold[1]}</strong>
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}

// Paragraphs separated by a blank line.
export function Paragraphs({ text, className }) {
  if (!text) return null
  return text.split(/\n\n+/).map((p, i) => (
    <p key={i} className={className}>
      <RichText text={p} />
    </p>
  ))
}
