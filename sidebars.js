// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  main: [
    {
      Rekrutacja: [
        'oferta-edukacyjna',
        { Profile: ['programowanie', 'game-dev'] },
        'zasady-rekrutacji',
      ],
    },
    {
      'O szkole': [
        'kadra',
        'biblioteka',
        'informacje-dodatkowe',
        'deklaracja-dostepnosci',
      ],
    },
    {
      'Dla uczniów': [
        'samorzad',
        'zajecia-dodatkowe',
        'podreczniki',
        'projekty',
      ],
    },
    {
      Partnerzy: ['nasi-partnerzy', 'zostan-partnerem'],
    },
    'boisko',
    'kontakt',
  ],
};

module.exports = sidebars;
