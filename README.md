# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Running

To run in debug mode (dev server with HMR):
```
cd "c:/Users/Azam/Desktop/Dynamic/website" && npm run dev
```

To build and preview the production build locally:
```
npm run build
npx serve -s dist
```

## Deployment

This site is deployed to GitHub Pages via the `gh-pages` package, published at https://sm2irfan.github.io/website.

To deploy the latest build:
```
npm run deploy
```

This runs `predeploy` (`npm run build`) automatically, then pushes the contents of `dist` to the `gh-pages` branch.

### Preview deployments (from any branch)

To let someone preview a branch's changes without touching the live production site, publish that build to a `preview` subfolder instead of the branch root.

**PowerShell** (Windows default terminal):
```powershell
# from the branch you want to preview
if (Test-Path dist) { Remove-Item -Recurse -Force dist }
npx tsc -b
npx vite build --base=/website/preview/
node -e "require('fs').copyFileSync('dist/index.html','dist/404.html')"
npx gh-pages -d dist --dest preview --add -m "Deploy preview"
Remove-Item -Recurse -Force dist
```

**bash** (Git Bash / macOS / Linux):
```bash
# from the branch you want to preview
rm -rf dist
npx tsc -b
MSYS_NO_PATHCONV=1 npx vite build --base=/website/preview/
node -e "require('fs').copyFileSync('dist/index.html','dist/404.html')"
npx gh-pages -d dist --dest preview --add -m "Deploy preview"
rm -rf dist
```

- `--base=/website/preview/` rebuilds the app so its asset/router paths resolve under the preview path instead of the site root. `MSYS_NO_PATHCONV=1` is only needed in the bash version on Windows Git Bash, which otherwise mangles the leading `/` into a local filesystem path — PowerShell doesn't have this problem, so don't add it there.
- `--dest preview` tells `gh-pages` to publish into a `preview/` folder within the `gh-pages` branch instead of its root.
- `--add` guarantees existing files outside `preview/` (i.e. the live production build) are never removed, even if `dest` were ever misconfigured.

This publishes to **https://sm2irfan.github.io/website/preview/**, while production stays at **https://sm2irfan.github.io/website/** and is unaffected.

Because this is a client-side-routed SPA, only the preview root is guaranteed to load on a hard refresh or direct link — GitHub Pages only supports one site-wide `404.html` fallback (owned by production), so a deep link like `/website/preview/about` will 404 if opened directly. Share the preview root link and navigate from there; in-app links work normally once you've landed on it.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
