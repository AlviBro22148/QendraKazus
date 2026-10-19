import { useMemo, useState } from 'react'
import { Chips } from '../components/Chips.jsx'
import { SearchBox } from '../components/SearchBox.jsx'
import { ProjectCard } from '../components/ProjectCard.jsx'
import { projects } from '../lib/content.js'
import { matches, projectText } from '../lib/search.js'
import { useLang } from '../lib/i18n.jsx'
import { useMeta } from '../lib/useMeta.js'

export default function Projects() {
  const { t } = useLang()
  useMeta({ title: t('meta.projects'), description: t('meta.projectsDesc'), image: '/img/ecoaction-cover-480.webp' })
  const [tag, setTag] = useState('all')
  const [query, setQuery] = useState('')

  const tags = useMemo(() => [...new Set(projects.map((p) => p.tag).filter(Boolean))], [])
  const items = [
    { value: 'all', label: t('projects.filter.all') },
    ...tags.map((g) => ({ value: g, label: t(`projects.tag.${g}`) })),
  ]
  const shown = projects.filter((p) => (tag === 'all' || p.tag === tag) && matches(projectText(p), query))

  return (
    <>
      <section className="page-head">
        <div className="container page-head__inner">
          <h1 className="page-head__title">{t('projects.title')}</h1>
          <p className="lead">{t('projects.intro')}</p>
        </div>
      </section>
      <section className="section section--flush">
        <div className="container">
          <SearchBox value={query} onChange={setQuery} count={shown.length} placeholderKey="search.placeholderProjects" />
          {tags.length > 1 && (
            <Chips items={items} value={tag} onChange={setTag} label={t('projects.filter.label')} />
          )}
          {shown.length ? (
            <div className="card-grid card-grid--fill">
              {shown.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          ) : (
            <p className="empty">{t('search.none')}</p>
          )}
        </div>
      </section>
    </>
  )
}
