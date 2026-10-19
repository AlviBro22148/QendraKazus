import { Link, useParams } from 'react-router-dom'
import { Gallery } from '../components/Gallery.jsx'
import { Img } from '../components/Img.jsx'
import { PostCard } from '../components/PostCard.jsx'
import { ProjectTags } from '../components/ProjectTags.jsx'
import { getPostBySlug, posts, projectsOfPost } from '../lib/content.js'
import { useLang } from '../lib/i18n.jsx'
import { RichText } from '../lib/RichText.jsx'
import { useMeta } from '../lib/useMeta.js'
import NotFound from './NotFound.jsx'

export default function Post() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)
  if (!post) return <NotFound />
  return <PostView post={post} />
}

function PostView({ post }) {
  const { t, pick, lang, formatDate } = useLang()
  const body = post.body[lang] && post.body[lang].length ? post.body[lang] : post.body.sq
  const cover = post.cover ? { src: post.cover, alt: post.coverAlt } : null
  const relatedIds = projectsOfPost(post).map((p) => p.id)
  const related = posts
    .filter((p) => p.id !== post.id && p.projects.some((id) => relatedIds.includes(id)))
    .slice(0, 3)

  useMeta({
    title: `${pick(post.title)} | Qendra KAZUS`,
    description: pick(post.excerpt) || (body[0] || '').slice(0, 160),
    image: cover ? `/img/${cover.src}-960.webp` : undefined,
  })

  return (
    <article>
      <header className="page-head">
        <div className="container page-head__inner">
          <Link to="/media" className="back-link">
            ← {t('post.back')}
          </Link>
          <h1 className="page-head__title page-head__title--post">{pick(post.title)}</h1>
          <p className="meta">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.author && (
              <>
                {' · '}
                {t('post.by')} {post.author}
              </>
            )}
          </p>
          <ProjectTags post={post} />
        </div>
      </header>

      <div className="container post__layout">
        {cover && (
          <figure className="post__cover">
            <Img src={cover.src} alt={cover.alt} sizes="(min-width: 1024px) 800px, 100vw" eager />
          </figure>
        )}

        <div className="prose">
          {body.map((para, i) => (
            <p key={i}>
              <RichText text={para} />
            </p>
          ))}

          {post.downloads?.map((d) => (
            <p key={d.file}>
              <a className="btn" href={`/files/${d.file}`} download>
                {t('post.download')}: {pick(d.label)}
              </a>
            </p>
          ))}
        </div>

        {post.videos?.length > 0 && (
          <div className="videos">
            {post.videos.map((v) => (
              <div className="video" key={v.id}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  title={pick(v.title)}
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        )}

        {post.gallery?.length > 0 && (
          <section className="post__gallery" aria-label={t('post.gallery')}>
            <Gallery images={post.gallery} title={pick(post.title)} />
          </section>
        )}
      </div>

      {related.length > 0 && (
        <section className="section section--tint" aria-labelledby="related-title">
          <div className="container">
            <h2 id="related-title" className="section__title">
              {t('projects.posts')}
            </h2>
            <div className="card-grid">
              {related.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
