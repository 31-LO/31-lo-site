import Link from '@docusaurus/Link';
import styles from './NoticeBanner.module.css';

interface NoticeBannerProps {
  text: string;
  href?: string;
}

export default function NoticeBanner({ text, href }: NoticeBannerProps) {
  return (
    <div className={styles.noticeBanner}>
      <div className="container">
        <h2 className={styles.noticeText}>
          {href ? <Link href={href}>{text}</Link> : text}
        </h2>
      </div>
    </div>
  );
}