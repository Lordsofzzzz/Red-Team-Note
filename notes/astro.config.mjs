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
      customCss: ['./src/styles/global.css'],
      social: {
        github: 'https://github.com/Lordsofzzzz/Red-Team-Note',
      },
      favicon: '/favicon-32x32.png', // Set the default favicon
      head: [
        // Add fallback favicons for different devices and browsers
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href: '/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href: '/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '180x180',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'manifest',
            href: '/site.webmanifest',
          },
        },
      ],
      sidebar: [
        {
          label: 'Reconnaissance',
          autogenerate: { directory: 'Reconnaissance' },
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
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});