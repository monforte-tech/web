// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  base: "/",
  site: "https://monforte-tech.github.io/",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
