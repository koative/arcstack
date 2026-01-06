# Bun Monorepo Template

A minimal monorepo template using Bun workspaces.

## Structure

```
├── apps/
│   ├── server/    # Backend application
│   └── client/    # Frontend application
└── packages/
    └── shared/    # Shared utilities
```

## Getting Started

```bash
bun install
```

## Run Apps

```bash
bun run --filter @apps/server start
bun run --filter @apps/client start
```

## Add Dependencies

```bash
# Root
bun add -d <package>

# Specific workspace
bun add --filter @apps/server <package>
```
