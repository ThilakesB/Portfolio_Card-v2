# Portfolio Card — Thilakeswaran B

A modern, editorial-style personal portfolio card built with **React 19**, **Vite 8**, and **Tailwind CSS v4**. Designed with a dual-panel split layout, responsive typography, fluid container queries, and seamless GitHub Pages deployment via GitHub Actions.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://thilakesb.github.io/Portfolio_Card-v2/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

---

## 🌐 Live Website

- **Production URL**: [https://thilakesb.github.io/Portfolio_Card-v2/](https://thilakesb.github.io/Portfolio_Card-v2/)

---

## ✨ Features

- **Editorial Split Layout**: Two-column layout pairing a clean, high-contrast profile card on the left with an expansive about & action section on the right.
- **Fluid Typography**: Uses CSS container queries (`cqi`) and responsive `clamp()` to scale typography smoothly across smartphones, tablets, laptops, and ultra-wide displays without awkward line breaks.
- **Verified Brand Vectors**: Pixel-perfect vector icons for GitHub, LinkedIn, Instagram, and Email matching Lucide line-stroke aesthetics.
- **Direct Resume Download**: Integrated resume download action referencing local assets with relative base URL awareness.
- **Automated CI/CD**: Fully configured GitHub Actions workflow (`deploy.yml`) that builds and publishes production bundles directly to GitHub Pages on every push.
- **Fast Build System**: Powered by Vite 8 with instant Hot Module Replacement (HMR).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Modern CSS with Container Queries
- **Typography**: [DM Sans](https://fonts.google.com/specimen/DM+Sans) & [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Brand Icons
- **Deployment**: [GitHub Pages](https://pages.github.com/) with GitHub Actions

---

## 📂 Project Structure

```text
Portfolio_Card/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment to GitHub Pages
├── public/
│   ├── Favicon.png             # Site favicon (PNG)
│   ├── favicon.ico             # Standard browser favicon
│   ├── profile.png             # Portrait image
│   └── Thilakeswaran-B-Resume.pdf # Downloadable resume
├── src/
│   ├── main.jsx                # Core React components & layout
│   └── styles.css              # Custom styling, fonts, and responsive rules
├── index.html                  # HTML entry point with meta tags & favicon
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite configuration with relative base path
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

```bash
node -v
npm -v
```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ThilakesB/Portfolio_Card-v2.git
   cd Portfolio_Card-v2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser at:
   ```text
   http://localhost:5173/
   ```

---

## 📦 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the Vite development server with Hot Module Reloading. |
| `npm run build` | Compiles the production-ready bundle into the `dist/` directory. |
| `npm run preview` | Locally previews the production build. |

---

## 🚀 Deployment to GitHub Pages

This project is configured with GitHub Actions for automated deployment.

1. In your GitHub repository, navigate to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
4. GitHub Actions will automatically run the build and deploy the updated site to `https://thilakesb.github.io/Portfolio_Card-v2/`.

---

## 👤 Author

**Thilakeswaran B**
- **GitHub**: [@ThilakesB](https://github.com/ThilakesB)
- **LinkedIn**: [Thilakeswaran B](https://www.linkedin.com/in/thilakeswaran-b-50b431280/)
- **Instagram**: [@thilak.x](https://www.instagram.com/thilak.x/?hl=en)
- **Email**: [thilakesb@gmail.com](mailto:thilakesb@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
