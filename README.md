# Weston Dean Music

Marketing site for Weston Dean, solo acoustic guitarist based in Mobile, Alabama. Booking integration runs through [The Stage Finder](https://thestagefinder.com).

Live: https://westondeanmusic.com

## Stack

- [Astro 4](https://astro.build) (static)
- [Tailwind CSS 3](https://tailwindcss.com)
- Deployed on Cloudflare Pages

## Develop

```sh
npm install
npm run dev    # http://localhost:4321
npm run build  # static output in dist/
```

## Project layout

```
src/
  layouts/
    Layout.astro       Base layout (head, fonts, JSON-LD, body shell)
    LegalLayout.astro  Wrapper for /privacy and /terms
  pages/
    index.astro        Home (hero, about, shows, setlist, booking)
    404.astro          Branded 404
    privacy.astro      Privacy policy
    terms.astro        Terms
public/
  logo.png             Wordmark, transparent PNG
  favicon.svg          SVG favicon
  favicon.png          PNG favicon (192px)
  og.jpg               Open Graph share image (1200x630)
  photos/              Performance photos (jpg + webp)
  venues/              Past-show venue logos and photos
raw/                   Local-only original assets (gitignored)
```

## Brand

Retro 70s "day session" sunset on cream. Caprasimo display + Inter body. See `tailwind.config.mjs` for the palette tokens (`sand`, `ink`, `sunset.*`).

## Updating shows

Edit `pastShows` and `upcomingShows` in `src/pages/index.astro`. Each entry takes:

```ts
{ monthShort: 'Jun', year: '2026', venue: 'Venue Name', city: 'City, AL', tilt: -1, asset: { src: '/venues/file.png', alt: '...', kind: 'logo' | 'photo' | 'svg' } }
```

When `upcomingShows` is empty, a "Your venue?" CTA card shows in its place automatically.
