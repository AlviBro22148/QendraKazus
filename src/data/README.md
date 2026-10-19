# Content files

Everything on the site is written in these files. See the project README.md for the full guide.

- projects.js: one block per project (`id`, `slug`, `title`, `description`, `cover`, `images`)
- posts.js: one block per post; `projects: ['id', ...]` links it to one or more projects
- notifications.js: calls, deadlines, announcements (delete the SAMPLE entries before launch)
- translations.js: every button/menu/label, in `sq` and `en`
- site.js: contact details, menu order, carousel settings
- team.js: team members (hidden while empty)
- redirects.js: old WordPress URLs -> new routes

Every text field is `{ sq: '...', en: '...' }`. If `en` is empty the Albanian text is shown.
