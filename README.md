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

Se la piattaforma usa `npx wrangler versions upload`, assicurati che i file statici
vengano caricati con l'opzione `--assets` oppure tramite `wrangler.toml`. Il progetto
include anche un comando di build in `wrangler.toml`, così l'upload può generare `dist/`
prima del deploy.

```bash
npm run build
npx wrangler versions upload --assets=./dist
```
