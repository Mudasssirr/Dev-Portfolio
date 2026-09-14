# Mudassir Awan — Developer Portfolio

A dark, IDE-themed portfolio built with React + Vite + Tailwind CSS, Framer Motion, Typed.js, a vertical experience timeline, and a project carousel.

## Commands

```bash
npm install      # install dependencies
npm run dev       # start dev server (http://localhost:5173)
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
├── data/portfolioData.js   # single source of truth — see below
├── components/             # Navbar, Hero, Skills, ExperienceTimeline,
│                            # ProjectCarousel, Education, Contact, Footer
└── App.jsx                 # assembles the sections
public/
└── Mudassir_Awan_Resume.pdf  # served by the "Download CV" buttons
```

## How to update content

Everything on the page — name, roles, summary, contact links, skills, experience, projects, education — is read from **`src/data/portfolioData.js`**. Edit that file only; no component/JSX changes are needed for content updates.

- **Resume/CV**: replace `public/Mudassir_Awan_Resume.pdf` with a new file of the same name (or update `personalInfo.resumeUrl` if you rename it).
- **Add/remove a project**: add or remove an object in the `projects` array. Each project's `link` (live demo) and `repo` (source code) fields are optional — the carousel only renders a "Live" or "Source" button when that field is present.
- **Add/remove a job**: edit the `experience` array — it feeds the vertical timeline automatically.
- **Add/remove a skill**: edit `skillCategories` — pick an existing `react-icons` icon and add it to the relevant category.
- **Contact/social links**: edit `contactInfo` and `socialLinks`.

## Tech stack

React 19 · Vite 8 · Tailwind CSS v4 · Framer Motion · Typed.js · react-vertical-timeline-component · react-slick · react-icons
