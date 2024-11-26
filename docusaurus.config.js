// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Clipboard History Plugin Docs',
  tagline: 'Offline clipboard history manager for Unreal Engine',
  favicon: 'img/favicon.ico',

  url: 'https://builderment.io.github.com',
  baseUrl: '/clipboard-history-plugin-docs/',
  organizationName: 'builderment',
  projectName: 'clipboard-history-plugin-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Clipboard History Plugin Docs',
        items: [
          {
            href: 'https://www.fab.com/listings/c07ebcf4-648f-4801-9ccc-e9e4fc98c00d',
            label: 'Marketplace Listing',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                label: 'Marketplace Listing',
                href: 'https://www.fab.com/listings/c07ebcf4-648f-4801-9ccc-e9e4fc98c00d',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/VT3PqvRrYR',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Builderment LLC`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
