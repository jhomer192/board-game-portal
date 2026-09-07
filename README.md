# Tabletop Portal

A single static site that catalogs board games you can play online and links out to the best existing implementation of each (Board Game Arena, netgames.io, codenames.game, colonist.io, …). No games are implemented here — it's a discovery and directory site.

- **Browse** (`/`): search + filter by category, player count, play time, complexity, free-only.
- **Discover** (`/discover`): pick categories, player count and how long you have; get shuffled suggestions, best-at-your-count first.
- **Game page** (`/games/:slug`): description, all places to play, recommended player counts, similar games.

Works on mobile and desktop browsers.

## Develop

```sh
npm install
npm run dev        # http://localhost:5173
npm run lint       # oxlint
npm run typecheck  # tsc -b
npm test           # vitest (catalog data + search tests)
npm run build      # static output in dist/ (includes 404.html SPA fallback)
```

## Adding a game

Edit `shared/catalog.ts` and append a `GameMeta` entry. Tests enforce unique slugs, `https://` links, sane player/time ranges and that `bestPlayers` fall within the player range. Please verify links are live before adding them.

## Stack

React 19 + TypeScript, Vite, Tailwind CSS v4. Client-only, no backend.
