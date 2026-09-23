# Carmen Annen Bonati Art — static site

Clean static rebuild of [cannenbonati.ch](https://cannenbonati.ch) for GitHub Pages (`yelggy/cannenbonati`).

## Pages

- `/` — Home
- `/malerei-collagen/`, `/installationen/`, `/objekte/`, `/kunst-am-bau/`, `/kreiselgestaltung/`
- `/bilder-zu-kaufen/`
- `/biografie/`
- `/kontakt/` → FormSubmit → `/kontakt/danke/`
- `/impressum/`, `/datenschutzerklaerung/`

## Contact form

Posts to [FormSubmit](https://formsubmit.co) (`brannen@bluewin.ch`). Success redirects to `https://cannenbonati.ch/kontakt/danke/` (pretty URL; `/kontakt/danke.html` redirects there).

## Stack

Shared chrome in `assets/site.css` + `assets/site.js`. Media remains under `wp-content/uploads/`. Brand: gold `#b69d78`, near-black `#19150f`, magenta logo accent.

## GitHub Pages

`main` (or preview branches) at repo root. `.nojekyll` and `CNAME` (`cannenbonati.ch`) are present.
