import React from 'react';
import Box from '@mui/material/Box';
import StaffMemberCard, { StaffMemberProps } from './StaffMemberCard';
const placeholder = require('./img/placeholder.png').default;

const listOfTeachers: StaffMemberProps[] = [
  {
    name: 'Jacek Brzostowski',
    subject: 'matematyka',
    imagePath: require('./img/brzostowski.png').default,
    officeHours: 'czwartek, 13.45 - 14. 45, s. 305',
  },
  {
    name: 'Monika Budziak',
    subject: 'język polski',
    imagePath: require('./img/budziak.png').default,
    officeHours: 'czwartek, 13:40 - 14:40, s. 310',
  },
  {
    name: 'Barbara Machnik',
    subject: 'chemia',
    imagePath: require('./img/machnik.png').default,
    officeHours: 'piątek 15:25 - 16:25 s. 313',
  },
  {
    name: 'Roman Czapla',
    subject: 'informatyka',
    imagePath: require('./img/czapla.png').default,
    officeHours: 'poniedziałek: 13:45 - 14:45, s. 217',
  },
  {
    name: 'Monika Grosiak',
    subject: 'biologia',
    imagePath: require('./img/grosiak.png').default,
    officeHours: 'poniedziałekek, 14:35 - 15:35, s. 313',
  },
  {
    name: 'Dorota Haase',
    subject: 'język angielski',
    imagePath: require('./img/haase.png').default,
    officeHours: 'czwartek 14:35 - 15:35, s.307',
  },
  {
    name: 'wicedyr. Kamila Jakóbczak',
    subject: 'plastyka',
    imagePath: require('./img/jakóbczak.png').default,
    officeHours: 'czwartek, 14:30 - 15:30, gab. wicedyr.',
  },
  {
    name: 'Agnieszka Korpała',
    subject: 'fizyka, matematyka',
    imagePath: require('./img/korpała.png').default,
    officeHours: 'czwartek 14.40 - 15.40, s. 314',
  },
  {
    name: 'Anna Ligas-Kowaluk',
    subject: 'język angielski',
    imagePath: require('./img/ligaskowaluk.png').default,
    officeHours: 'czwartek 13:50 - 14:50, s. 306',
  },
  {
    name: 'Katarzyna Molicka-Mocek',
    subject: 'język niemiecki',
    imagePath: require('./img/molickamocek.png').default,
    officeHours: 'poniedziałek 7:00 - 8:00, s. 308',
  },
  {
    name: 'dyr. Łukasz Pająk',
    subject: 'wychowanie do życia w rodzinie',
    imagePath: require('./img/pająk.png').default,
    officeHours: 'poniedziałek 14:40 - 15:40, s. 005a',
  },
  {
    name: 'Małgorzata Potyrało',
    subject: 'biblioteka',
    imagePath: require('./img/potyrało.png').default,
    officeHours: 'czwartek 15:00 - 16:00, biblioteka',
  },
  {
    name: 'Anna Radzik',
    subject: 'wychowanie fizyczne',
    imagePath: require('./img/radzik.png').default,
    officeHours: 'środa 14:35 -15:35, pok. nauczycieli WF',
  },
  {
    name: 'Krzysztof Kasprzycki',
    subject: 'religia',
    imagePath: require('./img/kasprzycki.png').default,
    officeHours: 'środa, 10:30 - 11:30, pokój nauczycielski',
  },
  {
    name: 'Marek Solarz',
    subject: 'informatyka',
    imagePath: require('./img/solarz.png').default,
    officeHours: 'wtorek 13:40 - 14:40, s. 210',
  },
  {
    name: 'Albert Swęd',
    subject: 'wychowanie fizyczne',
    imagePath: require('./img/swęd.png').default,
    officeHours: 'poniedziałek 14.40 - 15.40, pok. nauczycieli WF',
  },
  {
    name: 'Donata Wajda',
    subject: 'język niemiecki',
    imagePath: require('./img/wajda.png').default,
    officeHours: 'wtorek, 14:40 - 15:40, s. 205b',
  },
  {
    name: 'Angelika Wójciak',
    subject: 'język angielski',
    imagePath: require('./img/wójciak.png').default,
    officeHours: 'poniedziałek 7:00 - 8:00, s. 309',
  },
  {
    name: 'Jakub Mordyl',
    subject: 'wychowanie fizyczne',
    imagePath: require('./img/mordyl.png').default,
    officeHours: 'czwartek 11:30 - 12:30, pok. nauczycieli WF',
  },
  {
    name: 'Krystian Prymon',
    subject: 'język polski',
    imagePath: require('./img/prymon.png').default,
    officeHours: 'poniedziałek 8:30 - 9:30, s. 312',
  },
  {
    name: 'Marika Serafin',
    subject: 'język angielski',
    imagePath: require('./img/serafin.png').default,
    officeHours: 'wtorek 08:50 - 09:50 pokój nauczycielski',
  },
  {
    name: 'Blanka Woszczek',
    subject: 'geografia',
    imagePath: require('./img/woszczek.png').default,
    officeHours: 'wtorek 8:00 - 8:45, s. 206',
  },
  {
    name: 'Marcin Papież',
    subject: 'historia, biznes i zarządzanie',
    imagePath: require('./img/papież.png').default,
    officeHours: 'czwartek, 14:35 - 15:35, s. 313',
  },
  {
    name: 'Natalia Głowicka',
    subject: 'edukacja dla bezpieczeństwa',
    imagePath: require('./img/głowicka.png').default,
    officeHours: 'czwartek, 14:35 - 15:35, s. 313',
  },
  {
    name: 'Artur Paryga',
    subject: 'matematyka',
    imagePath: require('./img/placeholder.png').default,
    officeHours: 'wtorek 12:30 - 13:30, s. 005b',
  },
  {
    name: 'Alicja Padło',
    subject: 'wychowanie fizyczne',
    imagePath: require('./img/placeholderess.png').default,
    officeHours: 'poniedziałek 10.30 - 11.30, s. 006',
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
