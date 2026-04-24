# @apps/client

Frontend application. Uses `Bun.serve()` with HTML imports — no Vite or other bundler.

HTML files can directly import `.tsx`/`.jsx`/`.css`; Bun's bundler handles transpilation automatically. Run with `bun --hot` for HMR.

## Scripts

```bash
bun run dev       # watch mode (bun --watch)
bun run start     # production
bun run build     # bundle to dist/ (target: browser)
bun run typecheck # tsc --noEmit
```

## Dependencies

- `@packages/shared` — shared utilities from the monorepo
