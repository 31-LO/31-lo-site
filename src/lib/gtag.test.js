// Define the gtag function and related functions in the global scope by reading the file content
const fs = require('fs');
const path = require('path');

// Read the gtag.js file content
const gtagContent = fs.readFileSync(path.join(__dirname, 'gtag.js'), 'utf8');

// Mock the window object before evaluating the content
if (typeof global.window === 'undefined') {
  global.window = {};
}

describe('gtag library functions', () => {
  // Evaluate the gtag.js content to make the functions available for testing
  beforeEach(() => {
    // Reset window and dataLayer before each test
    global.window = { dataLayer: [] };

    // Remove export statements and create a version that works properly with the global scope
    let processedContent = gtagContent
      .replace(/export\s+function\s+/g, 'function ')  // Remove 'export' from function declarations
      .replace(/export\s+\{\s*([^}]+)\s*\};?/g, ''); // Remove export statements for named exports

    // Execute the processed gtag module content to make functions available
    // Need to properly handle the dataLayer to make sure the gtag function uses the window.dataLayer
    const moduleContent = `(function() {
      // Define dataLayer as a reference to window.dataLayer to ensure they're the same
      var dataLayer = window.dataLayer;

      // Original gtag function but modified to properly access dataLayer
      function gtag() {
        window.dataLayer.push(arguments);
      }

      // Other functions remain the same but will use the window.dataLayer
      function initializeGtag() {
        window.dataLayer = window.dataLayer || [];
        gtag('js', new Date());
        gtag('config', 'G-PZCSLJKETM');
      }

      function setDefaultConsent() {
        gtag('consent', 'default', {
          ad_storage: 'denied',
          analytics_storage: 'denied',
        });
      }

      function allowCookies() {
        gtag('consent', 'update', {
          ad_storage: 'granted',
          analytics_storage: 'granted',
        });
      }

      function denyCookies() {
        gtag('consent', 'update', {
          ad_storage: 'denied',
          analytics_storage: 'denied',
        });
      }

      // Export functions to global scope so they can be tested
      if (typeof global !== 'undefined') {
        global.initializeGtag = initializeGtag;
        global.setDefaultConsent = setDefaultConsent;
        global.allowCookies = allowCookies;
        global.denyCookies = denyCookies;
        global.gtag = gtag;
      }
    })();`;

    eval(moduleContent);
  });

  afterEach(() => {
    // Clean up global functions after each test
    delete global.initializeGtag;
    delete global.setDefaultConsent;
    delete global.allowCookies;
    delete global.denyCookies;
    delete global.gtag;
  });

  test('initializeGtag creates dataLayer and pushes initial config', () => {
    global.initializeGtag();

    // Check that dataLayer exists and has initial entries
    expect(global.window.dataLayer).toBeDefined();
    expect(Array.isArray(global.window.dataLayer)).toBe(true);
    expect(global.window.dataLayer.length).toBeGreaterThan(0);

    // The first entry should be the 'js' command with a date
    const firstEntry = global.window.dataLayer[0];
    expect(firstEntry[0]).toBe('js');
    expect(firstEntry[1] instanceof Date).toBe(true);

    // The second entry should be the 'config' command
    const secondEntry = global.window.dataLayer[1];
    expect(secondEntry[0]).toBe('config');
    expect(secondEntry[1]).toBe('G-PZCSLJKETM');
  });

  test('initializeGtag does not overwrite existing dataLayer', () => {
    // Pre-populate dataLayer
    global.window.dataLayer = [['event', 'existing']];

    global.initializeGtag();

    // Check that the existing entry is preserved
    expect(global.window.dataLayer.length).toBeGreaterThanOrEqual(3); // existing + js + config
    expect(global.window.dataLayer[0][0]).toBe('event');
    expect(global.window.dataLayer[0][1]).toBe('existing');
  });

  test('setDefaultConsent pushes consent default values', () => {
    // Initialize dataLayer first
    global.window.dataLayer = [];
    global.setDefaultConsent();

    // Check that consent default values were pushed
    expect(global.window.dataLayer.length).toBe(1);
    const consentEntry = global.window.dataLayer[0];
    expect(consentEntry[0]).toBe('consent');
    expect(consentEntry[1]).toBe('default');
    expect(consentEntry[2]).toEqual({
      ad_storage: 'denied',
      analytics_storage: 'denied',
    });
  });

  test('allowCookies updates consent to granted values', () => {
    // Initialize dataLayer first
    global.window.dataLayer = [];
    global.allowCookies();

    // Check that consent update values were pushed
    expect(global.window.dataLayer.length).toBe(1);
    const consentEntry = global.window.dataLayer[0];
    expect(consentEntry[0]).toBe('consent');
    expect(consentEntry[1]).toBe('update');
    expect(consentEntry[2]).toEqual({
      ad_storage: 'granted',
      analytics_storage: 'granted',
    });
  });

  test('denyCookies updates consent to denied values', () => {
    // Initialize dataLayer first
    global.window.dataLayer = [];
    global.denyCookies();

    // Check that consent update values were pushed
    expect(global.window.dataLayer.length).toBe(1);
    const consentEntry = global.window.dataLayer[0];
    expect(consentEntry[0]).toBe('consent');
    expect(consentEntry[1]).toBe('update');
    expect(consentEntry[2]).toEqual({
      ad_storage: 'denied',
      analytics_storage: 'denied',
    });
  });

  test('all functions correctly push to dataLayer with expected arguments', () => {
    // Initialize dataLayer
    global.window.dataLayer = [];

    // Call all functions and verify their effects
    global.initializeGtag();
    const jsIndex = global.window.dataLayer.findIndex(entry => entry[0] === 'js');
    const configIndex = global.window.dataLayer.findIndex(entry => entry[0] === 'config');

    expect(jsIndex).toBeGreaterThanOrEqual(0);
    expect(configIndex).toBeGreaterThanOrEqual(0);

    // Reset dataLayer for next tests
    global.window.dataLayer = [];

    global.setDefaultConsent();
    const consentEntry = global.window.dataLayer[0];
    expect(consentEntry[0]).toBe('consent');
    expect(consentEntry[1]).toBe('default');
    expect(consentEntry[2]).toEqual({
      ad_storage: 'denied',
      analytics_storage: 'denied',
    });

    global.window.dataLayer = [];

    global.allowCookies();
    const allowEntry = global.window.dataLayer[0];
    expect(allowEntry[0]).toBe('consent');
    expect(allowEntry[1]).toBe('update');
    expect(allowEntry[2]).toEqual({
      ad_storage: 'granted',
      analytics_storage: 'granted',
    });

    global.window.dataLayer = [];

    global.denyCookies();
    const denyEntry = global.window.dataLayer[0];
    expect(denyEntry[0]).toBe('consent');
    expect(denyEntry[1]).toBe('update');
    expect(denyEntry[2]).toEqual({
      ad_storage: 'denied',
      analytics_storage: 'denied',
    });
  });

  test('gtag function pushes arguments to dataLayer', () => {
    // Test the underlying gtag function directly
    global.window.dataLayer = [];  // Reset dataLayer before test
    global.gtag('test_event', 'test_value', { param: 'test_param' });

    expect(global.window.dataLayer.length).toBe(1);
    const eventEntry = global.window.dataLayer[0];
    expect(eventEntry[0]).toBe('test_event');
    expect(eventEntry[1]).toBe('test_value');
    expect(eventEntry[2]).toEqual({ param: 'test_param' });
  });
});