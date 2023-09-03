import React from 'react';
import Box from '@mui/material/Box';
import StaffMemberCard, { StaffMemberProps } from './StaffMemberCard';

const listOfTeachers: StaffMemberProps[] = [
  {
    name: 'Jacek Brzostowski',
    subject: 'matematyka',
    imagePath: require('./img/brzostowski.png').default
  },
  {
    name: 'Monika Budziak',
    subject: 'język polski',
    imagePath: require('./img/budziak.png').default
  },
  {
    name: 'Renata Chodacka',
    subject: 'chemia',
    imagePath: require('./img/placeholder.png').default
  },
  {
    name: 'Roman Czapla',
    subject: 'informatyka',
    imagePath: require('./img/czapla.png').default
  },
  {
    name: 'Monika Grosiak',
    subject: 'biologia',
    imagePath: require('./img/grosiak.png').default
  },
  {
    name: 'Dorota Haase',
    subject: 'język angielski',
    imagePath: require('./img/haase.png').default
  },
  {
    name: 'wicedyr. Kamila Jakóbczak',
    subject: 'plastyka',
    imagePath: require('./img/jakobczak.png').default
  },
  {
    name: 'Agnieszka Korpała',
    subject: 'fizyka, matematyka',
    imagePath: require('./img/korpala.png').default
  },
  {
    name: 'Anna Ligas-Kowaluk',
    subject: 'język angielski',
    imagePath: require('./img/ligas.png').default
  },
  {
    name: 'Janina Magas',
    subject: 'język polski dla obcokrajowców',
    imagePath: require('./img/magas.png').default
  },
  {
    name: 'Katarzyna Molicka-Mocek',
    subject: 'język niemiecki',
    imagePath: require('./img/molicka.png').default
  },
  {
    name: 'dyr. Łukasz Pająk',
    subject: 'wychowanie do życia w rodzinie',
    imagePath: require('./img/pajak.png').default
  },
  {
    name: 'Małgorzata Potyrało',
    subject: 'biblioteka',
    imagePath: require('./img/placeholder.png').default
  },
  {
    name: 'Anna Radzik',
    subject: 'wychowanie fizyczne',
    imagePath: require('./img/radzik.png').default
  },
  {
    name: 'ks. Krzysztof Rusnak',
    subject: 'religia',
    imagePath: require('./img/rusnak.png').default
  },
  {
    name: 'Marek Solarz',
    subject: 'informatyka',
    imagePath: require('./img/solarz.png').default
  },
  {
    name: 'Albert Swęd',
    subject: 'wychowanie fizyczne',
    imagePath: require('./img/swed.png').default
  },
  {
    name: 'Joanna Szlachetka',
    subject: 'pedagog',
    imagePath: require('./img/szlachetka.png').default
  },
  {
    name: 'Donata Wajda',
    subject: 'język niemiecki',
    imagePath: require('./img/wajda.png').default
  },
  {
    name: 'Angelika Wójciak',
    subject: 'język angielski',
    imagePath: require('./img/wojciak.png').default
  },
  {
    name: 'Jakub Mordyl',
    subject: 'wychowanie fizyczne',
    imagePath: require('./img/mordyl.png').default
  },
  {
    name: 'Joanna Dusza',
    subject: 'EDB, podstawy przedsiębiorczości, doradztwo zawodowe',
    imagePath: require('./img/dusza.png').default
  },
  {
    name: 'Krystian Prymon',
    subject: 'język polski',
    imagePath: require('./img/prymon.png').default
  },
  {
    name: 'Marika Serafin',
    subject: 'język angielski',
    imagePath: require('./img/serafin.png').default
  },
  {
    name: 'Magdalena Stańczak-Strząska',
    subject: 'matematyka',
    imagePath: require('./img/stanczak.png').default
  },
  {
    name: 'Karolina Sumara',
    subject: 'historia',
    imagePath: require('./img/placeholder.png').default
  },
  {
    name: 'Blanka Woszczek',
    subject: 'geografia',
    imagePath: require('./img/placeholder.png').default
  },
];

export default function Teachers() {
  listOfTeachers.sort((a, b) => (a.name > b.name ? 1 : -1));
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr', md: '1fr 1fr' },
        gridTemplateRows: '1fr',
        gap: '1rem',
        margin: '2rem 0',
      }}
    >
      {listOfTeachers.map((props) => (
        <StaffMemberCard {...props} key={props.name} />
      ))}
    </Box>
  );
}
