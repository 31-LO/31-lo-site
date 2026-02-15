import Box from '@mui/material/Box';
import StaffMemberCard, { StaffMemberProps } from './StaffMemberCard';
const placeholder = require('./img/placeholder.png').default;
const placeholderess = require('./img/placeholderess.png').default;

const listOfTeachers: StaffMemberProps[] = [
  {
    name: 'Jacek Brzostowski',
    subject: 'matematyka, chemia',
    imagePath: require('./img/brzostowski.png').default,
  },
  {
    name: 'Monika Budziak',
    subject: 'język polski',
    imagePath: require('./img/budziak.png').default,
  },
  {
    name: 'Roman Czapla',
    subject: 'informatyka',
    imagePath: require('./img/czapla.png').default,
  },
  {
    name: 'Monika Grosiak',
    subject: 'biologia',
    imagePath: require('./img/grosiak.png').default,
  },
  {
    name: 'Dorota Haase',
    subject: 'język angielski',
    imagePath: require('./img/haase.png').default,
  },
  {
    name: 'wicedyr. Kamila Jakóbczak',
    subject: 'plastyka',
    imagePath: require('./img/jakobczak.png').default,
  },
  {
    name: 'Agnieszka Korpała',
    subject: 'fizyka, matematyka',
    imagePath: require('./img/korpała.png').default,
  },
  {
    name: 'Anna Ligas-Kowaluk',
    subject: 'język angielski',
    imagePath: require('./img/ligaskowaluk.png').default,
  },
  {
    name: 'Katarzyna Molicka-Mocek',
    subject: 'język niemiecki',
    imagePath: require('./img/molickamocek.png').default,
  },
  {
    name: 'dyr. Łukasz Pająk',
    subject: 'wychowanie do życia w rodzinie',
    imagePath: require('./img/pająk.png').default,
  },
  {
    name: 'Małgorzata Potyrało',
    subject: 'biblioteka',
    imagePath: require('./img/potyrało.png').default,
  },
  {
    name: 'Anna Radzik',
    subject: 'wychowanie fizyczne',
    imagePath: require('./img/radzik.png').default,
  },
  {
    name: 'Krzysztof Kasprzycki',
    subject: 'religia',
    imagePath: require('./img/kasprzycki.png').default,
  },
  {
    name: 'Jakub Gajda',
    subject: 'informatyka',
    imagePath: require('./img/gajda.png').default,
  },
  {
    name: 'Albert Swęd',
    subject: 'wychowanie fizyczne',
    imagePath: require('./img/swęd.png').default,
  },
  {
    name: 'Donata Wajda',
    subject: 'język niemiecki',
    imagePath: require('./img/wajda.png').default,
  },
  {
    name: 'Angelika Wójciak',
    subject: 'język angielski',
    imagePath: require('./img/wojciak.png').default,
  },
  {
    name: 'Joanna Wojciechowska-Hartopp',
    subject: 'język angielski',
    imagePath: placeholderess,
  },
  {
    name: 'Jakub Mordyl',
    subject: 'wychowanie fizyczne',
    imagePath: require('./img/mordyl.png').default,
  },
  {
    name: 'Krystian Prymon',
    subject: 'język polski',
    imagePath: require('./img/prymon.png').default,
  },
  {
    name: 'Marika Serafin',
    subject: 'język angielski',
    imagePath: require('./img/serafin.png').default,
  },
  {
    name: 'Blanka Woszczek',
    subject: 'geografia',
    imagePath: require('./img/woszczek.png').default,
  },
  {
    name: 'Marcin Papież',
    subject: 'historia, biznes i zarządzanie',
    imagePath: require('./img/papież.png').default,
  },
  {
    name: 'Natalia Głowicka',
    subject: 'edukacja dla bezpieczeństwa',
    imagePath: require('./img/głowicka.png').default,
  },
  {
    name: 'Artur Paryga',
    subject: 'matematyka',
    imagePath: require('./img/paryga.png').default,
  },
  {
    name: 'Alicja Padło',
    subject: 'wychowanie fizyczne',
    imagePath: require('./img/padlo.png').default,
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
