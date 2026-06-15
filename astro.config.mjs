// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Two env vars drive host-portability so phase-1 (GitHub Pages) → phase-2 (custom host on haivino.ro) is a one-line change:
//   SITE       full public origin, e.g. https://username.github.io  or  https://haivino.ro
//   BASE_PATH  URL prefix, e.g. /haivino-site/  or  /
// Defaults are safe for local dev.
const SITE = process.env.SITE || "http://localhost:4321";
const BASE_PATH = process.env.BASE_PATH || "/";

export default defineConfig({
  site: SITE,
  base: BASE_PATH,
  trailingSlash: "ignore",

  i18n: {
    defaultLocale: "ro",
    locales: ["ro", "en"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    assets: "_assets",
  },
});
