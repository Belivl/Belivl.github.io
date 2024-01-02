import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import { DEFAULT_LOCALE, LOCALES, SITE_URL } from "./src/consts";
import vercel from '@astrojs/vercel/serverless';
import icon from "astro-icon";
const defaultLocale = DEFAULT_LOCALE;
const locales = LOCALES;


// https://astro.build/config
export default defineConfig({
  site: "https://belivl-vercel.vercel.app",
  output: "server",
  adapter: vercel(),
  trailingSlash: "always",
  integrations: [mdx(), sitemap({
    i18n: {
      locales,
      defaultLocale
    },
    filter: filterSitemapByDefaultLocale({
      defaultLocale
    })
  }), i18n({
    locales,
    defaultLocale,
    exclude: ["pages/api/**/*", "pages/rss.xml.ts", "pages/[locale]/rss.xml.ts"]
  }), alpinejs(), tailwind({
    applyBaseStyles: false
  }), icon({
      iconDir: "src/assets/icons",
    })]
});