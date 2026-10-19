import { Img } from '../components/Img.jsx'
import { site } from '../data/site.js'
import { useLang } from '../lib/i18n.jsx'
import { useMeta } from '../lib/useMeta.js'

export default function Contact() {
  const { t } = useLang()
  useMeta({ title: t('meta.contact'), description: t('meta.contactDesc') })
  const { address, phone, email } = site.contact

  return (
    <>
      <section className="page-head">
        <div className="container page-head__inner">
          <h1 className="page-head__title">{t('contact.title')}</h1>
        </div>
      </section>
      <section className="section section--flush">
        <div className="container contact__grid">
          <address className="contact-card">
            <p className="contact-card__name">QENDRA KAZUS</p>
            <dl>
              <dt>{t('contact.address')}</dt>
              <dd>{address}</dd>
              <dt>{t('contact.phone')}</dt>
              <dd>
                <a href={`tel:${phone}`}>{phone}</a>
              </dd>
              <dt>{t('contact.email')}</dt>
              <dd>
                <a href={`mailto:${email}`}>{email}</a>
              </dd>
            </dl>
          </address>
          <div className="contact__photo">
            <Img
              src="team-meeting"
              alt={{ sq: 'Të rinj në një takim pune rreth tavolinës', en: 'Young people at a working meeting around a table' }} // REVIEW alt
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>
        </div>
      </section>
    </>
  )
}
