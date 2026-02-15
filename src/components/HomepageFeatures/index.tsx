import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  src: string;
  alt: string;
  description: JSX.Element;
  href: string;
  linkDescription: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Świetna atmosfera',
    description: (
      <>
        <p>
          Szkoła to nie tylko wyniki. W naszym liceum liczy się przede wszystkim
          społeczność i dlatego stawiamy na otwartą atmosferę w której każdy
          może się czuć bezpiecznie.
        </p>
      </>
    ),
    src: '/img/features/atmosfera.png',
    alt: 'Weseli uczniowie pozują do zdjęcia z nauczycielami i dyrekcją',
    href: '/docs/profile#co-wyróżnia-nasze-liceum',
    linkDescription: 'Zobacz ofertę edukacyjną',
  },
  {
    title: 'Rozwijanie zainteresowań',
    description: (
      <>
        <p>
          Oprócz zajęć lekcyjnych mamy liczne kółka zainteresowań. Poza tym
          organizujemy warsztaty, hakatony i projekty.
        </p>
      </>
    ),
    src: '/img/features/rozwijanie-zainteresowan.png',
    alt: 'Uczeń pracuje nad grą używając Unreal Engine',
    href: '/docs/profile#zajęcia-dodatkowe',
    linkDescription: 'Zobacz listę zajęć dodatkowych',
  },
  {
    title: 'Partnerzy',
    description: (
      <>
        <p>
          Nasi uczniowie pracują pod opieką nie tylko nauczycieli, ale też
          partnerów z firm i uczelni.
        </p>
      </>
    ),
    src: '/img/features/partnerzy.png',
    alt: 'Uczestnicy warsztatów z naszym partnerem - firmą Cisco',
    href: '/docs/nasi-partnerzy',
    linkDescription: 'Poczytaj o naszych partnerach',
  },
];

function Feature({
  title,
  src,
  alt,
  href,
  linkDescription,
  description,
}: FeatureItem) {
  return (
    <div className={clsx(styles.feature)}>
      <div>
        <img src={src} alt={alt} />
        <h2>{title}</h2>
        <div>{description}</div>
      </div>
      <Link className="button button--primary" to={href}>
        {linkDescription}
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className="container">
      <section className={styles.features}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </section>
    </div>
  );
}
