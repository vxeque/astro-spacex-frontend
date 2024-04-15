import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

export default defineConfig({
  site: 'https://vxeque.github.io/dist/client/',
  base:"/",
  integrations: [tailwind()],
  output: 'hybrid',
  adapter: node({
    mode: "standalone"
  })
});