import { Link } from 'react-router-dom'
import { projectsOfPost } from '../lib/content.js'
import { useLang } from '../lib/i18n.jsx'

// Clickable project tags for a post. Each links to the project page.
export function ProjectTags({ post }) {
  const { pick, t } = useLang()
  const list = projectsOfPost(post)
  if (!list.length) return null
  return (
    <ul className="tags" aria-label={t('post.projects')}>
      {list.map((p) => (
        <li key={p.id}>
          <Link to={`/projects/${p.slug}`} className="tag">
            {pick(p.title)}
          </Link>
        </li>
      ))}
    </ul>
  )
}
