import React from 'react';
import { render, screen } from '@testing-library/react';
import HomepageFeatures from './index';

// Mock the SVG and Link components
jest.mock('@docusaurus/Link', () => ({
  __esModule: true,
  default: ({ children, href }: { children: React.ReactNode; href?: string }) => (
    <a href={href}>{children}</a>
  ),
}));

// Mock the CSS module
jest.mock('./styles.module.css', () => ({
  features: 'features-class',
  featureSvg: 'featureSvg-class',
}));

// Mock the SVG files
jest.mock('@site/static/img/features/undraw_happy_feeling.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="happy-feeling-svg" />,
}));

jest.mock('@site/static/img/features/undraw_pair_programming.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="pair-programming-svg" />,
}));

jest.mock('@site/static/img/features/undraw_term_sheet.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="term-sheet-svg" />,
}));

describe('HomepageFeatures', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const { container } = render(<HomepageFeatures />);
    expect(container).toBeInTheDocument();
  });

  it('renders the section element with features class', () => {
    const { container } = render(<HomepageFeatures />);

    // Query for the section element by class using container
    const sectionElement = container.querySelector('section');
    expect(sectionElement).toHaveClass('features-class');
  });

  it('renders three feature items', () => {
    const { container } = render(<HomepageFeatures />);

    // Count elements with class 'col col--4', which are the feature containers
    const featureContainers = container.querySelectorAll('.col.col--4');
    expect(featureContainers).toHaveLength(3);
  });

  it('renders the correct titles for each feature', () => {
    render(<HomepageFeatures />);

    expect(screen.getByText('Świetna atmosfera')).toBeInTheDocument();
    expect(screen.getByText('Rozwijanie zainteresowań')).toBeInTheDocument();
    expect(screen.getByText('Partnerzy')).toBeInTheDocument();
  });

  it('renders descriptions correctly', () => {
    render(<HomepageFeatures />);

    expect(
      screen.getByText(
        /Szkoła to nie tylko wyniki\. W naszym liceum liczy się przede wszystkim społeczność/
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Oprócz zajęć lekcyjnych mamy liczne kółka zainteresowań\. Poza tym organizujemy warsztaty/
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Nasi uczniowie pracują pod opieką nie tylko nauczycieli, ale też partnerów z firm i uczelni/
      )
    ).toBeInTheDocument();
  });

  it('renders links with correct href attributes', () => {
    render(<HomepageFeatures />);

    const linkElements = screen.getAllByRole('link');
    expect(linkElements).toHaveLength(3);

    expect(linkElements[0]).toHaveAttribute('href', '/docs/oferta-edukacyjna');
    expect(linkElements[1]).toHaveAttribute('href', '/docs/zajecia-dodatkowe');
    expect(linkElements[2]).toHaveAttribute('href', '/docs/nasi-partnerzy');
  });

  it('renders SVG elements for each feature', () => {
    render(<HomepageFeatures />);

    const svgs = screen.getAllByTestId(/svg/);
    expect(svgs).toHaveLength(3); // Each feature has an SVG
  });
});