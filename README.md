# abel-marube.github.io

Personal portfolio. Static HTML styled with Tailwind CSS, deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev     # rebuilds assets/css/style.css on change
```

Open `index.html` in a browser (or run `npx serve .`).

## Build

```bash
npm run build   # minified CSS to assets/css/style.css
```

## Deploy

Pushes to `main` run `.github/workflows/deploy.yml`, which builds the CSS and publishes the site.
In the repo settings, set **Pages > Source** to **GitHub Actions** once.

The compiled `assets/css/style.css` is also committed, so the site works if Pages is set to
deploy from the branch instead.
