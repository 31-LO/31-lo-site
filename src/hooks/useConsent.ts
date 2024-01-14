import { useEffect, useState } from 'react';
import { allowCookies, denyCookies } from '../lib/gtag';

const consentLocalStorageKey = 'cookie-consent';

type Consent = 'accepted' | 'denied' | 'pending';

function getStoredConsent(): Consent {
  return localStorage.getItem(consentLocalStorageKey) as Consent;
}

export default function useConsent() {
  const [consentGiven, setConsentGiven] = useState<Consent>(undefined);

  useEffect(() => {
    const storedConsent = getStoredConsent();

    if (!storedConsent) {
      setConsentGiven('pending');
    } else if (consentGiven !== storedConsent) {
      setConsentGiven(storedConsent);
    }
  }, []);

  useEffect(() => {
    if (consentGiven === 'accepted') {
      allowCookies();
    }

    if (consentGiven === 'denied') {
      denyCookies();
    }

    const storedConsent = getStoredConsent();
    if (storedConsent !== consentGiven && consentGiven !== undefined) {
      localStorage.setItem(consentLocalStorageKey, `${consentGiven}`);
    }
  }, [consentGiven]);

  function setConsent(value: Consent): void {
    if (consentGiven !== value) {
      setConsentGiven(value);
    }
  }

  return {
    consentGiven,
    setConsent,
  };
}
