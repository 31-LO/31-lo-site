import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import KrakowLogoFrame from '@site/src/components/KrakowLogoFrame/KrakowLogoFrame';
import clsx from 'clsx';
import styles from './Home.module.css';

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <KrakowLogoFrame>
        <div className="container">
          <div className="hero__title">
            <img
              src="img/logo.png"
              alt="XXXI Liceum Ogólnokształcące im. Romana Ingardena w Krakowie"
              width={200}
            />
          </div>
          <h1 className={clsx('hero__subtitle', styles.subtitle)}>
            {siteConfig.tagline}
          </h1>
          <div className={styles.buttons}>
            <Link
              className={'button button--secondary button--lg'}
              to="/docs/profile#programowanie"
            >
              Programowanie
            </Link>
            <Link
              className={'button button--secondary button--lg'}
              to="/docs/profile#game-dev"
            >
              Game dev
            </Link>
          </div>
        </div>
      </KrakowLogoFrame>
    </header>
  );
}
