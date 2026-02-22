import Link from '@docusaurus/Link';
import React from 'react';

type PartnerProps = {
  name: string;
  url: string;
  description: React.ReactNode;
  logo: string;
  backgroundColor?: React.CSSProperties['color'];
};

function Partner({
  name,
  url,
  description,
  logo,
  backgroundColor,
}: PartnerProps) {
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
          style={{
            backgroundColor: backgroundColor || 'white',
            padding: backgroundColor !== 'transparent' && '1rem',
            borderRadius: '0.5rem',
          }}
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
          Patron całego Liceum. Dzięki KPT możemy uczestniczyć we wszelkich
          wydarzeniach z branży gier video. Przede wszystkim Digital Dragons
          Academy oraz Krak Jam.
        </p>
        <p>
          Na Digital Dragons Academy występują osoby tworzące gry zawodowo.
          Możemy się uczyć od przedstawicieli CD Projekt Red, Techlandu, i
          innych gigantów polskiej sceny gamedevowej. Chłoniemy wiedzę
          wynikającą z doświadczenia praktycznego i możemy sobie lepiej
          wyobrazić jak wygląda praca w branży.
        </p>
        <p>
          Także pracownicy KPT prowadzą w naszej szkole zajęcia podejmując
          szeroki zakres tematyki gamedev.
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
          Cisco opracowuje, produkuje i sprzedaje sprzęt sieciowy,
          oprogramowanie, sprzęt telekomunikacyjny oraz inne usługi i produkty
          zaawansowane technologicznie. Cisco specjalizuje się w konkretnych
          rynkach technologicznych, takich jak Internet rzeczy (IoT),
          bezpieczeństwo domen i zarządzanie energią.
        </p>
        <p>
          Pracownicy firmy Cisco prowadzą w naszej szkole szereg warsztatów:
          zarządzanie projektami, Arduino, Python w języku angielskim oraz
          webdesign.
        </p>
      </>
    ),
  },
  {
    name: 'Nokia',
    url: 'https://www.nokia.com',
    logo: require('./img/nokia.png').default,
    description: (
      <>
        <p>
          Nokia to obecnie globalny lider w dziedzinie infrastruktury sieciowej,
          technologii telekomunikacyjnych oraz rozwiązań opartych na sztucznej
          inteligencji (AI).
        </p>

        <p>
          Programiści z reh firmy prowadzą dla naszych uczniów bezpłatne
          warsztaty z programowania w języku C++.
        </p>
      </>
    ),
  },
  {
    name: 'NextGenIT',
    url: 'https://nextgenitinfo.pl/',
    logo: require('./img/nextgenit.png').default,
    description: (
      <>
        <p>
          NextGenIT to cykl spotkań, który inspiruje młode pokolenie do
          odkrywania, tworzenia i rozwoju w świecie nowych technologii. Łączymy
          przyszłych i obecnych specjalistów IT, tworząc przestrzeń wymiany
          wiedzy, doświadczeń i inspiracji.
        </p>

        <p>
          Jesteśmy szkołą partnerską NextGenIT. Nasi uczniowie regularnie
          uczestniczą w meetupach i warsztatach ze specjalistami z branży IT.
        </p>
      </>
    ),
  },
  {
    name: 'Bartosz Kamiński',
    url: 'https://www.youtube.com/user/KamskiStudio',
    logo: require('./img/bartosz-kaminski.webp').default,
    backgroundColor: 'transparent',
    description: (
      <>
        <p>
          Jedyny i niepowtarzalny. Człowiek renesansu: raper, specjalista od
          muzyki i dźwięku, programista.
        </p>
        <p>Bartosz Kamiński uczy nas silnika Unreal Engine.</p>
      </>
    ),
  },
  {
    name: 'Make Games Today',
    url: 'https://www.youtube.com/@MakeGamesToday',
    logo: require('./img/make-games-today.webp').default,
    description: (
      <>
        <p>
          Konrad Gadzina to kolejny człowiek renesansu. Od ponad 15 lat temu
          pracuje jako programista. Zajmował się robieniem aplikacji, tworzeniem
          gier i nauką programowania. Stworzył darmowy kurs wprowadzający
          podstawy C# na przykładzie gry roguelike. Prowadził też serię rozmów
          na żywo "O piątej nad graniem".
        </p>
        <p>Konrad Gadzina czy nas silnika Unity.</p>
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
    name: 'beGame',
    url: 'https://begame.pl/',
    logo: require('./img/begame.webp').default,
    description: (
      <>
        <p>
          beGame specjalizuje się w tworzeniu gier wielkoformatowych dla
          biznesu, marketingu oraz edukacji. Projektują i produkują planszówki
          oraz inne gry, które wspierają biznes.
        </p>
        <p>
          Dzięki współpracy z firmą beGame uczymy się jak tworzyć gry, jakie sią
          mechanizmy działające na graczy oraz jak wizualnie dotrzeć do jak
          największej liczby odbiorców.
        </p>
      </>
    ),
  },
  {
    name: 'Wyższa Szkoła Europejska im. ks. Józefa Tischnera',
    url: 'https://wse.krakow.pl/',
    logo: require('./img/wse.webp').default,
    description: (
      <>
        <p>
          Pracownicy WSE sprawują patronat nad klasami gamedev. Dzięki
          współpracy z WSE poznajemy zasady budowania opowieści, konstruowania
          historii w scenariuszach growych, tworzenia narracji i mechaniki itp.
        </p>
      </>
    ),
  },
  {
    name: 'Kraków Miastem Startupów',
    url: 'https://kms.org.pl/',
    logo: require('./img/kms.webp').default,
    description: (
      <>
        <p>
          Celem działania Fundacji Kraków Miastem Startupów jest wspieranie
          startupów poprzez budowanie relacji miedzy nimi a biznesem,
          administracją rządową oraz liceami i uczelniami wyższymi. Fundacja
          podejmuje także działania szkoleniowe i edukacyjne z zakresu
          przedsiębiorczości.
        </p>
        <p>
          Dzięki współpracy z Fundacją uczymy się pracować w projektach,
          rozwijać swoją przedsiębiorczość i poznawać tajniki prowadzenia firm.
          Uczniowie biorą również udział w ciekawych hackhatonach projektów
          społecznych i edukacyjnych.
        </p>
      </>
    ),
  },
  {
    name: 'EAR',
    url: 'https://earear.pl/',
    logo: require('./img/ear.webp').default,
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
    name: 'Krakowski Świstak',
    url: 'https://www.swistak-krakow.pl/',
    logo: require('./img/swistak.webp').default,
    description: (
      <>
        <p>Krakowski Świstak to konsultant strategii w biznesie.</p>
        <p>
          Świstak prowadzi z naszą młodzieżą warsztaty rozwijające ich
          umiejętności zarządzania, planowania, prowadzenia projektów i firmy.
          Jeśli jest wśród naszych uczniów potencjał na tech startup to znajdzie
          go i rozwinie właśnie Świstak!
        </p>
      </>
    ),
  },
  {
    name: 'Zakład Technologii Gier Wydziału Fizyki, Astronomii i Informatyki Stosowanej Uniwersytetu Jagiellońskiego',
    url: 'https://ztg.fais.uj.edu.pl',
    logo: require('./img/uj.webp').default,
    description: (
      <>
        Pracownicy UJ sprawują patronat nad klasami gamedev. Na zajęciach
        pracujemy w silniku Godot.
      </>
    ),
  },
  {
    name: 'proAutomator',
    url: 'https://www.proautomator.pl/',
    logo: require('./img/proautomator.webp').default,
    backgroundColor: '#080012',
    description: (
      <>
        <p>
          proAutomator specjalizuje się w rozwiązaniach z zakresu automatyzacji
          i AI dla małych i średnich firm w obszarze B2B. proAutomator łączy
          doświadczenie w biznesie, automatyzacji i narzędziach AI, aby pomóc
          firmom B2B obniżyć koszty i uwolnić czas na kreatywność i
          produktywność. proAutomator wierzy, że poprzez automatyzację procesów
          biznesowych i integrację ze sztuczną inteligencją można wzmocnić
          polskie firmy na rynku B2B wobec rosnących kosztów i biurokracji,
          sprawiając, że będą bardziej rentowne i gotowe do wzrostu.
        </p>
        <p>
          Jakub Masztalski organizuje dla naszych uczniów cykliczne warsztaty
          pokazując wszystko z zakresu AI.
        </p>
      </>
    ),
  },
];

export default function Partners() {
  return (
    <div className="container">
      {partnerList.map((partnerProps, idx) => (
        <div className="row margin-bottom--xl" key={idx}>
          <Partner {...partnerProps} key={idx} />
        </div>
      ))}
    </div>
  );
}
