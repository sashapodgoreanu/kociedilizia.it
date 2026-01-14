# KO.CI Edilizia — Portfolio

Sito vetrina in italiano per una impresa edile con sede a Grosseto.

## Requisiti

- Node.js 18+ (consigliato 20 LTS)
- npm

## Avvio in locale

```bash
npm install
npm run dev -- --host 0.0.0.0 --port 5173
```

## Build di produzione

```bash
npm run build
```

L'output della build viene generato in `dist/`.

## Deploy su Cloudflare Pages

Impostazioni consigliate:

- **Framework preset**: `None`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (assicurati che sia la root del repo, altrimenti `package.json` non viene trovato)

Se vuoi fare il deploy manuale con Wrangler:

```bash
npm run build
npx wrangler pages deploy dist
```
