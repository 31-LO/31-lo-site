import React from 'react';
import styles from './CookieDialog.module.css';
import useConsent from '@site/src/hooks/useConsent';
import Dialog from '@mui/material/Dialog';

export default function CookieDialog() {
  const { consentGiven, setConsent } = useConsent();

  function handleGiveConsent() {
    setConsent('accepted');
  }

  function handleDenyConsent() {
    setConsent('denied');
  }

  return (
    <Dialog open={consentGiven !== 'pending'}>
      <div className={styles.card}>
        <div className={styles.title}>Ta strona używa "cookies" 🍪</div>
        <p>
          Cookies czyli ciasteczka to pliki umożliwiające zapisywanie informacji
          o Tobie i Twoich działaniach w Internecie. Nasza strona używa
          analityki Google'a więc Google dokłada do niej swoje pliki cookies,
          żeby realizować swoje cele biznesowe.
        </p>
        <p>
          <strong>Nie martw się</strong>, w tym momencie pliki cookies są
          wyłączone zgodnie z polityką Google'a i tak pozostanie, chyba, że
          zezwolisz na ich użycie.
        </p>
        <div className={styles.buttonBar}>
          <button
            type="button"
            className="button button--primary"
            onClick={handleGiveConsent}
          >
            Zezwalaj na pliki cookies
          </button>
          <button
            type="button"
            className="button button--secondary"
            onClick={handleDenyConsent}
          >
            Zablokuj cookies
          </button>
        </div>
      </div>
    </Dialog>
  );
}
