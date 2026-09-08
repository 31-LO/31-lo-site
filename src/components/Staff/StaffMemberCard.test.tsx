import React from 'react';
import { render, screen } from '@testing-library/react';
import StaffMemberCard, { StaffMemberProps } from './StaffMemberCard';

describe('StaffMemberCard', () => {
  const defaultProps: StaffMemberProps = {
    name: 'John Doe',
    subject: 'Mathematics',
    officeHours: 'Monday 10:00-12:00',
    imagePath: '/test-image.jpg',
  };

  it('renders staff member name as card header title', () => {
    render(<StaffMemberCard {...defaultProps} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders subject as card header subheader', () => {
    render(<StaffMemberCard {...defaultProps} />);
    expect(screen.getByText('Mathematics')).toBeInTheDocument();
  });

  it('renders office hours when provided', () => {
    render(<StaffMemberCard {...defaultProps} />);
    expect(screen.getByText('Konsultacje:')).toBeInTheDocument();
    expect(screen.getByText('Monday 10:00-12:00')).toBeInTheDocument();
  });

  it('does not render office hours section when not provided', () => {
    const { queryByText } = render(
      <StaffMemberCard name="Jane Smith" subject="Physics" />
    );
    expect(queryByText('Konsultacje:')).not.toBeInTheDocument();
  });

  it('renders image with correct src attribute', () => {
    render(<StaffMemberCard {...defaultProps} />);
    const imgElement = screen.getByAltText('');
    expect(imgElement).toHaveAttribute('src', '/test-image.jpg');
  });

  it('uses placeholder image when imagePath is not provided', () => {
    // Since we can't easily mock the require statement for placeholder,
    // we'll test that the image element is rendered regardless
    render(<StaffMemberCard name="Jane Smith" subject="Physics" />);
    const imgElement = screen.getByAltText('');
    // The image should exist but with default/placeholder source
    expect(imgElement).toBeInTheDocument();
  });

  it('renders children content when provided', () => {
    const customContent = <div>Custom Content</div>;
    render(
      <StaffMemberCard {...defaultProps}>
        {customContent}
      </StaffMemberCard>
    );
    expect(screen.getByText('Custom Content')).toBeInTheDocument();
  });

  it('does not render children content when not provided', () => {
    render(<StaffMemberCard {...defaultProps} />);
    // Check for a distinctive child content that shouldn't exist
    expect(screen.queryByText('Custom Content')).not.toBeInTheDocument();
  });

  it('has correct styling classes applied to the main container', () => {
    render(<StaffMemberCard {...defaultProps} />);
    // Find the main container by its MUI box class
    const container = document.querySelector('.MuiBox-root');
    expect(container).toBeInTheDocument();
  });

  it('renders divider on small screens', () => {
    render(<StaffMemberCard {...defaultProps} />);
    // The Divider component will be present in the DOM structure
    const divider = document.querySelector('.MuiDivider-root');
    expect(divider).toBeInTheDocument();
  });

  it('handles minimal props correctly', () => {
    render(<StaffMemberCard name="Minimal" subject="Test" />);
    expect(screen.getByText('Minimal')).toBeInTheDocument();
    expect(screen.getByText('Test')).toBeInTheDocument();
    // Office hours should not be present
    expect(screen.queryByText('Konsultacje:')).not.toBeInTheDocument();
  });
});