import React from 'react';
import styles from './NoticeBanner.module.css';

export default function NoticeBanner() {
  return (
    <div className={styles.noticeBanner}>
      <div className="container">
        <h2 className={styles.noticeText}>
          <a href="https://www.facebook.com/events/2105927590176384">
            🎉 Zapraszamy na dzień otwarty 21 marca 2026!!!
          </a>
        </h2>
      </div>
    </div>
  );
}

