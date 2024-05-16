function gtag() {
  dataLayer.push(arguments);
}

export function initializeGtag() {
  window.dataLayer = window.dataLayer || [];

  gtag('js', new Date());
  gtag('config', 'G-PZCSLJKETM');
}

export function setDefaultConsent() {
  gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
  });
}

export function allowCookies() {
  gtag('consent', 'update', {
    ad_storage: 'granted',
    analytics_storage: 'granted',
  });
}

export function denyCookies() {
  gtag('consent', 'update', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
  });
}
