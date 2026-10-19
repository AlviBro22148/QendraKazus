import { Link, useParams } from 'react-router-dom'
import { Gallery } from '../components/Gallery.jsx'
import { Img } from '../components/Img.jsx'
import { PostGrid } from '../components/PostGrid.jsx'
import { getProjectBySlug, postsOfProject } from '../lib/content.js'
import { useLang } from '../lib/i18n.jsx'
import { Paragraphs } from '../lib/RichText.jsx'
import { useMeta } from '../lib/useMeta.js'
import NotFound from './NotFound.jsx'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  if (!project) return <NotFound />
  return <ProjectView project={project} />
}

function ProjectView({ project }) {
  const { t, pick } = useLang()
  const projectPosts = postsOfProject(project.id)
  const description = pick(project.description)
  useMeta({
    title: `${pick(project.title)} | Qendra KAZUS`,
    description: description.split(/\n\n+/)[0] || t('meta.projectsDesc'),
    image: `/img/${project.cover}-960.webp`,
  })

  return (
    <>
      <section className="page-head">
        <div className="container page-head__inner">
          <Link to="/projects" className="back-link">
            ← {t('projects.back')}
          </Link>
          <h1 className="page-head__title">{pick(project.title)}</h1>
        </div>
      </section>

      <section className="section section--flush">
        <div className="container project__grid">
          <div className="project__media">
            <Img src={project.cover} alt={project.coverAlt} sizes="(min-width: 1024px) 520px, 100vw" eager />
          </div>
          <div className="prose">
            {description ? <Paragraphs text={description} /> : <p>{t('projects.noDescription')}</p>}
          </div>
        </div>
      </section>

      {project.images.length > 0 && (
        <section className="section" aria-labelledby="gallery-title">
          <div className="container">
            <h2 id="gallery-title" className="section__title">
              {t('projects.gallery')}
            </h2>
            <Gallery images={project.images} title={pick(project.title)} />
          </div>
        </section>
      )}

      <section className="section section--tint" aria-labelledby="posts-title">
        <div className="container">
          <h2 id="posts-title" className="section__title">
            {t('projects.posts')}
          </h2>
          {projectPosts.length ? <PostGrid posts={projectPosts} /> : <p>{t('projects.noPosts')}</p>}
        </div>
      </section>
    </>
  )
}
