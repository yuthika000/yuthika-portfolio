# M.S. Yuthika — Portfolio

Personal portfolio built with React + Vite.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Edit content

Everything on the page (name, internships, projects, skills, links) comes from **`src/data.js`**. Change it there — no need to touch the components.

- Add a deployed project link: set `live: 'https://...'` on a project.
- Point each project to its own repo: change its `github` URL.
- Update the resume: replace `public/MS_Yuthika_Resume.pdf`.

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## Deploy

**Vercel:** import the GitHub repo → framework preset "Vite" → deploy.
**Render (static site):** build command `npm install && npm run build`, publish directory `dist`.
**GitHub Pages:** set `base: '/<repo-name>/'` in `vite.config.js`, build, and publish `dist/`.
