# 🧑‍💻 Bananas 3D — Modern 3D Printing SPA

Landing page and showcase application built with Angular 19 and Tailwind CSS. It provides a responsive hero section, a design carousel and simple components to request project quotes.

## 🗒️ Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Architecture & Technical Decisions](#architecture--technical-decisions)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [Best Practices & Conventions](#best-practices--conventions)
- [Contributing](#contributing)
- [License](#license)

## Project Overview
Bananas 3D is a modular Single Page Application that presents the services of a 3D printing company. It features a hero section, a carousel of sample designs and reusable UI components. The project focuses on clean structure and modern responsive design using Tailwind CSS.

## Tech Stack
- **Angular 19** 🌟 — Framework for building single page applications.
- **TypeScript** 🔵 — Static typing for maintainable code.
- **Tailwind CSS** 🌈 — Utility‑first styling.
- **FontAwesome** ★ — Icon library used throughout the UI.
- **RxJS** 🔁 — Reactive utilities bundled with Angular.
- **Jasmine/Karma** 🧨 — Unit testing environment.

## Architecture & Technical Decisions
- **Modules and components** organized under `src/app` to keep features isolated.
- **Signal-based components** keep local state minimal and reactive.
- **FontAwesome integration** centralized in `icons.config.ts` for easy maintenance.
- **Tailwind** enabled via PostCSS for consistent styling without custom configuration.
- **Strict TypeScript** settings enforce safer code.

## Installation & Setup
Make sure you have Node.js 20.x installed.

```bash
git clone <repo-url>
cd bananas-3d
npm install

# Start local development server
npm start
# or
ng serve

# App runs on http://localhost:4200

# Run unit tests
npm test
```

## Project Structure
```
src/
├── app/
│   ├── app.component.ts       # Root component
│   ├── app.routes.ts          # Routes configuration
│   ├── app.config.ts          # Angular providers
│   ├── icons.config.ts        # FontAwesome icon setup
│   ├── modules/               # Feature modules
│   │   └── landing/           # Landing page components
│   └── shared/                # Reusable components and models
├── index.html                 # App entry point
├── main.ts                    # Bootstrap logic
└── styles.css                 # Global styles (Tailwind)
```

## Best Practices & Conventions
- Semantic commit messages for clarity.
- Small, functional components with strict typing.
- Utility-first styling via Tailwind classes.
- Keep shared UI elements under `src/app/shared` for reuse.

## Contributing
1. Fork the repository and create a feature branch.
2. Write your code and add tests if applicable.
3. Make sure the app builds and `npm test` runs without errors.
4. Open a Pull Request describing your changes.

All contributions are welcome!

## License
This project is licensed under the [MIT License](LICENSE).

