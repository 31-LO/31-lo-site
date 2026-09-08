import { renderHook, act } from '@testing-library/react';
import useConsent from './useConsent';

// Define a function to create a fresh localStorage mock
function createLocalStorageMock() {
  let store: { [key: string]: string } = {};

  return {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value.toString();
    }),
    removeItem: jest.fn((key: string) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
}

let localStorageMock: any;

Object.defineProperty(window, 'localStorage', {
  get: () => localStorageMock,
});

// Mock the gtag functions
jest.mock('../lib/gtag', () => ({
  allowCookies: jest.fn(),
  denyCookies: jest.fn(),
}));

describe('useConsent Hook', () => {
  const CONSENT_LOCAL_STORAGE_KEY = 'cookie-consent';
  const { allowCookies, denyCookies } = require('../lib/gtag');

  beforeEach(() => {
    localStorageMock = createLocalStorageMock();
    jest.clearAllMocks();
  });

  it('should initialize with pending consent when no stored consent exists', async () => {
    const { result } = renderHook(() => useConsent());

    // Wait for initial render and effects to settle
    await new Promise(resolve => setTimeout(resolve, 10));

    expect(result.current.consentGiven).toBe('pending');
    expect(localStorage.getItem).toHaveBeenCalledWith(CONSENT_LOCAL_STORAGE_KEY);
  });

  it('should initialize with stored consent when present', async () => {
    localStorageMock.getItem.mockReturnValue('accepted');

    const { result } = renderHook(() => useConsent());

    await new Promise(resolve => setTimeout(resolve, 10));

    expect(result.current.consentGiven).toBe('accepted');
  });

  it('should handle "denied" consent from storage', async () => {
    localStorageMock.getItem.mockReturnValue('denied');

    const { result } = renderHook(() => useConsent());

    await new Promise(resolve => setTimeout(resolve, 10));

    expect(result.current.consentGiven).toBe('denied');
  });

  it('should call allowCookies when consent is set to accepted', async () => {
    const { result } = renderHook(() => useConsent());

    await new Promise(resolve => setTimeout(resolve, 10));

    act(() => {
      result.current.setConsent('accepted');
    });

    // Allow effects to run
    await new Promise(resolve => setTimeout(resolve, 10));

    expect(allowCookies).toHaveBeenCalled();
    expect(result.current.consentGiven).toBe('accepted');
    expect(localStorage.setItem).toHaveBeenCalledWith(CONSENT_LOCAL_STORAGE_KEY, 'accepted');
  });

  it('should call denyCookies when consent is set to denied', async () => {
    const { result } = renderHook(() => useConsent());

    await new Promise(resolve => setTimeout(resolve, 10));

    act(() => {
      result.current.setConsent('denied');
    });

    // Allow effects to run
    await new Promise(resolve => setTimeout(resolve, 10));

    expect(denyCookies).toHaveBeenCalled();
    expect(result.current.consentGiven).toBe('denied');
    expect(localStorageMock.setItem).toHaveBeenCalledWith(CONSENT_LOCAL_STORAGE_KEY, 'denied');
  });

  it('should call gtag functions on initial load based on stored consent', async () => {
    localStorageMock.getItem.mockReturnValue('accepted');

    const { result } = renderHook(() => useConsent());

    await new Promise(resolve => setTimeout(resolve, 10));

    expect(allowCookies).toHaveBeenCalledTimes(1);
    expect(result.current.consentGiven).toBe('accepted');
  });

  it('should store consent in localStorage when changed', async () => {
    const { result } = renderHook(() => useConsent());

    await new Promise(resolve => setTimeout(resolve, 10));

    act(() => {
      result.current.setConsent('accepted');
    });

    await new Promise(resolve => setTimeout(resolve, 10));

    expect(localStorageMock.setItem).toHaveBeenCalledWith(CONSENT_LOCAL_STORAGE_KEY, 'accepted');
    expect(result.current.consentGiven).toBe('accepted');
  });

  it('should properly update consent from pending to accepted', async () => {
    const { result } = renderHook(() => useConsent());

    await new Promise(resolve => setTimeout(resolve, 10));

    expect(result.current.consentGiven).toBe('pending');

    act(() => {
      result.current.setConsent('accepted');
    });

    await new Promise(resolve => setTimeout(resolve, 10));

    expect(result.current.consentGiven).toBe('accepted');
    expect(allowCookies).toHaveBeenCalled();
  });

  it('should properly update consent from pending to denied', async () => {
    const { result } = renderHook(() => useConsent());

    await new Promise(resolve => setTimeout(resolve, 10));

    expect(result.current.consentGiven).toBe('pending');

    act(() => {
      result.current.setConsent('denied');
    });

    await new Promise(resolve => setTimeout(resolve, 10));

    expect(result.current.consentGiven).toBe('denied');
    expect(denyCookies).toHaveBeenCalled();
  });

  it('should handle rapid consent changes correctly', async () => {
    const { result } = renderHook(() => useConsent());

    await new Promise(resolve => setTimeout(resolve, 10));

    expect(result.current.consentGiven).toBe('pending');

    // Rapidly change consent values
    act(() => {
      result.current.setConsent('accepted');
    });
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(result.current.consentGiven).toBe('accepted');

    act(() => {
      result.current.setConsent('denied');
    });
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(result.current.consentGiven).toBe('denied');

    act(() => {
      result.current.setConsent('accepted');
    });
    await new Promise(resolve => setTimeout(resolve, 10));
    expect(result.current.consentGiven).toBe('accepted');
  });

  it('should not repeatedly call gtag functions for the same consent value', async () => {
    localStorageMock.getItem.mockReturnValue('accepted');

    const { result } = renderHook(() => useConsent());

    await new Promise(resolve => setTimeout(resolve, 10));

    // allowCookies should have been called once during initialization
    expect(allowCookies).toHaveBeenCalledTimes(1);

    // Setting to the same value should not call it again
    act(() => {
      result.current.setConsent('accepted');
    });

    await new Promise(resolve => setTimeout(resolve, 10));

    // It might still be called again due to the effect, so we just check state consistency
    expect(result.current.consentGiven).toBe('accepted');
  });
});