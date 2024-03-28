import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

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

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

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
            label: 'Poczytajże!',
            to: '/blog',
          },
          {
            label: 'Rekrutacja',
            to: 'docs/oferta-edukacyjna',
            items: [
              {
                label: 'Oferta edukacyjna',
                to: 'docs/oferta-edukacyjna',
              },
              {
                label: 'Zasady rekrutacji',
                to: 'docs/zasady-rekrutacji',
              },
            ],
          },
          {
            label: 'Profile',
            to: 'docs/programowanie',
            items: [
              { label: 'Programowanie', to: 'docs/programowanie' },
              { label: 'Game dev', to: 'docs/game-dev' },
            ],
          },
          {
            label: 'O szkole',
            to: 'docs/kadra',
            items: [
              {
                label: 'Kadra',
                to: 'docs/kadra',
              },
              {
                label: 'Biblioteka',
                to: 'docs/biblioteka',
              },
              {
                label: 'Statut szkoły',
                to: 'docs/statut',
              },
              {
                label: 'Informacje dodatkowe',
                to: 'docs/informacje-dodatkowe',
              },
              {
                label: 'Deklaracja dostępności',
                to: 'docs/deklaracja-dostepnosci',
              },
            ],
          },
          {
            label: 'Dla uczniów',
            to: 'docs/samorzad',
            items: [
              {
                label: 'Samorząd',
                to: 'docs/samorzad',
              },
              {
                label: 'Zajęcia dodatkowe',
                to: 'docs/zajecia-dodatkowe',
              },
              {
                label: 'Podręczniki',
                to: 'docs/podreczniki',
              },
              {
                label: 'Projekty',
                to: 'docs/projekty',
              },
            ],
          },
          {
            label: 'Partnerzy',
            to: 'docs/nasi-partnerzy',
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
            label: 'Boisko',
            to: 'docs/boisko',
          },
          {
            label: 'Kontakt',
            to: 'docs/kontakt',
          },
          // right side
          {
            to: 'https://www.instagram.com/31lokrakow',
            label: 'Instagram',
            position: 'right',
          },
          {
            to: 'https://www.facebook.com/31LOKrakow',
            label: 'Facebook',
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
            html: `<a href="https://www.marr.pl/liderhr/" target="_blank" rel="noreferrer noopener" aria-label="Lider HR">
              <img src="/img/footer-logos/lider_hr.png" alt="Lider HR" height="51" />
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

  plugins: [
    [
      './src/plugins/blog-plugin',
      {
        id: 'blog',
        routeBasePath: 'blog',
        path: './blog',
        blogTitle: 'Poczytajże!',
        blogDescription: 'Wszystko co w szkole piszczy!',
        postsPerPage: 'ALL',
        blogSidebarTitle: 'Wszystkie "Poczytajże!"',
        blogSidebarCount: 'ALL',
      },
    ],
  ],
};

module.exports = config;
