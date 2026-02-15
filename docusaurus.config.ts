import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'LO 31',
  tagline: 'Jedyne takie liceum',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://lo31.krakow.pl',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '31-LO', // Usually your GitHub org/user name.
  projectName: '31-lo-site', // Usually your repo name.

  markdown: {
    hooks: {
      onBrokenMarkdownImages: 'throw',
      onBrokenMarkdownLinks: 'throw',
    },
  },
  onBrokenLinks: 'throw',
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-PZCSLJKETM',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'LO 31',
        logo: {
          alt: 'LO 31 Logo',
          src: 'img/logo.png',
        },
        items: [
          // left side
          {
            label: 'Rekrutacja',
            items: [
              {
                label: 'Profile',
                to: 'docs/profile',
              },
              {
                label: 'Zasady rekrutacji',
                to: 'docs/zasady-rekrutacji',
              },
              {
                label: 'Jak wybrać szkołę?',
                to: 'docs/jak-wybrac',
              },
            ],
          },
          {
            label: 'O szkole',
            items: [
              {
                label: 'Kadra',
                to: 'docs/kadra',
              },
              {
                label: 'Samorząd',
                to: 'docs/samorzad',
              },
              {
                label: 'Biblioteka',
                to: 'docs/biblioteka',
              },
              {
                label: 'Podręczniki',
                to: 'docs/podreczniki',
              },
              {
                label: 'Projekty',
                to: 'docs/projekty',
              },
              {
                label: 'Historia szkoły',
                to: 'docs/informacje-dodatkowe',
              },
              {
                label: 'FAQ',
                to: 'docs/faq',
              },
            ],
          },
          {
            label: 'Partnerzy',
            items: [
              {
                label: 'Nasi partnerzy',
                to: 'docs/nasi-partnerzy',
              },
              {
                label: 'Zostań partnerem',
                to: 'docs/zostan-partnerem',
              },
            ],
          },
          {
            label: 'Dokumenty',
            items: [
              {
                label: 'Statut szkoły',
                to: 'docs/statut',
              },
              {
                label: 'Deklaracja dostępności',
                to: 'docs/deklaracja-dostepnosci',
              },
              {
                label:
                  'Polityka oraz procedury ochrony dzieci przed krzywdzeniem',
                to: 'docs/ochrona',
              },
              {
                label: 'Plan postępowań o udzielenie zamówień publicznych',
                to: 'docs/plan-postepowan',
              },
              {
                label: 'Zamówienia publiczne równe lub powyżej 130 000 zł',
                to: 'docs/powyzej-130k',
              },
            ],
          },
          {
            label: 'Wynajmij boisko',
            to: 'https://rezerwacje-lo31.pl/',
          },
          {
            label: 'Kontakt',
            to: 'docs/kontakt',
          },
          // right side
          {
            to: 'https://linktr.ee/lo.31',
            label: 'Linktree',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            html: `<a href="https://zso13krakow.mobidziennik.pl" target="_blank" rel="noreferrer noopener" aria-label="Mobi dziennik">
              <img src="/img/footer-logos/mobi-dziennik.webp" alt="Mobi dziennik" height="51" />
            </a>`,
          },
          {
            html: `<a href="http://www.oke.krakow.pl/inf/" target="_blank" rel="noreferrer noopener" aria-label="Okręgowa komisja egzaminacyjna">
              <img src="/img/footer-logos/oke.webp" alt="Okręgowa komisja egzaminacyjna" height="51" />
            </a>`,
          },
          {
            html: `<a href="https://www.gov.pl/bip" target="_blank" rel="noreferrer noopener" aria-label="Biuletyn informacji publicznej">
              <img src="/img/footer-logos/bip.webp" alt="Biuletyn informacji publicznej" height="51" />
            </a>`,
          },
          {
            html: `<a href="https://support.google.com/a/answer/139019" target="_blank" rel="noreferrer noopener" aria-label="Google Workspace dla edukacji">
              <img src="/img/footer-logos/google-workspace.png" alt="Google Workspace dla edukacji" height="51" />
            </a>`,
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} XXXI Liceum Ogólnokształcące im. Romana Ingardena w Krakowie`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    } satisfies Preset.ThemeConfig,
};

module.exports = config;
