import { useEffect, useRef } from 'react'
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { redirects } from './data/redirects.js'
import { posts } from './lib/content.js'
import { useLang } from './lib/i18n.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Media from './pages/Media.jsx'
import Post from './pages/Post.jsx'
import Notifications from './pages/Notifications.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

// Scrolls to the top and moves focus to the page on every route change (keyboard and screen readers).
function Layout() {
  const { pathname } = useLocation()
  const { t } = useLang()
  const main = useRef(null)
  const first = useRef(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (first.current) {
      first.current = false
      return
    }
    main.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <>
      <a className="skip-link" href="#main">
        {t('nav.skip')}
      </a>
      <Header />
      <main id="main" ref={main} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="media" element={<Media />} />
        <Route path="posts/:slug" element={<Post />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="contact" element={<Contact />} />

        {/* Old WordPress URLs */}
        {Object.entries(redirects).map(([from, to]) => (
          <Route key={from} path={from.slice(1)} element={<Navigate to={to} replace />} />
        ))}
        {posts.map((p) => (
          <Route key={p.slug} path={p.slug} element={<Navigate to={`/posts/${p.slug}`} replace />} />
        ))}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
