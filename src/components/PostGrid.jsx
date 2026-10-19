import { useState } from 'react'
import { CARDS_PAGE_SIZE } from '../data/site.js'
import { useLang } from '../lib/i18n.jsx'
import { PostCard } from './PostCard.jsx'

// Grid of post cards with a "show more" button, so every post is reachable.
export function PostGrid({ posts, pageSize = CARDS_PAGE_SIZE }) {
  const { t } = useLang()
  const [shown, setShown] = useState(pageSize)
  const visible = posts.slice(0, shown)
  const rest = posts.length - visible.length

  return (
    <>
      <div className="card-grid">
        {visible.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      {rest > 0 && (
        <div className="load-more">
          <p className="meta" aria-live="polite">
            {t('cards.shown', { n: visible.length, total: posts.length })}
          </p>
          <button type="button" className="btn" onClick={() => setShown((s) => s + pageSize)}>
            {t('cards.loadMore')}
          </button>
        </div>
      )}
    </>
  )
}
