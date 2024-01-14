import '@fontsource/open-sans';
import { initializeGtag, setDefaultConsent } from '@site/src/lib/gtag';
import { useEffect } from 'react';
import CookieDialog from '../components/CookieDialog/CookieDialog';

export default function Root({ children }) {
  useEffect(() => {
    initializeGtag();
    setDefaultConsent();
  }, []);

  return (
    <>
      {children}
      <CookieDialog />
    </>
  );
}
