import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CookieDialog from './CookieDialog';
import useConsent from '@site/src/hooks/useConsent';

// Mock the useConsent hook
jest.mock('@site/src/hooks/useConsent');

const mockSetConsent = jest.fn();

describe('CookieDialog', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useConsent as jest.Mock).mockReturnValue({
      consentGiven: 'pending',
      setConsent: mockSetConsent,
    });
  });

  it('should not render when consent is not pending', () => {
    // Mock the hook to return accepted consent
    (useConsent as jest.Mock).mockReturnValue({
      consentGiven: 'accepted',
      setConsent: mockSetConsent,
    });

    render(<CookieDialog />);

    expect(screen.queryByText(/Ta strona używa "cookies"/)).not.toBeInTheDocument();
  });

  it('should render when consent is pending', () => {
    // Mock the hook to return pending consent
    (useConsent as jest.Mock).mockReturnValue({
      consentGiven: 'pending',
      setConsent: mockSetConsent,
    });

    render(<CookieDialog />);

    expect(screen.getByText(/Ta strona używa "cookies"/)).toBeInTheDocument();
    expect(screen.getByText(/pliki umożliwiające zapisywanie/)).toBeInTheDocument(); // Part of the paragraph text
    expect(screen.getByText(/Zezwalaj na pliki cookies/)).toBeInTheDocument();
    expect(screen.getByText(/Zablokuj cookies/)).toBeInTheDocument();
  });

  it('should call setConsent with "accepted" when "Zezwalaj na pliki cookies" button is clicked', () => {
    render(<CookieDialog />);

    const allowButton = screen.getByText(/Zezwalaj na pliki cookies/);
    fireEvent.click(allowButton);

    expect(mockSetConsent).toHaveBeenCalledWith('accepted');
  });

  it('should call setConsent with "denied" when "Zablokuj cookies" button is clicked', () => {
    render(<CookieDialog />);

    const denyButton = screen.getByText(/Zablokuj cookies/);
    fireEvent.click(denyButton);

    expect(mockSetConsent).toHaveBeenCalledWith('denied');
  });

  it('should not show buttons when consent is already given', () => {
    // Mock the hook to return accepted consent
    (useConsent as jest.Mock).mockReturnValue({
      consentGiven: 'accepted',
      setConsent: mockSetConsent,
    });

    render(<CookieDialog />);

    expect(screen.queryByText(/Zezwalaj na pliki cookies/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Zablokuj cookies/)).not.toBeInTheDocument();
  });
});