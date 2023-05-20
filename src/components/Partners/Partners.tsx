import Link from "@docusaurus/Link";
import React from "react";
import uk from "./img/untitled-kingdom.webp";
import frozenWay from "./img/frozen-way.webp";
import drawDistance from "./img/draw-distance.webp";
import kpt from "./img/kpt.webp";
import uj from "./img/uj.webp";
import naniby from "./img/na-niby.webp";
import cisco from "./img/cisco.webp";
import iht from "./img/iht.webp";
import kms from "./img/kms.webp";
import ear from "./img/ear.webp";
import swistak from "./img/swistak.webp";

type PartnerProps = {
  name: string;
  url: string;
  description: React.ReactNode;
  logo: string;
};

function Partner({ name, url, description, logo }: PartnerProps) {
  return (
    <>
      <Link
        href={url}
        className="col"
        style={{
          textAlign: "center",
        }}
      >
        <img
          src={logo}
          alt=""
          width="300px"
          height="300px"
          style={{ backgroundColor: "white", padding: "1rem" }}
        />
      </Link>
      <section className="col">
        <h2>
          <Link href={url}>{name}</Link>
        </h2>
        <div>{description}</div>
      </section>
    </>
  );
}

const partnerList: PartnerProps[] = [
  {
    name: "Untitled Kingdom",
    url: "https://www.untitledkingdom.com/",
    logo: uk,
    description: (
      <>
        <p>
          Firma tworząca oprogramowanie w branży zdrowia cyfrowego i IoT które
          wpływają pozytywnie na życie i zdrowie ludzi.
        </p>
        <p>
          Firma wspiera naszą szkołę merytorycznie poprzez przygotowanie planu
          nauczania dla klasy o profilu programowanie oraz przez prowadzenie
          warsztatów między innymi z metodyki organizacji pracy programisty
          (scrum/kanban), edytorów kodu, frameworku do tworzenia aplikacji
          internetowych, edytora PyCharm i wiele innych. Ponadto firma Untitled
          kingdom doposażyła naszą pracownię komputerową w nowoczesne
          superkomputery które bez problemu pozwalają uczniom tworzyć między
          innymi grafikę 3D. Wideo z unboxingu zobaczyć można na licealnym
          facebooku.
        </p>
      </>
    ),
  },
  {
    name: "Frozen Way",
    url: "https://frozenway.games/",
    logo: frozenWay,
    description: (
      <>
        <p>
          Frozen Way to studio deweloperskie i wydawca gier z Krakowa. Są znani
          ze współtworzenia House Flipper wraz z jego DLC, a także z stworzenia
          i wydania House Flipper VR na Steam. Koncentrują się na rynku PC oraz
          konsolach nowej generacji. Są 30 osobową grupą pogodnych ludzi z pasją
          do gier wideo. Gamedev to ich styl życia i filozofia, więc wierzą, że
          nie ma nic lepszego niż widzieć, że ich kreacje przynoszą społeczności
          mnóstwo radości.
        </p>
        <p>
          Firma Frozen Way wspiera warsztaty z silnika Unreal Engine prowadzone
          w naszej szkole przez niezastąpionego Bartosza Kamińskiego.
        </p>
      </>
    ),
  },
  {
    name: "Draw Distance",
    url: "https://drawdistance.dev/",
    logo: drawDistance,
    description: (
      <>
        <p>
          Studio game devowe znane między innymi jako autorzy gry "Vampire: The
          Masquerade - Coteries of New York".
        </p>
        <p>
          Studio wspiera naszą szkołę merytorycznie poprzez przygotowanie
          programu nauczania dla klas o profilu projektowanie gier oraz przez
          prowadzenie warsztatów między innymi z programowania w języku C# oraz
          pracy Unity - silniku do tworzenia trójwymiarowych oraz dwuwymiarowych
          gier komputerowych lub innych materiałów interaktywnych, takich jak
          wizualizacje czy animacje.
        </p>
      </>
    ),
  },
  {
    name: "Krakowski Park Technologiczny",
    url: "https://www.kpt.krakow.pl/",
    logo: kpt,
    description: (
      <>
        <p>
          Patron całego Liceum. Dzięki KPT możemy za darmo uczestniczyć we
          wszelkich wydarzeniach z branży gier video - przede wszystkim Digital
          Dragons Academy.
        </p>
        <p>
          Na Digital Dragons Academy występują osoby tworzące gry zawodowo.
          Możemy się uczyć od przedstawicieli CD Projekt Red, Techlandu, i
          innych gigantów polskiej sceny game devowej. Chłoniemy wiedzę
          wynikającą z doświadczenia praktycznego i możemy sobie lepiej
          wyobrazić jak wygląda praca w branży.
        </p>
      </>
    ),
  },
  {
    name: "UJ Wydz. Fizyki, Astronomii i Informatyki Stosowanej, Zakład Technologii Gier",
    url: "http://www.ztg.fais.uj.edu.pl/",
    logo: uj,
    description: (
      <>
        <p>
          Pracownicy zakładu zapraszają naszych uczniów na zajęcia na kampusie
          UJ. Pracowniczy Uniwersytetu sprawują opiekę metodyczną nad profilem
          gamedev.
        </p>
        <p>
          Na zajęciach, między innymi, pracujemy w silniku Godot i tworzymy
          światy 2D i 3D. Maczamy też palce w API Godota (GDScript, C#, C++).
        </p>
      </>
    ),
  },
  {
    name: "Na Niby Studio (Make Believe Graphics)",
    url: "https://nanibystudio.pl/",
    logo: naniby,
    description: (
      <>
        <p>
          Studio graficzne specjalizujące się w wizualizacjach architektury i
          aranżacji wnętrz.
        </p>
        <p>
          Uczą nas grafiki 3D i projektowania światów za pomocą Blendera.
          Pracownicy studia nadzorują nasze projekty, a my z biegiem tygodni i
          miesięcy coraz swobodniej poruszamy sie w narzędziach do grafiki 3D.
        </p>
      </>
    ),
  },
  {
    name: "Cisco Kraków",
    url: "https://www.facebook.com/CiscoKrakow/",
    logo: cisco,
    description: (
      <>
        <p>
          Cisco opracowuje, produkuje i sprzedaje sprzęt sieciowy,
          oprogramowanie, sprzęt telekomunikacyjny oraz inne usługi i produkty
          zaawansowane technologicznie. Cisco specjalizuje się w konkretnych
          rynkach technologicznych, takich jak Internet rzeczy (IoT),
          bezpieczeństwo domen i zarządzanie energią.
        </p>
        <p>
          Pracownicy firmy Cisco prowadzą w naszej szkole szereg warsztatów:
          ITIL (metodyka zarządzania procesami IT), zarządzanie, Arduino, oraz
          Python w języku polskim jak i angielskim.
        </p>
      </>
    ),
  },
  {
    name: "i-ht",
    url: "https://i-ht.pl/strona-glowna",
    logo: iht,
    description: (
      <>
        <p>
          Firma tworząca rozwiązania z zakresu IT. Oferuje naszym uczniom kurs
          planowania sieci komputerowych.
        </p>
        <p>
          Dzięki tej współpracy uczymy się różnicy między "IT" a "softwarem".
          Poza tym, jeśli kiedyś przyjdzie nam zakładać własne studio będziemy
          mieli lepszy start z własną infrastrukturą.
        </p>
      </>
    ),
  },
  {
    name: "Kraków Miastem Startupów",
    url: "https://kms.org.pl/",
    logo: kms,
    description: (
      <>
        <p>
          Celem działania Fundacji Kraków Miastem Startupów jest wspieranie
          startupów poprzez budowanie relacji miedzy nimi a biznesem,
          administracją rządową i uczelniami wyższymi. Fundacja podejmuje także
          działania szkoleniowe i edukacyjne z zakresu przedsiębiorczości.
        </p>
        <p>
          Dzięki współpracy z Funcacją uczymy się pracować w projektach,
          rozwijać swoją przedsiębiorczość i poznawać tajniki prowadzenia firm.
          Uczniowie biorą również udział w ciekawych hackhatonach projektów
          społecznych i edukacyjnych.
        </p>
      </>
    ),
  },
  {
    name: "EAR",
    url: "https://earear.pl/",
    logo: ear,
    description: (
      <>
        <p>
          EAR to Eksperymentalna Agencja Reklamowa skupiająca pasjonatów
          zakręconych na punkcie marketingu.
        </p>
        <p>
          Współpracując z naszym Liceum EAR prowadzi warsztaty i pomaga rozwijać
          się naszym uczniom w zakresie szeroko pojętego marketingu - jak
          content, social media, UX, grafika, wideo/animacje, copywriting.
        </p>
      </>
    ),
  },
  {
    name: "Krakowski Świstak",
    url: "https://www.swistak-krakow.pl/",
    logo: swistak,
    description: (
      <>
        <p>Krakowki Świstak to konsultant strategii w biznesie.</p>
        <p>
          Świstak prowadzi z naszą młodzieżą warsztaty rozwijające ich
          umiejętności zarządzania, planowania, prowadzenia projektów i firmy.
          Jeśli jest wśód naszych uczniów potencjał na tech startup to znajdzie
          go i rozwinie właśnie Świstak!
        </p>
      </>
    ),
  },
];

export default function Partners() {
  return (
    <div className="container">
      {partnerList.map((partnerProps, idx) => (
        <div className="row margin-bottom--xl">
          <Partner {...partnerProps} key={idx} />
        </div>
      ))}
    </div>
  );
}
