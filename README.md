# TobiDev Portfolio

This is Raphael's existing React portfolio, converted from Create React App to Vite and restyled with a graphite-and-steel palette. Existing page copy, project links and screenshots, personal assets, and CV files are retained.

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

From this folder, install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

Open the local address printed by Vite in the terminal.

## Production build

```bash
npm run build
npm run preview
```

The production files are written to `dist/`.

## Routes

- `/` — Home
- `/about` — About, skills, tools, and GitHub activity
- `/project` — Projects
- `/resume` — CV viewer and download

The Resume page continues to display `CV1.pdf` and links its Download CV buttons to `CV2.pdf`.
