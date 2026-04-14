# Remarx Foundation

A modern, high-performance charity and non-profit platform built with Next.js, Tailwind CSS, and Framer Motion.

## Stack

- **Framework** — Next.js 15 (App Router)
- **Styling** — Tailwind CSS v4
- **Animations** — Framer Motion (`motion/react`)
- **Icons** — Lucide React
- **Language** — TypeScript

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, demos grid, features, shop, visual builder, included items, donation |
| `/demos` | Full demo showcase with one-click import |
| `/features` | Detailed feature breakdown |
| `/shop` | WooCommerce-style product shop |
| `/elementor` | Visual builder integration and widget library |
| `/plugins` | Compatible and bundled plugin directory |

## Getting Started

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the environment example and fill in your values:
   ```bash
   cp .env.example .env.local
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/        # Shared Navbar and Footer
├── demos/             # /demos page
├── features/          # /features page
├── shop/              # /shop page
├── elementor/         # /elementor page
├── plugins/           # /plugins page
├── layout.tsx         # Root layout with fonts and metadata
├── page.tsx           # Homepage
└── globals.css        # Global styles
```

## Color Palette

| Token | Hex | Role |
|---|---|---|
| Coral Red | `#f05a4f` | Primary CTA, logo, accents |
| Amber Yellow | `#fcc43d` | Labels, highlights, hover states |
| Teal | `#00c2a8` | Secondary CTA, success, badges |

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

## Contributing

Please read [CODE_OF_ETHICS.md](CODE_OF_ETHICS.md) before contributing. For security vulnerabilities, refer to [SECURITY.md](SECURITY.md).
