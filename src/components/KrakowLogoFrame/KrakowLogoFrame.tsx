import styles from './KrakowLogoFrame.module.css';

type KrakowLogoFrameProps = {
  children: JSX.Element;
};

export default function KrakowLogoFrame({ children }: KrakowLogoFrameProps) {
  return (
    <div className={styles.frame}>
      <img alt="" src="/img/logo-krakow.png" className={styles.krakowLogo} />
      {children}
    </div>
  );
}
