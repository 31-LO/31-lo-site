import Link from '@docusaurus/Link';
import React from 'react';

type PartnerProps = {
  name: string;
  url: string;
  description: React.ReactNode;
  logo: string;
  backgroundColor?: `#${string}` | string;
};

function Partner({name, url, description, logo, backgroundColor}: PartnerProps) {
  return (
    <>
      <Link
        href={url}
        className="col"
        style={{
          textAlign: 'center',
        }}
        aria-label={`przejdź do strony ${name}`}
      >
        <img
          src={logo}
          alt=""
          width="300px"
          height="300px"
          style={
            {backgroundColor: backgroundColor || 'white', padding: '1rem'}
          }
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
    name: 'Krakowski Park Technologiczny',
    url: 'https://www.kpt.krakow.pl/',
    logo: require('./img/kpt.webp').default,
    description: (
      <>
        <p>
          Patron całego Liceum. Dzięki KPT możemy uczestniczyć we wszelkich wydarzeniach z branży gier video. Przede
          wszystkim Digital Dragons Academy oraz Krak Jam.
        </p>
        <p>
          Na Digital Dragons Academy występują osoby tworzące gry zawodowo. Możemy się uczyć od przedstawicieli CD
          Projekt Red, Techlandu, i innych gigantów polskiej sceny gamedevowej. Chłoniemy wiedzę wynikającą z
          doświadczenia praktycznego i możemy sobie lepiej wyobrazić jak wygląda praca w branży.
        </p>
        <p>
          Także pracownicy KPT prowadzą w naszej szkole zajęcia podejmując szeroki zakres tematyki gamedev.
        </p>
      </>
    ),
  },
  {
    name: 'Cisco Kraków',
    url: 'https://www.facebook.com/CiscoKrakow/',
    logo: require('./img/cisco.webp').default,
    description: (
      <>
        <p>
          Cisco opracowuje, produkuje i sprzedaje sprzęt sieciowy, oprogramowanie, sprzęt telekomunikacyjny oraz inne
          usługi i produkty zaawansowane technologicznie. Cisco specjalizuje się w konkretnych rynkach technologicznych,
          takich jak Internet rzeczy (IoT), bezpieczeństwo domen i zarządzanie energią.
        </p>
        <p>
          Pracownicy firmy Cisco prowadzą w naszej szkole szereg warsztatów: zarządzanie projektami, Arduino, Python w
          języku angielskim oraz webdesign
        </p>
      </>
    ),
  },
  {
    name: 'Draw Distance',
    url: 'https://drawdistance.dev/',
    logo: require('./img/draw-distance.webp').default,
    description: (
      <>
        <p>
          Studio game devowe znane między innymi jako autorzy gry "Vampire: The Masquerade - Coteries of New York",
          "Vampire: The Masquerade - Shadows of New York", "Serial Cleaners", czy "Serial Cleaner".
        </p>
        <p>
          Studio wspiera naszą szkołę merytorycznie poprzez przygotowanie programu nauczania dla klas o profilu
          projektowanie gier oraz przez prowadzenie warsztatów między innymi z programowania w języku C# oraz pracy
          Unity - silniku do tworzenia trójwymiarowych oraz dwuwymiarowych gier komputerowych lub innych materiałów
          interaktywnych, takich jak wizualizacje czy animacje.
        </p>
      </>
    ),
  },
  {
    name: 'Untitled Kingdom',
    url: 'https://www.untitledkingdom.com/',
    logo: require('./img/untitled-kingdom.webp').default,
    backgroundColor: "#0e0e0e",
    description: (
      <>
        <p>
          Firma tworząca oprogramowanie w branży zdrowia cyfrowego i IoT które wpływają pozytywnie na życie i zdrowie
          ludzi.
        </p>
        <p>
          Firma wspiera naszą szkołę merytorycznie poprzez przygotowanie planu nauczania dla klasy o profilu
          programowanie oraz przez prowadzenie warsztatów między innymi z metodyki organizacji pracy programisty
          (scrum/kanban), edytorów kodu, frameworku do tworzenia aplikacji internetowych, edytora PyCharm i wiele
          innych. Ponadto firma Untitled kingdom doposażyła naszą pracownię komputerową w nowoczesne superkomputery,
          które bez problemu pozwalają uczniom tworzyć między innymi grafikę 3D.
        </p>
      </>
    ),
  },
  {
    name: 'I-HT',
    url: 'https://i-ht.pl/strona-glowna',
    logo: require('./img/iht.webp').default,
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
    name: 'Salon reklamy',
    url: 'https://salonreklamy.pl/',
    logo: require('./img/salon-reklamy-square.png').default,
    description: (
      <>
        <p>
          Firma zajmuje się kompleksową obsługą reklamową biznesu. Tworzy kreatywne projekty graficzne i skuteczne
          strategie marketingowe.
        </p>
        <p>
          Poprzez współpracę z firmą nasi uczniowie poznają podstawy projektowania graficznego 2D, teorie koloru,
          kompozycji, uczą się jak przygotowywać pliki i wiele innych ważnych aspektów grafiki. Pobudzają również swoją
          kreatywność podczas ciekawych warsztatów i projektów, a energia i zapał prowadzących zaszczepia w nich miłość
          do tworzenia.
        </p>
      </>
    ),
  },
  {
    name: 'beGame',
    url: 'https://begame.pl/',
    logo: require('./img/begame.webp').default,
    description: (
      <>
        <p>
          beGame specjalizuje się w tworzeniu gier wielkoformatowych dla biznesu, marketingu oraz edukacji. Projektują i
          produkują planszówki oraz inne gry, które wspierają biznes.
        </p>
        <p>
          Dzięki współpracy z firmą beGame uczymy się jak tworzyć gry, jakie sią mechanizmy działające na graczy oraz
          jak wizualnie dotrzeć do jak największej liczby odbiorców.
        </p>
      </>
    )
  },
  {
    name: "Wyższa Szkoła Europejska im. ks. Józefa Tischnera",
    url: "https://wse.krakow.pl/",
    logo: require('./img/wse.webp').default,
    description: (
      <>
        <p>
          Pracownicy WSE sprawują patronat nad klasami gamedev. Dzięki współpracy z WSE poznajemy zasady budowania
          opowieści, konstruowania historii w scenariuszach growych, tworzenia narracji i mechaniki itp.
        </p>
      </>
    )
  },
  {
    name: 'Na Niby Studio (Make Believe Graphics)',
    url: 'https://nanibystudio.pl/',
    logo: require('./img/na-niby.webp').default,
    description: (
      <>
        <p>
          Studio graficzne specjalizujące się w tworzeniu animacji 3D, wizualizacji, wirtualnych spacerów oraz
          wirtualnej rzeczywistości.
        </p>
        <p>
          Pracownicy na Niby Studio uczą nas grafiki 3D i projektowania światów za pomocą Blendera. Nadzorują nasze
          projekty, a my z biegiem tygodni i miesięcy coraz swobodniej poruszamy sie w narzędziach do grafiki 3D.
        </p>
      </>
    ),
  },
  {
    name: "Bartosz Kamiński",
    //TODO: Bartosz Kamiński url
    url: 'https://www.linkedin.com/in/bartosz-kami%C5%84ski-622238132',
    //TODO: Bartosz Kamiński logo
    logo: null,
    description: (
      <>
        <p>
          Jedyny i niepowtarzalny. Człowiek renesansu: raper, specjalista od muzyki i dźwięku, programista.
        </p>
        <p>
          Bartosz Kamiński uczy nas silnika Unreal Engine.
        </p>
      </>
    )
  },
  {
    name: "Make Games Today",
    url: 'https://www.youtube.com/@MakeGamesToday',
    logo: require('./img/make-games-today.webp').default,
    description: (
      <>
        <p>
          Konrad Gadzina to kolejny człowiek renesansu. Od ponad 15 lat temu pracuje jako programista. Zajmował się
          robieniem aplikacji, tworzeniem gier i nauką programowania. Stworzył darmowy kurs wprowadzający podstawy C# na
          przykładzie gry roguelike. Prowadził też serię rozmów na żywo "O piątej nad graniem".
        </p>
        <p>
          Konrad Gadzina czy nas silnika Unity.
        </p>
      </>
    )
  },
  {
    name: "Kraków Miastem Startupów",
    url: 'https://kms.org.pl/',
    logo: require('./img/kms.webp').default,
    description: (
      <>
        <p>
          Celem działania Fundacji Kraków Miastem Startupów jest wspieranie startupów poprzez budowanie relacji miedzy
          nimi a biznesem, administracją rządową oraz liceami i uczelniami wyższymi. Fundacja podejmuje także działania
          szkoleniowe i edukacyjne z zakresu przedsiębiorczości.
        </p>
        <p>
          Dzięki współpracy z Fundacją uczymy się pracować w projektach, rozwijać swoją przedsiębiorczość i poznawać
          tajniki prowadzenia firm. Uczniowie biorą również udział w ciekawych hackhatonach projektów społecznych i
          edukacyjnych.
        </p>
      </>
    )
  },
  {
    name: "EAR",
    url: 'https://earear.pl/',
    logo: require('./img/ear.webp').default,
    description: (
      <>
        <p>
          EAR to Eksperymentalna Agencja Reklamowa skupiająca pasjonatów zakręconych na punkcie marketingu.
        </p>
        <p>
          Współpracując z naszym Liceum EAR prowadzi warsztaty i pomaga rozwijać się naszym uczniom w zakresie szeroko
          pojętego marketingu - jak content, social media, UX, grafika, wideo/animacje, copywriting.
        </p>
      </>
    )
  },
  {
    name: "Krakowski Świstak",
    url: 'https://www.swistak-krakow.pl/',
    logo: require('./img/swistak.webp').default,
    description: (
      <>
        <p>
          Krakowski Świstak to konsultant strategii w biznesie.
        </p>
        <p>
          Świstak prowadzi z naszą młodzieżą warsztaty rozwijające ich umiejętności zarządzania, planowania, prowadzenia
          projektów i firmy. Jeśli jest wśród naszych uczniów potencjał na tech startup to znajdzie go i rozwinie
          właśnie Świstak!
        </p>
      </>
    )
  },
  {
    name: "Zakład Technologii Gier Wydziału Fizyki, Astronomii i Informatyki Stosowanej Uniwersytetu Jagiellońskiego",
    url: 'http://www.ztg.fais.uj.edu.pl/',
    logo: require('./img/uj.webp').default,
    description: (
      <>
        Pracownicy UJ sprawują patronat nad klasami gamedev. Na zajęciach pracujemy w silniku Godot.
      </>
    )
  },
  {
    name: "proAutomator",
    url: 'https://www.proautomator.pl/',
    logo: require('./img/proautomator.webp').default,
    backgroundColor: "#080012",
    description: (
      <>
        <p>
          proAutomator specjalizuje się w rozwiązaniach z zakresu automatyzacji i AI dla małych i średnich firm w
          obszarze B2B. proAutomator łączy doświadczenie w biznesie, automatyzacji i narzędziach AI, aby pomóc firmom
          B2B obniżyć koszty i uwolnić czas na kreatywność i produktywność. proAutomator wierzy, że poprzez
          automatyzację procesów biznesowych i integrację ze sztuczną inteligencją można wzmocnić polskie firmy na rynku
          B2B wobec rosnących kosztów i biurokracji, sprawiając, że będą bardziej rentowne i gotowe do wzrostu.
        </p>
        <p>
          Jakub Masztalski organizuje dla naszych uczniów cykliczne warsztaty pokazując wszystko z zakresu IA.
        </p>
      </>
    )
  }
]

export default function Partners() {
  return (
    <div className="container">
      {partnerList.map((partnerProps, idx) => (
        <div className="row margin-bottom--xl">
          <Partner {...partnerProps} key={idx}/>
        </div>
      ))}
    </div>
  );
}
