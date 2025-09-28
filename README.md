# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern
static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to
build the website and push to the `gh-pages` branch.

## Developer notes

This project uses Docusaurus + TypeScript. A few useful developer commands:

- Install dependencies

```bash
yarn install --inline-builds
```

- Run local dev server

```bash
yarn start
```

- Build static site

```bash
yarn build
```

- Run TypeScript typecheck

```bash
yarn typecheck
```

### Common TypeScript issue: React / @types/react mismatch

If you see errors like "'Link' cannot be used as a JSX component" or other
errors that reference `node_modules/.../@types/react`, this usually means there
are multiple copies or incompatible versions of `@types/react` in the dependency
tree.

How to fix (what we applied in this repo):

1. Ensure top-level `package.json` uses React 18 and matching `@types/react`.
2. Use Yarn overrides to pin a single version across the tree (already in this
   repo):

```json
"overrides": {
	"react": "18.3.1",
	"react-dom": "18.3.1",
	"@types/react": "18.3.24"
}
```

3. Reinstall dependencies to hoist the chosen versions:

```bash
rm -rf node_modules .yarn/cache
yarn install --inline-builds
```

4. If you still see nested `@types/react` in some package, you can:

- temporarily set `skipLibCheck: true` in `tsconfig.json` (done here) to avoid
  noise from library types;
- or use `patch-package` to remove or align nested type packages;
- or contact the dependency maintainer if they ship incompatible embedded type
  definitions.

Notes in this repo:

- `tsconfig.json` contains `skipLibCheck: true` and `@site/*` path mapping to
  make local imports resolve correctly for Docusaurus.
- We keep React at v18 + matching @types; avoid upgrading to React 19 unless all
  major deps (Docusaurus and others) support it.

If you want, I can create a short CONTRIBUTING.md with these steps and CI
typecheck instructions.
