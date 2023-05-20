// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  main: [
    {
      Rekrutacja: [
        "oferta-edukacyjna",
        { Profile: ["programowanie", "game-dev"] },
        "zasady-rekrutacji",
      ],
    },
    { "Organizacja pracy": ["konsultacje"] },
    {
      "Dla uczniów": [
        "samorzad",
        "zajecia-dodatkowe",
        "podreczniki",
        "projekty",
      ],
    },
    {
      Partnerzy: ["nasi-partnerzy"],
    },
  ],
};

module.exports = sidebars;
