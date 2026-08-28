# Modern Site

Clean, minimal, high-performance static website base.
Plain HTML + Tailwind CSS v4 · no framework · no webfonts.
Design system: slate, crisp white, deep emerald. Strictly no purple.

## Quickstart

```bash
npm install
npm run build     # src/input.css -> dist/output.css (minified)
npm run watch     # rebuild on change
python3 -m http.server 8000   # preview at http://localhost:8000
```

## OpenCode

Model is pinned to DeepSeek V4 Flash (free) in `opencode.json` — no
`--model` flag needed, no silent fallback:

```bash
cd ~/modern-site
opencode
```

## Layout

```
index.html            Entry point (markup)
src/input.css         Tailwind v4 entry + design tokens + purple guardrail
src/assets/js/        Vanilla JS
src/assets/img/       Local images
dist/                 Generated build output (never edit)
style-guide.md        Design contract for AI agents
AGENTS.md             Agent instructions
opencode.json         Model pin
```