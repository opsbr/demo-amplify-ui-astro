import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ["@aws-amplify/*", "@radix-ui/*"],
    },
    resolve: {
      alias: {
        "./runtimeConfig": "./runtimeConfig.browser",
      },
    },
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
