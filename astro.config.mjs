import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    icon(),
  ],
});
