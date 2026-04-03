# Closure Property

React + Vite demo testing closure under an operation for a chosen number set (e.g., integers) before/after combining operands. Rules and verdict UI are in `ClosureProperty.jsx`.

**Live site:** [https://content-interactives.github.io/closure_property](https://content-interactives.github.io/closure_property)

Curriculum alignment and placement: [Standards.md](Standards.md).

---

## Stack

| Layer | Notes |
|--------|--------|
| Build | Vite 6, `@vitejs/plugin-react` |
| UI | React 19 |
| Styling | Tailwind 3 |
| Icons | lucide-react |
| Deploy | `gh-pages -d dist`; `predeploy` runs `vite build` |

---

## Layout

```
vite.config.js          # base: '/closure_property/'
src/
  main.jsx → App.jsx → components/ClosureProperty.jsx
  components/ui/
```

---

## `vite.config.js`

`base: '/closure_property/'` must match the GitHub Pages repository path.

---

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |
| `npm run deploy` | Build and push `dist/` to `gh-pages` |

---

## Embedding

See `ClosureProperty.jsx` for result messaging and layout height.
