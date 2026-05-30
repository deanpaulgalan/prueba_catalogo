# Future Store · Marketing Website UI kit

A reference implementation of `futurestore.com` — the marketing & e-commerce home for Future Store. The live site was not shared, so this is a **brand-faithful interpretation** built from the brandbook (esp. §5.1 "Redes sociales y medios digitales"), not a 1:1 mirror.

## What's here

| File | Surface |
| --- | --- |
| `index.html` | Composes all sections into one scrollable landing page. Open this to see the kit in use. |
| `Header.jsx` | Sticky top nav with logo, primary nav, search and cart. Transparent over the hero, blurred-white after scroll. |
| `Hero.jsx` | Full-bleed brand-blue hero with the touch-ripple motif and the "Elige el cambio" headline. |
| `Categories.jsx` | Sky-tinted section of clickable category orbs (Iluminación, Seguridad, Audio, Climatización…). |
| `ProductCard.jsx` + `ProductGrid.jsx` | Pill-bordered product cards with orb hero images, add-to-cart interaction. |
| `InstallSection.jsx` | The "Instalación incluida" promo with photo + bullet list + CTA. |
| `Newsletter.jsx` | "Elige el cambio" email capture. |
| `Footer.jsx` | Address, social, sitemap. |

## Interactivity

Open `index.html`:

- Click any product card's "Añadir" button — the cart badge in the header increments and a toast confirms.
- Click a category orb — the page scrolls to the product grid and highlights matching items.
- Type into the header search — products filter live.
- The newsletter form accepts an email and swaps to a "¡Gracias!" state.

Everything is mocked client-side; no real backend.

## Stack

React 18 inline JSX via Babel standalone, no bundler. Brand tokens come from `../../colors_and_type.css`. Utility icons via Lucide CDN.
