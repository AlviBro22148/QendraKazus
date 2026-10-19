import { Link } from 'react-router-dom'
import { useLang } from '../lib/i18n.jsx'
import { useMeta } from '../lib/useMeta.js'

export default function NotFound() {
  const { t } = useLang()
  useMeta({ title: `${t('notfound.title')} | Qendra KAZUS`, description: t('notfound.text') })
  return (
    <section className="page-head">
      <div className="container page-head__inner">
        <h1 className="page-head__title">{t('notfound.title')}</h1>
        <p className="lead">{t('notfound.text')}</p>
        <Link to="/" className="btn">
          {t('notfound.home')}
        </Link>
      </div>
    </section>
  )
}
