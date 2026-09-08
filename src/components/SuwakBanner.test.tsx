import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the static asset imports before importing the component
jest.mock('@site/static/img/projekty/su-wak.webp', () => ({
  default: 'mock-webp-image-path'
}));

jest.mock('@site/static/img/projekty/su-wak-uczestniczy.jpg', () => ({
  default: 'mock-jpg-image-path'
}));

// Now import the component after setting up the mocks
import SuwakBanner from './SuwakBanner';

describe('SuwakBanner', () => {
  it('renders without crashing', () => {
    expect(() => {
      render(<SuwakBanner />);
    }).not.toThrow();
  });

  it('renders two images', () => {
    render(<SuwakBanner />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
  });

  it('renders images with correct alt attributes', () => {
    render(<SuwakBanner />);

    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute(
      'alt',
      'szkoła realizuje projekt samorządowy w ramach programu wsparcia samorządów uczniowskich su-w-ak'
    );
    expect(images[1]).toHaveAttribute(
      'alt',
      'szkoła uczestniczy w programie wsparcia Samorządów uczniowskich su-w-ak'
    );
  });

  it('renders images with correct sources', () => {
    render(<SuwakBanner />);

    const images = screen.getAllByRole('img');
    // With the module mapping, images will be replaced with string mocks
    expect(images[0]).toHaveAttribute('src', 'mock-webp-image-path');
    expect(images[1]).toHaveAttribute('src', 'mock-jpg-image-path');
  });

  it('renders images in a grid layout container', () => {
    render(<SuwakBanner />);

    // The Box component wraps the images in a grid layout
    // Find the container with MUI Box classes that holds the images
    const container = document.querySelector('.MuiBox-root');
    expect(container).toBeInTheDocument();

    const images = screen.getAllByRole('img');
    expect(images.length).toBe(2);

    // Verify that images are direct children of the MUI Box container
    images.forEach(img => {
      expect(img.parentElement).toBe(container);
    });
  });
});