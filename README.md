# React Second

This project showcases several small React tasks built with [Vite](https://vitejs.dev/). It demonstrates the use of React hooks (`useState`, `useEffect`) and a simple theme context for light/dark mode.

## Features

- **Theme toggle** – switch between light and dark themes.
- **Tabs interface** – navigate between different tasks.
- **Cookie clicker** – click a cookie image to increment a counter with optional reset.
- **Cat facts** – fetch random facts or lists of facts and breeds from [catfact.ninja](https://catfact.ninja/).
- **User list** – add and display users in local state.

## File structure

```
├── index.html          # entry point
├── package.json        # npm scripts and dependencies
├── src
│   ├── App.jsx         # main application component
│   ├── components/     # shared UI components (header, tabs, etc.)
│   ├── tasks/          # individual task components
│   └── themes/         # ThemeProvider context
└── public              # static assets
```

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start a development server with hot reload:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Tools used

- [React](https://react.dev/) 19
- [Vite](https://vitejs.dev/) for bundling and development
- [ESLint](https://eslint.org/) for linting

Feel free to explore the source to see how each feature is implemented!

