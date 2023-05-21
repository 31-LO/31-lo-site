// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "LO 31",
  tagline: "Jedyne takie liceum",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "LO 31",
        logo: {
          alt: "LO 31 Logo",
          src: "img/logo.png",
        },
        items: [
          {
            to: "/docs/oferta-edukacyjna",
            label: "Rekrutacja",
            position: "left",
          },
          {
            to: "/docs/kadra",
            label: "Kadra",
            position: "left",
          },
          {
            to: "/docs/samorzad",
            label: "Dla uczniów",
            position: "left",
          },
          {
            to: "/docs/nasi-partnerzy",
            label: "Partnerzy",
            position: "left",
          },
          {
            to: "/docs/boisko",
            label: "Wynajmij boisko",
            position: "left",
          },
          {
            to: "/docs/kontakt",
            label: "Kontakt",
            position: "left",
          },
          // right side
          {
            to: "https://www.instagram.com/31lokrakow",
            label: "Instagram",
            position: "right",
          },
          {
            to: "https://www.facebook.com/31LOKrakow",
            label: "Facebook",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
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
            html: `<a href="http://www.bip.gov.pl/" target="_blank" rel="noreferrer noopener" aria-label="Biuletyn informacji publicznej">
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
