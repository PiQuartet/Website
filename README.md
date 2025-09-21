

## Pages CMS + MDX
Markdown/MDX in `content/pages/` becomes routes at `/<slug>/`.
- Frontmatter fields: `title`, `slug`
- Edit via Pages CMS → commits to repo.

### Install deps
```bash
npm install
# if needed explicitly:
# npm install gatsby-plugin-mdx gatsby-source-filesystem @mdx-js/react @mdx-js/mdx
```


## Global font: Mulish
This project is preconfigured to use **Mulish** site-wide.
- Installed via `@fontsource-variable/mulish`
- Imported once in `gatsby-browser.js`
- Applied in `src/styles/global.css` using CSS variable `--font-sans`.

### Install & run
```bash
npm install
npm run develop
```

If `@fontsource-variable/mulish` is unavailable in your environment, you can switch to the static family:
```js
// gatsby-browser.js
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/700.css";
```
and keep the same `font-family` in `global.css`.


## Custom domain
This build is configured for **https://www.piquartet.nl**:
- `gatsby-config.js` has `isProjectPage = false` and `siteUrl` set to the custom domain.
- A `static/CNAME` file is included so GitHub Pages keeps the domain.
