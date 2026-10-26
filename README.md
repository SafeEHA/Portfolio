# Safe's Portfolio

A personal portfolio website showcasing my work in **technical training, instructional design, and cloud/DevOps**. Built with React.

**Live site:** `https://safe-portfolio.surge.sh/` <!-- replace with your deployed URL -->

---

## About

This site brings together my background, skills, experience, certificates, projects, and writing in one place. It is a single-page React app where all content lives in simple data files, so updating it does not require touching the components.

## Sections

- **Home**: introduction and resume download
- **About**: who I am and what I do
- **Resume**: education, skills, experience, certificates, and projects
- **Blog**: articles and write-ups
- **Contacts**: contact details and a message form

## Tech Stack

- React (Create React App)
- Material UI (`@material-ui/core`, `@material-ui/icons`)
- React Router (`react-router-dom`, `react-router-hash-link`)
- EmailJS (`@emailjs/browser`) for the contact form
- Lottie animations (`react-lottie`), `react-reveal`, `react-slick`, `react-fast-marquee`
- Docker for containerised runs

## Getting Started

### Requirements

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/) (latest LTS recommended)

Check your versions:

```bash
node --version
git --version
```

### Run locally

```bash
# 1. Clone the repo
git clone https://github.com/SafeEHA/Portfolio.git
cd Portfolio

# 2. Install packages
npm install
# or: yarn install

# 3. Set up environment variables
cp .env.example .env
# then open .env and fill in your values

# 4. Start the dev server
npm start
# or: yarn start
```

The app opens at `http://localhost:3000`.

### Run with Docker

```bash
docker compose up --build
```

A `docker-compose.debug.yml` file is also included for debugging.

## Customising the Content

All personal content is stored in `src/data/`. Edit these files to update the site:

| File | What it controls |
| --- | --- |
| `headerData.js` | Name, title, description, profile image, resume PDF |
| `aboutData.js` | About section |
| `educationData.js` | Education history |
| `experienceData.js` | Work experience |
| `skillsData.js` | Skills list |
| `projectsData.js` | Projects |
| `blogData.js` | Blog posts and articles |
| `contactsData.js` | Contact details |
| `socialsData.js` | Social media links |
| `themeData.js` | Theme colours |

Example:

```js
export const headerData = {
  name: "Your Name",
  title: "Your Title",
  desciption: "A short intro about you.",
  image: profileImg,
  resumePdf: resume,
};
```

Note: the key is spelled `desciption` in the template code, so keep that spelling.

To change the font, edit `src/App.css`.

## Project Structure

```
public/            Static files (index.html, favicons, manifest)
src/
├── assets/        Fonts, Lottie animations, SVGs
├── components/    UI sections (About, Blog, Contacts, Education, etc.)
├── contexts/      Theme context
├── data/          Your content (edit these)
├── pages/         Home, Blog, and Project pages
├── theme/         Theme and image setup
└── utils/         Helpers
```

## SEO

To improve search and social previews, add your site details (description, Open Graph, and Twitter tags) to `public/index.html`.

## Deployment

This is a standard React build, so it can be hosted on:

- [Surge](https://safe-portfolio.surge.sh/)


Build for production with:

```bash
npm run build
```

The output is in the `build/` folder.

## Credits

This project is a fork of [said7388/developer-portfolio](https://github.com/said7388/developer-portfolio), customised with my own content. Thanks to the original authors for the template.

Icons from [Material Icons](https://material-ui.com/components/material-icons/) and [React Icons](https://react-icons.github.io/react-icons/). Fonts: Poppins, Montserrat, Raleway, Big Shoulders Text, Roboto, and Bestermind.

## License

Released under the [MIT License](LICENSE).

## Contact

- GitHub: [@SafeEHA](https://github.com/SafeEHA)
- Email / LinkedIn: add your links here