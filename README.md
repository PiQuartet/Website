# Integrated Jekyll + Decap CMS

Your original HTML has been kept intact. We've added:
- Jekyll config (`_config.yml`)
- Events collection (`_events/`)
- An events listing page (`/events/`)
- Decap CMS at `/admin`

## Notes
- We prepended front matter to top-level HTML pages so Jekyll builds them. They use `layout: null` to keep your exact design.
- Editors can add events via `/admin` → "Events".
- To link the Events page from your nav, add a link to `/events/` in your existing HTML.

## Next step (optional)
If you want the homepage to auto-list upcoming events, we can inject a section into your `index.html` where you want it.
Tell me the exact spot (or add `<!-- EVENTS -->` comment where you want them), and I'll wire it up.

## Setup
1. Replace `YOURUSER/YOURREPO` in `static/admin/config.yml`.
2. Enable GitHub Pages (Settings → Pages → Source: main / root).
3. Visit `/admin` to add events. Push commits rebuild the site automatically.