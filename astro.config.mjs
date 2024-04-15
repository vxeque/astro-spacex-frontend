import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

export default defineConfig({
  site: 'https://vxeque.github.io/',
  base:"/",
  integrations: [tailwind()],
  output: 'hybrid',
  build:{
    client:'./src/pages'
  },
  adapter: node({
    mode: "standalone"
  })
});