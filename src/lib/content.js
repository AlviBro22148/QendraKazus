// Helpers that read the data files. Components never import posts/projects directly.
import { projects } from '../data/projects.js'
import { posts as rawPosts } from '../data/posts.js'
import { notifications as rawNotifications } from '../data/notifications.js'

export { projects }

// Newest first. Same-day posts keep the order they have in posts.js.
export const posts = [...rawPosts].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))

export const notifications = [...rawNotifications].sort((a, b) => (a.date < b.date ? 1 : -1))

export const getProject = (id) => projects.find((p) => p.id === id)
export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug)
export const projectsOfPost = (post) => (post.projects || []).map(getProject).filter(Boolean)
export const postsOfProject = (projectId) => posts.filter((p) => (p.projects || []).includes(projectId))

// Card image: the post cover, or the cover of its first project when it has none.
export function postImage(post) {
  if (post.cover) return { src: post.cover, alt: post.coverAlt }
  const pr = projectsOfPost(post)[0]
  return pr ? { src: pr.cover, alt: pr.coverAlt } : null
}

// A notification deadline has passed once the deadline day is over.
export function isExpired(n, today = new Date()) {
  if (!n.deadline) return false
  const end = new Date(n.deadline + 'T23:59:59')
  return end < today
}

// Warn about broken references in the data files.
export function validateData() {
  const ids = new Set(projects.map((p) => p.id))
  const problems = []
  for (const p of rawPosts) {
    if (!p.projects || p.projects.length === 0) problems.push(`Post "${p.slug}" has no projects.`)
    for (const id of p.projects || []) {
      if (!ids.has(id)) problems.push(`Post "${p.slug}" references unknown project id "${id}".`)
    }
  }
  const slugs = new Set()
  for (const p of rawPosts) {
    if (slugs.has(p.slug)) problems.push(`Duplicate post slug "${p.slug}".`)
    slugs.add(p.slug)
  }
  return problems
}
