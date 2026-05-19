const mockConsentState = { consentGiven: 'pending', setConsent: jest.fn() };

const useConsent = jest.fn(() => mockConsentState);

export default useConsent;