import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://aung-mkhant.github.io",
  base: "/design-lab",
  build: {
    inlineStylesheets: "never"
  }
})
