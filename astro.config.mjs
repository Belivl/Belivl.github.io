import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://belivl-vercel.vercel.app',
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: vercel()
});