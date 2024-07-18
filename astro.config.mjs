import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify({
    cacheOnDemandPages: true,
    image: {
      domains: ['paulapplegate.com'],
    },
    edgeMiddleware: true,
      }),
    });
