import React from 'react';
import Box from '@mui/material/Box';
import StaffMemberCard, { StaffMemberProps } from './StaffMemberCard';
const placeholder = require('./img/placeholder.png').default

const listOfTeachers: StaffMemberProps[] = [
  {
    name: 'Jacek Brzostowski',
    subject: 'matematyka',
    imagePath: require('./img/brzostowski.png').default,
    officeHours: 'piątek 12:40 - 13:40 s. 305',
  },
  {
    name: 'Monika Budziak',
    subject: 'język polski',
    imagePath: require('./img/budziak.png').default,
    officeHours: 'piątek 13:35 - 14:35, s. 310',
  },
  {
    name: 'Barbara Machnik',
    subject: 'chemia',
    imagePath: require('./img/machnik.png').default,
    officeHours: 'środa 8:45 - 9:45 s. 313',
  },
  {
    name: 'Roman Czapla',
    subject: 'informatyka',
    imagePath: require('./img/czapla.png').default,
    officeHours: 'poniedziałek, 15:25 - 16:25, s. 217',
  },
  {
    name: 'Monika Grosiak',
    subject: 'biologia',
    imagePath: require('./img/grosiak.png').default,
    officeHours: 'poniedziałek, 13:40 - 14:40, s. 313',
  },
  {
    name: 'Dorota Haase',
    subject: 'język angielski',
    imagePath: require('./img/haase.png').default,
    officeHours: 'piątek, 7:55 - 8:55, s. 307',
  },
  {
    name: 'wicedyr. Kamila Jakóbczak',
    subject: 'plastyka',
    imagePath: require('./img/jakóbczak.png').default,
    officeHours: 'czwartek, 14:00 - 15:00, gabinet wicedyrektora',
  },
  {
    name: 'Agnieszka Korpała',
    subject: 'fizyka, matematyka',
    imagePath: require('./img/korpała.png').default,
    officeHours: 'czwartek, 15:40 - 16:40, s. 314',
  },
  {
    name: 'Anna Ligas-Kowaluk',
    subject: 'język angielski',
    imagePath: require('./img/ligaskowaluk.png').default,
    officeHours: 'środa, 14:40 - 15:40, s. 306',
  },
  {
    name: 'Katarzyna Molicka-Mocek',
    subject: 'język niemiecki',
    imagePath: require('./img/molickamocek.png').default,
    officeHours: 'wtorek 7:00 - 8:00, s. 308',
  },
  {
    name: 'dyr. Łukasz Pająk',
    subject: 'wychowanie do życia w rodzinie',
    imagePath: require('./img/pająk.png').default,
    officeHours: 'poniedziałek 15:30 - 16:30, s. 005',
  },
  {
    name: 'Małgorzata Potyrało',
    subject: 'biblioteka',
    imagePath: require('./img/potyrało.png').default,
    officeHours: 'czwartek 15:00 - 16:00 biblioteka',
  },
  {
    name: 'Anna Radzik',
    subject: 'wychowanie fizyczne',
    imagePath: require('./img/radzik.png').default,
    officeHours: 'środa, 15:30 - 16:30, pok. nauczycieli WF',
  },
  {
    name: 'Krzysztof Kasprzycki',
    subject: 'religia',
    imagePath: require('./img/kasprzycki.png').default,
    officeHours: 'czwartek 9:40 - 10:40, pokój nauczycielski',
  },
  {
    name: 'Marek Solarz',
    subject: 'informatyka',
    imagePath: require('./img/solarz.png').default,
    officeHours: 'wtorek, 12:40 - 13:40, pokój nauczycielski',
  },
  {
    name: 'Albert Swęd',
    subject: 'wychowanie fizyczne',
    imagePath: require('./img/swęd.png').default,
    officeHours: 'poniedziałek 15:25 - 16:25, pok. nauczycieli WF',
  },
  {
    name: 'Donata Wajda',
    subject: 'język niemiecki',
    imagePath: require('./img/wajda.png').default,
    officeHours: 'wtorek, 15:25 - 16:25, s. 205b',
  },
  {
    name: 'Angelika Wójciak',
    subject: 'język angielski',
    imagePath: require('./img/wójciak.png').default,
    officeHours: 'środa, 7:00 - 8:00, s. 309',
  },
  {
    name: 'Jakub Mordyl',
    subject: 'wychowanie fizyczne',
    imagePath: require('./img/mordyl.png').default,
    officeHours: 'czwartek 11:40 - 12:40, pok. nauczycieli WF',
  },
  {
    name: 'Krystian Prymon',
    subject: 'język polski',
    imagePath: require('./img/prymon.png').default,
    officeHours: 'środa 8:00 - 9:00, s. 112',
  },
  {
    name: 'Marika Serafin',
    subject: 'język angielski',
    imagePath: require('./img/serafin.png').default,
    officeHours: 'wtorek 9:35 - 10:35, pokój nauczycielski',
  },
  {
    name: 'Blanka Woszczek',
    subject: 'geografia',
    imagePath: require('./img/woszczek.png').default,
    officeHours: 'poniedziałek, 14:45 - 15:30, pokój nauczycielski',
  },
  {
    name: 'Marcin Papież',
    subject: 'historia, biznes i zarządzanie',
    imagePath: require('./img/papież.png').default,
    officeHours: 'poniedziałek, 12:30 - 13:30, s. 206',
  },
  {
    name: 'Natalia Głowicka',
    subject: 'edukacja dla bezpieczeństwa',
    imagePath: require('./img/głowicka.png').default,
    officeHours: 'poniedziałek, 12:30 - 13:30, s. 206',
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
