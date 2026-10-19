import { Link } from 'react-router-dom'
import { Carousel } from '../components/Carousel.jsx'
import { Gallery } from '../components/Gallery.jsx'
import { Img } from '../components/Img.jsx'
import { PostGrid } from '../components/PostGrid.jsx'
import { CAROUSEL_COUNT, site } from '../data/site.js'
import { posts } from '../lib/content.js'
import { useLang } from '../lib/i18n.jsx'
import { useMeta } from '../lib/useMeta.js'

// Photos for "Fuqizojmë të rinjtë", same four as the old home page.
const empowerPhotos = [
  { src: 'group-photo-2', alt: { sq: 'Të rinj të ulur në tavolina gjatë një aktiviteti trajnimi', en: 'Young people seated at tables during a training activity' } }, // REVIEW alt
  { src: 'team-meeting', alt: { sq: 'Të rinj në një takim pune rreth tavolinës', en: 'Young people at a working meeting around a table' } }, // REVIEW alt
  { src: 'group-flags', alt: { sq: 'Grup të rinjsh me flamuj të vendeve të ndryshme përpara një mozaiku', en: 'A group of young people holding flags of different countries in front of a mosaic' } }, // REVIEW alt
  { src: 'riverside-walk', alt: { sq: 'Të rinj në një shëtitje buzë lumit', en: 'Young people on a walk by the river' } }, // REVIEW alt
]

export default function Home() {
  const { t } = useLang()
  useMeta({ title: t('meta.home'), description: t('meta.homeDesc'), image: '/img/group-flags-960.webp' })

  const carouselPosts = posts.slice(0, CAROUSEL_COUNT)
  const morePosts = posts.slice(CAROUSEL_COUNT)

  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <h1 className="hero__title">{t('home.mission.title')}</h1>
            <p className="hero__lead">{t('home.mission.text')}</p>
            <Link to="/contact" className="btn btn--lg">
              {t('home.mission.cta')}
            </Link>
          </div>
          <div className="hero__photos" aria-hidden="false">
            <figure className="hero__photo hero__photo--a">
              <Img src="group-flags" alt={empowerPhotos[2].alt} sizes="(min-width: 1024px) 560px, 90vw" eager />
            </figure>
            <figure className="hero__photo hero__photo--b">
              <Img src="riverside-walk" alt={empowerPhotos[3].alt} sizes="(min-width: 1024px) 220px, 40vw" eager />
            </figure>
            <figure className="hero__photo hero__photo--c">
              <Img src="team-meeting" alt={empowerPhotos[1].alt} sizes="(min-width: 1024px) 300px, 50vw" eager />
            </figure>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="latest-title">
        <div className="container">
          <h2 id="latest-title" className="section__title">
            {t('home.latest.title')}
          </h2>
          <Carousel posts={carouselPosts} />
        </div>
      </section>

      {morePosts.length > 0 && (
        <section className="section section--tint" aria-labelledby="more-title">
          <div className="container">
            <h2 id="more-title" className="section__title">
              {t('home.more.title')}
            </h2>
            <PostGrid posts={morePosts} />
          </div>
        </section>
      )}

      <section className="section engage" aria-labelledby="engage-title">
        <div className="container engage__grid">
          <div className="engage__media">
            <Img
              src="council-of-europe"
              alt={{
                sq: 'Ndërtesa e Këshillit të Evropës me flamujt e vendeve anëtare',
                en: 'The Council of Europe building with the flags of member states', // REVIEW alt
              }}
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
          <div className="engage__copy">
            <h2 id="engage-title" className="section__title">
              {t('home.engage.title')}
            </h2>
            <p className="lead">{t('home.engage.text')}</p>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="network-title">
        <div className="container band__inner">
          <h2 id="network-title" className="band__title">
            {t('home.network.title')}
          </h2>
          <p className="band__text">{t('home.network.text')}</p>
          <Link to="/contact" className="btn btn--inverse btn--lg">
            {t('home.network.cta')}
          </Link>
        </div>
      </section>

      <section className="section" aria-labelledby="empower-title">
        <div className="container">
          <h2 id="empower-title" className="section__title">
            {t('home.empower.title')}
          </h2>
          <Gallery images={empowerPhotos} layout="mosaic" title={t('home.empower.title')} />
        </div>
      </section>

      <section className="section section--tint contact-block" aria-labelledby="contact-title">
        <div className="container contact-block__inner">
          <h2 id="contact-title" className="section__title">
            {t('home.contact.title')}
          </h2>
          <address className="contact-list">
            <p>{site.contact.address}</p>
            <p>
              <a href={`tel:${site.contact.phone}`}>{site.contact.phone}</a>
            </p>
            <p>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </p>
          </address>
        </div>
      </section>
    </>
  )
}
