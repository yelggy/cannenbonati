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

## Contact form

The Kontakt page form posts to [FormSubmit](https://formsubmit.co) (`formsubmit.co/brannen@bluewin.ch`). On the **first** submission, FormSubmit emails `brannen@bluewin.ch` asking to confirm the endpoint; after that confirmation, further submissions are forwarded as normal contact emails. reCAPTCHA stays enabled for spam protection. Success redirects to `/kontakt/danke.html`.

## Notes

- Some WordPress API / feed / xmlrpc links remain in the HTML head but are not required for viewing the site.
- Asset filenames may include a literal `--q--ver=…` segment (from wget offline conversion of cache-busting query strings).

## GitHub Pages

Served from the `main` branch root (`.nojekyll` is present so paths with underscores are not ignored by Jekyll).
