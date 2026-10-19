import { Img } from '../components/Img.jsx'
import { team } from '../data/team.js'
import { useLang } from '../lib/i18n.jsx'
import { useMeta } from '../lib/useMeta.js'

export default function About() {
  const { t, pick } = useLang()
  useMeta({ title: t('meta.about'), description: t('meta.aboutDesc'), image: '/img/group-flags-960.webp' })

  return (
    <>
      <section className="page-head">
        <div className="container page-head__inner">
          <h1 className="page-head__title">{t('about.intro.title')}</h1>
          <p className="lead">{t('about.intro.text')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container about__photo">
          <Img
            src="group-flags"
            alt={{
              sq: 'Grup të rinjsh me flamuj të vendeve të ndryshme përpara një mozaiku',
              en: 'A group of young people holding flags of different countries in front of a mosaic', // REVIEW alt
            }}
            sizes="(min-width: 1024px) 1100px, 100vw"
          />
        </div>
      </section>

      {team.length > 0 && (
        <section className="section section--tint" aria-labelledby="team-title">
          <div className="container">
            <h2 id="team-title" className="section__title">
              {t('about.team.title')}
            </h2>
            <p className="lead">{t('about.team.text')}</p>
            <ul className="team">
              {team.map((m) => (
                <li key={m.name} className="team__member">
                  {m.photo && <Img src={m.photo} alt={m.alt || m.name} sizes="240px" />}
                  <strong>{m.name}</strong>
                  <span>{pick(m.role)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}
