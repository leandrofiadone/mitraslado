# MiTraslado

Ride-hailing app for CABA / AMBA (Buenos Aires). Visual identity: **fileteado porteño** — traditional Argentine sign-painting with ornate flourishes, deep reds/greens/golds, italic serif type.

## Stack

- **Astro 6** (static, islands)
- **React 19** for interactive islands only (`client:*` directives)
- **TypeScript strict** — no `any`, explicit prop types
- **Tailwind v4** — CSS-first config via `@theme` in `src/styles/global.css`. **No `tailwind.config.mjs`** (v4 deprecated it for CSS config).
- **pnpm** package manager
- **Fonts**: `@fontsource/playfair-display` (titles, italic accents), `@fontsource/space-grotesk` (body)

## Design tokens

Colors (CSS vars + Tailwind theme tokens):

| Token | Hex | Role |
|---|---|---|
| `filete-rojo` | `#C8181E` | Primary red — buttons, accents, cenefas |
| `filete-verde` | `#1A6B2F` | Green cenefas, tags |
| `filete-dorado` | `#D4A017` | Gold — borders, italic emphasis, numerics |
| `filete-negro` | `#120E07` | Main background |
| `filete-ng2` | `#1C1609` | Elevated panels |
| `filete-ng3` | `#251D0B` | Deeper panels / map bg |
| `filete-crema` | `#FDF6E3` | Body text |
| `filete-terracota` | `#9B3A1A` | Secondary cenefa line |

Use as `bg-filete-rojo`, `text-filete-dorado`, etc.

## Type system

- `Playfair Display` (serif, 400/700/900 + italic) — `<h1>`, `<h2>`, stat numerics, brand mark
- `Space Grotesk` (sans, 300/400/500/600) — body, buttons, labels

Italic gold is THE signature move (`<em>` or `.italic text-filete-dorado`) — use sparingly for emphasis words.

## Components (`src/components/`)

- **`FileteBand.astro`** — horizontal ornamental SVG band (cenefa). Most important visual primitive. Props:
  - `variant: 'rojo' | 'verde' | 'dorado' | 'terracota'` — controls fill/stroke palette
  - `flip?: boolean` — mirrors waves vertically
  - Must stay faithful to SVG paths from `mitraslado_landing_filete.html`. Do not simplify curves.
- **`Hero.astro`** — left headline + right `PhoneMockup`
- **`Stats.astro`** — 3-col stat row, gold top/bottom borders
- **`Features.astro`** — 6 features in 3x2 grid, rhombus icons
- **`DriverSection.astro`** — 2-col driver CTA + earnings bars
- **`PhoneMockup.tsx`** — React island; SVG map + ride options

## Layout (`src/layouts/Layout.astro`)

- Loads `@fontsource` CSS for both families (specific weights only)
- Imports `global.css`
- Renders `<nav>` + `<slot />` + `<footer>`
- `lang="es"`, sets `dark` palette by default

## Reference file

`mitraslado_landing_filete.html` in project root = design source of truth. Keep SVG `<path d="...">` values verbatim when porting to `FileteBand`. Colors there use CSS vars (`--r`, `--d`, etc.) — map to the tokens above.

## Conventions

- No `any`. Props typed via `interface Props { ... }` at top of `.astro` frontmatter or `type Props = { ... }` for `.tsx`.
- Prefer Astro components (zero JS). Use `.tsx` only when the component needs state/effects — here: `PhoneMockup` if it becomes interactive (currently static, could stay `.astro`, but spec requests `.tsx`).
- Classes go on markup. No inline `style=""` except for dynamic values that can't be Tailwind.
- Commit style: Conventional Commits.

## Scripts

- `pnpm dev` — dev server
- `pnpm build` — static build
- `pnpm preview` — serve build
