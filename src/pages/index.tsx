import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./home.module.css";
import CallToAction from "@site/src/components/CallToAction";
import Announcement from "@site/src/components/Announcement";
import KrakowLogoFrame from "../components/KrakowLogoFrame/KrakowLogoFrame";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <KrakowLogoFrame>
        <div className="container">
          <div className="hero__title">
            <img
              src="img/logo.png"
              alt="XXXI Liceum Ogólnokształcące im. Romana Ingardena w Krakowie"
              width={200}
            />
          </div>
          <h1 className={clsx("hero__subtitle", styles.subtitle)}>
            {siteConfig.tagline}
          </h1>
          <div className={styles.buttons}>
            <Link
              className={"button button--secondary button--lg"}
              to="/docs/programowanie"
            >
              Programowanie
            </Link>
            <Link
              className={"button button--secondary button--lg"}
              to="/docs/game-dev"
            >
              Game dev
            </Link>
          </div>
        </div>
      </KrakowLogoFrame>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Strona startowa 👋`}
      description="Liceum Ogólnokształcące im. Romana Ingardena w Krakowie, strona domowa, rekrutacja"
    >
      <Announcement />
      <HomepageHeader />
      <main className={styles.main}>
        <HomepageFeatures />
        <CallToAction />
      </main>
    </Layout>
  );
}
