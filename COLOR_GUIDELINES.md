# Color Guidelines

This document defines the color system used across Remarx Foundation. All colors are applied via Tailwind CSS arbitrary values using the tokens below.

---

## Primary Palette

These three colors form the core visual identity of the platform. Use them consistently across all pages.

| Name | Hex | Tailwind Class | Role |
|---|---|---|---|
| **Coral Red** | `#f05a4f` | `bg-[#f05a4f]` / `text-[#f05a4f]` | Primary CTA buttons, logo badge, hero accents, stats bars |
| **Amber Yellow** | `#fcc43d` | `bg-[#fcc43d]` / `text-[#fcc43d]` | Labels, serif italic highlights, hover fills, floating buy button |
| **Teal** | `#00c2a8` | `bg-[#00c2a8]` / `text-[#00c2a8]` | Secondary CTAs, "Included" badges, check icons, success states |

---

## Hover / Pressed Variants

Use these as the `hover:` state of their parent color. Do not use them as base colors.

| Base | Hover Hex | Tailwind Class |
|---|---|---|
| Coral Red | `#d94e44` | `hover:bg-[#d94e44]` |
| Amber Yellow | `#eeb42d` | `hover:bg-[#eeb42d]` |
| Teal | `#00a892` | `hover:bg-[#00a892]` |

---

## Background Colors

| Name | Value | Usage |
|---|---|---|
| Near-black | `gray-950` | Dark hero sections, dark CTA strips |
| Dark gray | `gray-900` | Alternative dark backgrounds, product overlay |
| Light gray | `gray-50` | Alternating section backgrounds, cards |
| White | `white` | Primary page and card backgrounds |
| Warm brown | `#8b5a2b` | Shop section hero only |
| Navy dark | `#1a1a2e` | Elementor page hero only |
| Gold muted | `#d4b445` | Business card block accent (homepage) |

---

## Text Colors

| Context | Color | Tailwind Class |
|---|---|---|
| Body on dark background | White 80% | `text-white/80` |
| Body on light background | Medium gray | `text-gray-500` |
| Headings on light | Near-black | `text-gray-800` or `text-black` |
| Muted / meta text | Light gray | `text-gray-400` |
| Accent serif headline | Amber Yellow | `text-[#fcc43d]` |
| Primary link / icon hover | Coral Red | `text-[#f05a4f]` |

---

## Opacity Utilities

Use Tailwind opacity modifiers for overlay and ghost treatments:

| Usage | Example |
|---|---|
| Section background tint | `bg-[#f05a4f]/10` (10% fill for badge backgrounds) |
| Overlay on images | `bg-black/30` – `bg-black/50` |
| Ghost border | `border-[#fcc43d]/20` |
| Radial gradient glow | `bg-[radial-gradient(ellipse_at_top,_#f05a4f22_0%,_transparent_60%)]` |

---

## Third-Party Plugin Colors

Used exclusively on the `/plugins` page for plugin brand identity icons. Do not use elsewhere.

| Plugin | Hex |
|---|---|
| WooCommerce | `#96588a` |
| Elementor | `#e2072b` |
| WPML | `#0085ba` |
| Yoast SEO | `#a4286a` |
| Wordfence | `#00b9eb` |
| GiveWP | `#f05a4f` (inherits Coral Red) |

---

## Usage Rules

1. **CTAs always use a primary color** — never gray or black for main action buttons.
2. **Coral Red is the strongest signal** — reserve it for the single most important action per page (Buy Now, Submit, etc.).
3. **Amber Yellow pairs with dark/black text only** — never white text on yellow; contrast is insufficient.
4. **Teal is for confirmation and secondary actions** — use it when the user has already committed (Added to cart, Included, Verified).
5. **Dark sections use `gray-950`** — avoid pure `#000000` backgrounds; it feels harsh next to the warm palette.
6. **Don't mix more than two primary colors in a single section** — pick one as the dominant accent per section.
7. **Gradients and glows** — use `12`–`22` hex alpha (e.g. `#f05a4f22`) for subtle radial highlights; avoid heavy gradients that compete with content.
