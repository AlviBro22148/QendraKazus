import { useState } from 'react'
import { Chips } from '../components/Chips.jsx'
import { SearchBox } from '../components/SearchBox.jsx'
import { PostGrid } from '../components/PostGrid.jsx'
import { posts, projects, projectsOfPost } from '../lib/content.js'
import { matches, postText } from '../lib/search.js'
import { useLang } from '../lib/i18n.jsx'
import { useMeta } from '../lib/useMeta.js'

// Old "Media" page: every post, newest first, with a filter by project.
export default function Media() {
  const { t, pick } = useLang()
  useMeta({ title: t('meta.media'), description: t('meta.mediaDesc'), image: '/img/bootcamp-2-960.webp' })
  const [project, setProject] = useState('all')
  const [query, setQuery] = useState('')

  const used = projects.filter((p) => posts.some((post) => post.projects.includes(p.id)))
  const items = [
    { value: 'all', label: t('media.allProjects') },
    ...used.map((p) => ({ value: p.id, label: pick(p.title) })),
  ]
  const shown = posts
    .filter((p) => project === 'all' || p.projects.includes(project))
    .filter((p) => matches(postText(p, projectsOfPost(p).map((x) => `${x.title.sq} ${x.title.en}`)), query))

  return (
    <>
      <section className="page-head">
        <div className="container page-head__inner">
          <h1 className="page-head__title">{t('media.title')}</h1>
          <p className="lead">{t('media.subtitle')}</p>
        </div>
      </section>
      <section className="section section--flush">
        <div className="container">
          <SearchBox value={query} onChange={setQuery} count={shown.length} />
          <Chips items={items} value={project} onChange={setProject} label={t('media.filterLabel')} />
          {/* key resets "show more" when the filter or search changes */}
          {shown.length ? <PostGrid key={project + '|' + query} posts={shown} /> : <p className="empty">{t('search.none')}</p>}
        </div>
      </section>
    </>
  )
}
