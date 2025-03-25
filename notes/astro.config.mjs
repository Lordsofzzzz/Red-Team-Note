// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Red Team Notes',
      description: 'A comprehensive knowledge base for offensive security professionals',
      customCss: [
        // Path to your Tailwind base styles:
        './src/styles/global.css',
      
      ],
      social: {
        github: 'https://github.com/your-username/red-team-notes',
        twitter: 'https://twitter.com/your-twitter',
        discord: 'https://discord.com/your-discord',
      },
      sidebar: [
        {
          label: 'guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Getting Started',
          autogenerate: { directory: 'Getting Started' },
        },
        {
          label: 'Attack Techniques',
          autogenerate: { directory: 'techniques' },
        },
        {
          label: 'Infrastructure',
          autogenerate: { directory: 'infrastructure' },
        },
        {
          label: 'Tools',
          autogenerate: { directory: 'tools' },
        },
        {
          label: 'Resources',
          autogenerate: { directory: 'resources' },
        },
      ],
      components: {
        // Override the default ThemeSelect component
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});