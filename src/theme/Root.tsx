import React, { useEffect } from 'react';
import '@fontsource/open-sans';

// Default implementation, that you can customize
export default function Root({ children }) {
  useEffect(() => {
    const { hostname, protocol, href } = window.location;
    if (hostname !== 'localhost' && protocol !== 'http:') {
      window.location.replace(href.replace('http:', 'https:'));
    }
  }, []);
  return <>{children}</>;
}
