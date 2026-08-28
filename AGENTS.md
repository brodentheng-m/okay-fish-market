# AGENTS.md — instructions for AI coding agents (OpenCode, etc.)

## Project

Clean, minimal, high-performance static website. Plain HTML + Tailwind CSS v4
(no framework). Entry point: `index.html`. Styling source of truth:
`src/input.css`. Build output (generated): `dist/output.css`.

## STRICT DESIGN RULE

Never generate purple gradients or use purple/indigo utility classes.
Adhere strictly to the defined minimalist color scheme.

Palette: crisp whites (`white`), slate grays (`slate-*`), deep emerald green
accents (`emerald-*`). Full rules in `style-guide.md` — read it before any
styling work.

Note: `purple-*`/`violet-*` utilities are remapped to emerald and `indigo-*`
to slate at the CSS layer, so they render on-palette even if used — but do
not rely on that. Write slate/emerald classes directly.

## Commands

- `npm run build` — compile `src/input.css` → `dist/output.css` (minified)
- `npm run watch` — rebuild on change
- Preview: `python3 -m http.server 8000` (or `npx serve .`) from repo root

## File map

- `index.html` — page markup (edit freely, keep semantic HTML)
- `src/input.css` — Tailwind v4 entry + design tokens + guardrail remaps
- `src/assets/js/main.js` — vanilla JS (mobile nav, auto year)
- `src/assets/img/` — local images (svg/png/webp)
- `dist/` — GENERATED, never edit by hand; committed for GitHub Pages branch deploy
- `style-guide.md` — design contract (palette, gradients, typography)
- `opencode.json` — model pin (opencode-go/deepseek-v4-flash — do not change)

## Rules of thumb

- Utility-first Tailwind classes; don't add custom CSS unless a token is missing.
- Mobile-first; system font stack; `shadow-sm` max; `rounded-lg/xl/2xl`.
- Keep it fast: no frameworks, no webfonts, no heavy deps.