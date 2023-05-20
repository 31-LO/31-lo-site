import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Świetna atmosfera",
    Svg: require("@site/static/img/features/undraw_happy_feeling.svg").default,
    description: (
      <>
        <p>
          Szkoła to nie tylko wyniki. W naszym liceum liczy się przede wszystkim
          społeczność i dlatego stawiamy na otwartą atmosferę w której każdy
          może się czuć bezpiecznie.
        </p>
        <Link href="/docs/oferta-edukacyjna">
          Dowiedz się więcej czytając naszą ofertę edkuacyjną
        </Link>
      </>
    ),
  },
  {
    title: "Rozwijanie zainteresowań",
    Svg: require("@site/static/img/features/undraw_pair_programming.svg")
      .default,
    description: (
      <>
        <p>
          Oprócz zajęć lekcyjnych mam liczne kółka zainteresowań. Poza tym
          organizujemy warsztaty, hakatony i projekty.
        </p>
        <Link href="/docs/zajecia-dodatkowe">
          Zobacz listę zajęć dodatkowych
        </Link>
      </>
    ),
  },
  {
    title: "Partnerzy",
    Svg: require("@site/static/img/features/undraw_term_sheet.svg").default,
    description: (
      <>
        <p>
          Nasi uczniowie pracują pod opieką nie tylko nauczycieli, ale też
          partnerów z firm i uczelni.
        </p>
        <Link href="/docs/nasi-partnerzy">Poczytaj o naszych partnerach</Link>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={"row"}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
