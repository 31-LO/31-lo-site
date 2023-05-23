import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import CardHeader from "@mui/material/CardHeader";

type TeacherProps = {
  name: string;
  subject: string;
  officeHours: string;
};

const listOfTeachers: TeacherProps[] = [
  {
    name: "Jacek Brzostowski",
    subject: "matematyka",
    officeHours: "wtorek 7:00-8:00, sala 305",
  },
  {
    name: "Monika Budziak",
    subject: "język polski",
    officeHours: "czwartek 14:35-15:35, sala 310",
  },
  {
    name: "Renata Chodacka",
    subject: "chemia",
    officeHours: "wtorek, 8.40-9.40, sala 301",
  },
  {
    name: "Roman Czapla",
    subject: "informatyka",
    officeHours: "czwartek, 14:35-15:35, sala 217",
  },
  {
    name: "Monika Grosiak",
    subject: "biologia",
    officeHours: "poniedziałek, 14.40-15.40, sala 313",
  },
  {
    name: "Dorota Haase",
    subject: "jężyk angielski",
    officeHours: "piętak, 11:50-12:50, sala 301",
  },
  {
    name: "wicedyr. Kamila Jakóbczak",
    subject: "plastyka",
    officeHours: "czwartek, 15:00-16:00, gabinet zastępcy dyrektora",
  },
  {
    name: "Jadwiga Jaworska",
    subject: "fizyka, doradca zawodowy",
    officeHours: "piątek, 16:15-17:15, sala 314",
  },
  {
    name: "Agnieszka Korpała",
    subject: "fizyka, matematyka",
    officeHours: "czwartek, 13:45-14:45, sala 313",
  },
  {
    name: "Anna Ligas-Kowaluk",
    subject: "język angielski",
    officeHours: "czwartek, 13:50-14:50, sala 306",
  },
  {
    name: "Janina Magas",
    subject: "język polski dla obcokrajowców",
    officeHours: "brak",
  },
  {
    name: "Katarzyna Molicka-Mocek",
    subject: "język niemiecki",
    officeHours: "poniedziałek, 13:50 - 14:00, sala 308",
  },
  {
    name: "dyr. Łukasz Pająk",
    subject: "WOS, wychowanie do życia w rodzinie",
    officeHours: "poniedziałek, 15:30-16:30, sala 312",
  },
  {
    name: "Małgorzata Potyrało",
    subject: "biblioteka",
    officeHours: "czwartek, 15:30-16:30, biblioteka",
  },
  {
    name: "Anna Radzik",
    subject: "wychowanie fizyczne",
    officeHours: "wtorek, 15:30-16:30, pok. nauczycieli WF",
  },
  {
    name: "Jolanta Rawecka",
    subject: "język angielski",
    officeHours: "czwartek, 11:55-12:55, pokój nauczycielski",
  },
  {
    name: "ks. Krzysztof Rusnak",
    subject: "religia",
    officeHours: "środa, 12:50-13:50, pokój nauczycielski",
  },
  {
    name: "Wojciech Rzeszut",
    subject: "matematyka",
    officeHours:
      "1 godz. co 2 tygodnie, piątek, 12:50-13:50, pokój nauczycielski",
  },
  {
    name: "Marek Solarz",
    subject: "informatyka",
    officeHours: "czwartek, 11:50-12:50, sala 216",
  },
  {
    name: "Barbara Stuczko",
    subject: "geografia",
    officeHours: "poniedziałek, 14:40-15:40, sala 312",
  },
  {
    name: "Albert Swęd",
    subject: "wychowanie fizyczne",
    officeHours: "wtorek, 15:30-16:30, pok. nauczycieli WF",
  },
  {
    name: "Joanna Szlachetka",
    subject: "pedagog",
    officeHours: "środa, 8:00-9:00, gabinet pedagoga",
  },
  {
    name: "Renata Świgost",
    subject: "historia, WOS, HIS",
    officeHours: "wtorek, 14:35-15:35, sala 313",
  },
  {
    name: "Donata Wajda",
    subject: "język niemiecki",
    officeHours: "wtorek, 15:30-16:30, sala 308",
  },
  {
    name: "Angelika Wójciak",
    subject: "język angielski",
    officeHours: "poniedziałek, 14:35-15:35, sala 210",
  },
  {
    name: "Ryszard Mamczura",
    subject: "język polski",
    officeHours: "TBD",
  },
  {
    name: "Jakub Mordyl",
    subject: "EDB",
    officeHours: "TBD",
  },
];

function Teacher({ name, subject, officeHours }: TeacherProps) {
  return (
    <Card sx={{ padding: 1.5 }}>
      <CardHeader title={name} subheader={subject} />
      <CardContent>
        <Typography variant="subtitle2" component="div">
          Konsultacje:
        </Typography>
        <Typography>{officeHours}</Typography>
      </CardContent>
    </Card>
  );
}

export default function Teachers() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gridTemplateRows: "1fr",
        gap: "1rem",
        margin: "2rem 0",
      }}
    >
      {listOfTeachers.map((props) => (
        <Teacher {...props} key={props.name} />
      ))}
    </div>
  );
}
