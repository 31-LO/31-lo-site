import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import CardHeader from "@mui/material/CardHeader";

type TeacherProps = {
  firstName: string;
  lastName: string;
  titleOfAddress?: string;
  subject: string;
  officeHours: string;
};

const listOfTeachers: TeacherProps[] = [
  {
    firstName: "Jacek",
    lastName: "Brzostowski",
    subject: "matematyka",
    officeHours: "wtorek 7:00-8:00, sala 305",
  },
  {
    firstName: "Monika",
    lastName: "Budziak",
    subject: "język polski",
    officeHours: "czwartek 14:35-15:35, sala 310",
  },
  {
    firstName: "Renata",
    lastName: "Chodacka",
    subject: "chemia",
    officeHours: "wtorek, 8.40-9.40, sala 301",
  },
  {
    firstName: "Roman",
    lastName: "Czapla",
    subject: "informatyka",
    officeHours: "czwartek, 14:35-15:35, sala 217",
  },
  {
    firstName: "Monika",
    lastName: "Grosiak",
    subject: "biologia",
    officeHours: "poniedziałek, 14.40-15.40, sala 313",
  },
  {
    firstName: "Dorota",
    lastName: "Haase",
    subject: "jężyk angielski",
    officeHours: "piętak, 11:50-12:50, sala 301",
  },
  {
    firstName: "Kamila",
    lastName: "Jakóbczak",
    titleOfAddress: "wicedyr.",
    subject: "plastyka",
    officeHours: "czwartek, 15:00-16:00, gabinet zastępcy dyrektora",
  },
  {
    firstName: "Jadwiga",
    lastName: "Jaworska",
    subject: "fizyka, doradca zawodowy",
    officeHours: "piątek, 16:15-17:15, sala 314",
  },
  {
    firstName: "Agnieszka",
    lastName: "Korpała",
    subject: "fizyka, matematyka",
    officeHours: "czwartek, 13:45-14:45, sala 313",
  },
  {
    firstName: "Anna",
    lastName: "Ligas-Kowaluk",
    subject: "język angielski",
    officeHours: "czwartek, 13:50-14:50, sala 306",
  },
  {
    firstName: "Janina",
    lastName: "Magas",
    subject: "język polski dla obcokrajowców",
    officeHours: "brak",
  },
  {
    firstName: "Katarzyna",
    lastName: "Molicka-Mocek",
    subject: "język niemiecki",
    officeHours: "poniedziałek, 13:50 - 14:00, sala 308",
  },
  {
    firstName: "Łukasz",
    lastName: "Pająk",
    titleOfAddress: "dyr.",
    subject: "WOS, wychowanie do życia w rodzinie",
    officeHours: "poniedziałek, 15:30-16:30, sala 312",
  },
  {
    firstName: "Małgorzata",
    lastName: "Potyrało",
    subject: "biblioteka",
    officeHours: "czwartek, 15:30-16:30, biblioteka",
  },
  {
    firstName: "Anna",
    lastName: "Radzik",
    subject: "wychowanie fizyczne",
    officeHours: "wtorek, 15:30-16:30, pok. nauczycieli WF",
  },
  {
    firstName: "Jolanta",
    lastName: "Rawecka",
    subject: "język angielski",
    officeHours: "czwartek, 11:55-12:55, pokój nauczycielski",
  },
  {
    firstName: "Krzysztof",
    lastName: "Rusnak",
    titleOfAddress: "ks.",
    subject: "religia",
    officeHours: "środa, 12:50-13:50, pokój nauczycielski",
  },
  {
    firstName: "Wojciech",
    lastName: "Rzeszut",
    subject: "matematyka",
    officeHours:
      "1 godz. co 2 tygodnie, piątek, 12:50-13:50, pokój nauczycielski",
  },
  {
    firstName: "Marek",
    lastName: "Solarz",
    subject: "informatyka",
    officeHours: "czwartek, 11:50-12:50, sala 216",
  },
  {
    firstName: "Barbara",
    lastName: "Stuczko",
    subject: "geografia",
    officeHours: "poniedziałek, 14:40-15:40, sala 312",
  },
  {
    firstName: "Albert",
    lastName: "Swęd",
    subject: "wychowanie fizyczne",
    officeHours: "wtorek, 15:30-16:30, pok. nauczycieli WF",
  },
  {
    firstName: "Joanna",
    lastName: "Szlachetka",
    subject: "pedagog",
    officeHours: "środa, 8:00-9:00, gabinet pedagoga",
  },
  {
    firstName: "Renata",
    lastName: "Świgost",
    subject: "historia, WOS, HIS",
    officeHours: "wtorek, 14:35-15:35, sala 313",
  },
  {
    firstName: "Donata",
    lastName: "Wajda",
    subject: "język niemiecki",
    officeHours: "wtorek, 15:30-16:30, sala 308",
  },
  {
    firstName: "Angelika",
    lastName: "Wójciak",
    subject: "język angielski",
    officeHours: "poniedziałek, 14:35-15:35, sala 210",
  },
  {
    firstName: "Ryszard",
    lastName: "Mamczura",
    subject: "język polski",
    officeHours: "TBD",
  },
  {
    firstName: "Jakub",
    lastName: "Mordyl",
    subject: "EDB",
    officeHours: "TBD",
  },
];

function Teacher({
  firstName,
  lastName,
  titleOfAddress,
  subject,
  officeHours,
}: TeacherProps) {
  const fullName = [titleOfAddress, firstName, lastName].join(" ");
  return (
    <Card sx={{ padding: 1.5 }}>
      <CardHeader title={fullName} subheader={subject} />
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
  listOfTeachers.sort((a, b) => (a.lastName > b.lastName ? 1 : -1));
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
        <Teacher {...props} key={`${props.firstName} ${props.lastName}`} />
      ))}
    </div>
  );
}
