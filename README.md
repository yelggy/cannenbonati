# Carmen Annen Bonati Art — static mirror

Close visual-match static rebuild of [cannenbonati.ch](https://cannenbonati.ch) for GitHub Pages.

This is a mirrored static snapshot of the public WordPress / Elementor / Astra site (pages, CSS, JS, and media). It is intended for offline browsing and GitHub Pages hosting under `yelggy/cannenbonati`.

## Pages

- `/` — Home
- `/malerei-collagen/`
- `/installationen/`
- `/objekte/`
- `/kunst-am-bau/`
- `/kreiselgestaltung/`
- `/bilder-zu-kaufen/`
- `/biografie/`
- `/kontakt/`
- `/impressum/`
- `/datenschutzerklaerung/`

## Notes

- Contact form markup is preserved for visual match; form submission will not work on a static host (no WordPress backend). Use the published phone/email on the Kontakt page as a fallback.
- Some WordPress API / feed / xmlrpc links remain in the HTML head but are not required for viewing the site.
- Asset filenames may include a literal `%3Fver=…` segment (from wget offline conversion of cache-busting query strings).

## GitHub Pages

Served from the `main` branch root (`.nojekyll` is present so paths with underscores are not ignored by Jekyll).
