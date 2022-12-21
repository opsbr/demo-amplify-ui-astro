# demo-amplify-ui-astro

This repository is for reproducing an issue of Amplify UI with Astro.

## Reproduce

Clone this repository and run `npm run build`:

```
node ➜ /workspaces/demo-amplify-ui-astro (main) $ npm run build

> @example/basics@0.0.1 build
> astro build

08:22:28 AM [build] output target: static
08:22:28 AM [build] Collecting build info...
08:22:28 AM [build] Completed in 9ms.
08:22:28 AM [build] Building static entrypoints...
08:22:29 AM [build] Completed in 528ms.

 building client
Completed in 492ms.


 generating static routes
 error   Named export 'withAuthenticator' not found. The requested module '@aws-amplify/ui-react' is a CommonJS module, which may not support all module.exports as named exports.
  CommonJS modules can always be imported via the default export, for example using:

  import pkg from '@aws-amplify/ui-react';
  const { withAuthenticator } = pkg;

  File:
    /workspaces/demo-amplify-ui-astro/node_modules/astro/dist/core/build/generate.js:61:20
  Code:
    60 |   const ssrEntryURL = new URL("./" + serverEntry + `?time=${Date.now()}`, outFolder);
    > 61 |   const ssrEntry = await import(ssrEntryURL.toString());
         |                    ^
      62 |   const builtPaths = /* @__PURE__ */ new Set();
      63 |   if (opts.settings.config.experimental.prerender && opts.settings.config.output === "server") {
      64 |     for (const pageData of eachPrerenderedPageData(internals)) {
  Stacktrace:
file:///workspaces/demo-amplify-ui-astro/dist/entry.mjs?time=1671610949862:4
/* empty css                                 */import { withAuthenticator } from '@aws-amplify/ui-react';
                                                        ^^^^^^^^^^^^^^^^^
SyntaxError: Named export 'withAuthenticator' not found. The requested module '@aws-amplify/ui-react' is a CommonJS module, which may not support all module.exports as named exports.
CommonJS modules can always be imported via the default export, for example using:

import pkg from '@aws-amplify/ui-react';
const { withAuthenticator } = pkg;

    at ModuleJob._instantiate (node:internal/modules/esm/module_job:123:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:189:5)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:530:24)
    at async generatePages (file:///workspaces/demo-amplify-ui-astro/node_modules/astro/dist/core/build/generate.js:61:20)
    at async staticBuild (file:///workspaces/demo-amplify-ui-astro/node_modules/astro/dist/core/build/static-build.js:68:7)
    at async AstroBuilder.build (file:///workspaces/demo-amplify-ui-astro/node_modules/astro/dist/core/build/index.js:86:5)
    at async AstroBuilder.run (file:///workspaces/demo-amplify-ui-astro/node_modules/astro/dist/core/build/index.js:127:7)
    at async build (file:///workspaces/demo-amplify-ui-astro/node_modules/astro/dist/core/build/index.js:21:3)
    at async runCommand (file:///workspaces/demo-amplify-ui-astro/node_modules/astro/dist/cli/index.js:150:14)
    at async cli (file:///workspaces/demo-amplify-ui-astro/node_modules/astro/dist/cli/index.js:168:5)
```
