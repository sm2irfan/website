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

### Deploying to https://sm2irfan.github.io/website/newdesign/

Same idea as `deploy`, but builds with the right base path and publishes into a `newdesign` subfolder instead of the branch root, so it doesn't touch production:

```
npm run deploy:newdesign
```

This runs `predeploy:newdesign` (`npm run build:newdesign`, which builds with `--base=/website/newdesign/`) automatically, then publishes `dist` into the `newdesign/` folder of the `gh-pages` branch — production at the root is untouched.

### Preview deployments (from any branch)

To let someone preview a branch's changes without touching the live production site, publish that build to a `preview` subfolder instead of the branch root.

**PowerShell** (Windows default terminal):
```powershell
# from the branch you want to preview
if (Test-Path dist) { Remove-Item -Recurse -Force dist }
npx tsc -b
npx vite build --base=/website/preview/
npx gh-pages -d dist --dest preview --add -m "Deploy preview"
Remove-Item -Recurse -Force dist
```

**bash** (Git Bash / macOS / Linux):
```bash
# from the branch you want to preview
rm -rf dist
npx tsc -b
MSYS_NO_PATHCONV=1 npx vite build --base=/website/preview/
npx gh-pages -d dist --dest preview --add -m "Deploy preview"
rm -rf dist
```

- `--base=/website/preview/` rebuilds the app so its asset/router paths resolve under the preview path instead of the site root. `MSYS_NO_PATHCONV=1` is only needed in the bash version on Windows Git Bash, which otherwise mangles the leading `/` into a local filesystem path — PowerShell doesn't have this problem, so don't add it there.
- `public/404.html` is copied into `dist/404.html` automatically by Vite on every build — don't recreate it manually (a plain copy of `index.html` would overwrite the working SPA-fallback trick described below and reintroduce broken deep links).
- `--dest preview` tells `gh-pages` to publish into a `preview/` folder within the `gh-pages` branch instead of its root.
- `--add` guarantees existing files outside `preview/` (i.e. the live production build) are never removed, even if `dest` were ever misconfigured.

This publishes to **https://sm2irfan.github.io/website/preview/**, while production stays at **https://sm2irfan.github.io/website/** and is unaffected.

`public/404.html` makes deep links work correctly even on a hard reload: GitHub Pages only supports one site-wide 404 fallback, so it inspects the requested path, fetches the *correct* app's real `index.html` (production's or preview's, chosen by the `/preview/` prefix), and swaps it into the page in place — the URL never changes, so whichever app loads reads the exact path that was requested.

### Removing the preview deployment

To take down https://sm2irfan.github.io/website/preview/ entirely, delete the `preview/` folder from the `gh-pages` branch directly — there's no dedicated `gh-pages` CLI command for this, so it's done with a throwaway git worktree instead of disturbing your current branch.

**PowerShell**:
```powershell
git fetch origin gh-pages
git worktree add ../ghpages-tmp gh-pages
Remove-Item -Recurse -Force ../ghpages-tmp/preview
Push-Location ../ghpages-tmp
git add -A
git commit -m "Remove preview deployment"
git push origin gh-pages
Pop-Location
git worktree remove ../ghpages-tmp
git branch -d gh-pages
```

**bash**:
```bash
git fetch origin gh-pages
git worktree add ../ghpages-tmp gh-pages
rm -rf ../ghpages-tmp/preview
(cd ../ghpages-tmp && git add -A && git commit -m "Remove preview deployment" && git push origin gh-pages)
git worktree remove ../ghpages-tmp
git branch -d gh-pages
```

This only removes the `preview/` folder — production at the branch root (index.html, assets, the shared 404.html) is untouched. The temporary `ghpages-tmp` worktree and local `gh-pages` branch pointer are cleaned up at the end; nothing is left behind in your working directory.

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




cd "c:/Users/Azam/Desktop/Dynamic/website" && npm run deploy:newdesign 2>&1

cd "c:/Users/Azam/Desktop/Dynamic/website" && npx gh-pages -d dist --dest newdesign --add -m "Deploy newdesign preview" 2>&1

