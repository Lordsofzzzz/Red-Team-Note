// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Red Team Notes',
      description: 'A comprehensive knowledge base for offensive security professionals',
      logo: {
        src: './src/assets/red-team-logo.svg',
        alt: 'Red Team Notes Logo',
      },
      customCss: [
        './src/styles/custom.css',
      ],
      social: {
        github: 'https://github.com/your-username/red-team-notes',
        twitter: 'https://twitter.com/your-twitter',
        discord: 'https://discord.com/your-discord',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', link: '/' },
            { label: 'Ethics & Legal', link: '/guides/ethics/' },
          ],
        },
        {
          label: 'Attack Techniques',
          items: [
            { label: 'Initial Access', link: '/techniques/initial-access/' },
            { label: 'Privilege Escalation', link: '/techniques/privilege-escalation/' },
            { label: 'Lateral Movement', link: '/techniques/lateral-movement/' },
            { label: 'Persistence', link: '/techniques/persistence/' },
          ],
        },
        {
          label: 'Infrastructure',
          items: [
            { label: 'C2 Frameworks', link: '/tools/c2-frameworks/' },
            { label: 'Operational Security', link: '/infrastructure/opsec/' },
          ],
        },
        {
          label: 'Tools',
          autogenerate: { directory: 'tools' },
        },
        {
          label: 'Resources',
          items: [
            { label: 'Report Templates', link: '/resources/report-templates/' },
            { label: 'MITRE ATT&CK', link: '/resources/mitre-attack/' },
          ],
        },
      ],
    }),
  ],
});
