import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://aung-mkhant.github.io",
  base: "/fruitiganza",
  build: {
    inlineStylesheets: "never",
  },
})
