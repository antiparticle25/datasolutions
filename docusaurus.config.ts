import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Genomics Portfolio',
  tagline: 'Data-driven insights for research, diagnostics & biotech',
  favicon: 'img/docusaurus.png',

  future: {v4: true},

  // ─── Deployment ────────────────────────────────────────────────
url: 'https://www.rubenabreu.me',
baseUrl: '/datasolutions/',
organizationName: 'antiparticle25',
projectName: 'datasolutions',
deploymentBranch: 'gh-pages',
onBrokenLinks: 'throw',
onBrokenMarkdownLinks: 'warn',


  // ─── I18n ──────────────────────────────────────────────────────
  i18n: {defaultLocale: 'en', locales: ['en']},

  // ─── Presets ───────────────────────────────────────────────────
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',          // docs at site root
          sidebarPath: './sidebars.ts',
          editUrl: undefined,          // no “edit this page” links
        },
        blog: false,                   // disable blog
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],

  // ─── Theme config ──────────────────────────────────────────────
  themeConfig: {
    colorMode: {
    defaultMode: 'light',
    disableSwitch: true,
    respectPrefersColorScheme: false,
  },
    // hide the right-hand ToC everywhere
    tableOfContents: {minHeadingLevel: 6, maxHeadingLevel: 6},

    navbar: {
      title: 'Genomics Data Solutions',
      logo: {alt: 'Genomics Logo', src: 'img/docusaurus.png'},
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/overview', label: 'Overview', position: 'left'},
        {to: '/academic-research/', label: 'Academic', position: 'left'},
        {to: '/oncology-europe/', label: 'Oncology', position: 'left'},
        {to: '/graph-database/', label: 'Graph DB', position: 'left'},
        {to: '/mimic-onco/', label: 'Onco DB', position: 'left'},
        {
          href: 'https://www.rubenabreu.me/',
          label: 'rubenabreu.me',
          position: 'right',
        },
      ],
    },


    footer: {
      style: 'dark',
      links: [],                         // minimal footer
      copyright: `© ${new Date().getFullYear()} Rúben L.P. Abreu`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
