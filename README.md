# Progressive Women's Health

Astro + React (islands) + Tailwind CSS v4 + Framer Motion.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

## Structure
- `src/pages` – routes (Astro)
- `src/layouts` – page shell
- `src/components/*.astro` – static components (no JS shipped)
- `src/components/react` – interactive islands (use `client:load` / `client:visible`)
- `src/data/site.ts` – site name, nav, services
- `src/styles/global.css` – Tailwind import + brand theme
