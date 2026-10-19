// OLD WORDPRESS URL  ->  NEW ROUTE. Anyone opening an old link lands on the right new page.
// Post URLs (/<slug>/) are created automatically from posts.js, so only list the others here.
// The same table is printed in README.md.
// Note: the old /media/ page (photo album) now lives at /posts/fotoalbumi-... ; /media is the new Media section.

export const redirects = {
  '/blogs': '/media', // old "Media" page that listed all posts
  '/minoriteti-maqendonas-ne-pustec': '/projects/minoriteti-maqedonas-ne-pustec', // old page, same text as the Pustec exhibition post
  '/category/media': '/media',
  '/category/pustec': '/projects/minoriteti-maqedonas-ne-pustec',
  '/category/ecoaction-picnic': '/projects/ecoaction-picnic',
  '/category/heritage-voices': '/projects/heritage-voices',
  '/category/erasmus': '/projects/erasmus-plus',
  '/author/ela': '/media',
}
