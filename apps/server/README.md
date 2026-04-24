# @apps/server

Backend application. Runs with `Bun.serve()` — no Express or other HTTP framework.

## Scripts

```bash
bun run dev       # watch mode (bun --watch)
bun run start     # production
bun run build     # compile to dist/ (target: bun)
bun run typecheck # tsc --noEmit
```

## Dependencies

- `@packages/shared` — shared utilities from the monorepo
