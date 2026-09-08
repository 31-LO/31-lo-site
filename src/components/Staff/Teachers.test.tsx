import React from 'react';
import { render, screen } from '@testing-library/react';
import Teachers from './Teachers';
import StaffMemberCard, { StaffMemberProps } from './StaffMemberCard';

// Mock the image requires
jest.mock('./StaffMemberCard', () => ({
  __esModule: true,
  default: ({ name, subject }: { name: string; subject: string }) => (
    <div data-testid="staff-member-card" data-name={name} data-subject={subject}>
      {name} - {subject}
    </div>
  ),
  StaffMemberProps: jest.requireActual('./StaffMemberCard').StaffMemberProps,
}));

describe('Teachers', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<Teachers />);
    // The main container box should be present
    const container = document.querySelector('.MuiBox-root');
    expect(container).toBeInTheDocument();
  });

  it('renders all teacher cards', () => {
    render(<Teachers />);
    
    // Count the number of staff member cards rendered
    const teacherCards = screen.getAllByTestId('staff-member-card');
    
    // The actual number of teachers in the list
    // Counted from the Teachers.tsx file
    expect(teacherCards.length).toBeGreaterThan(0);
  });

  it('renders teacher cards with correct names and subjects', () => {
    render(<Teachers />);

    // Check if specific teachers are present by unique name
    expect(screen.getByText(/Jacek Brzostowski/i)).toBeInTheDocument();
    expect(screen.getByText(/matematyka, chemia/i)).toBeInTheDocument();
    expect(screen.getByText(/Monika Budziak/i)).toBeInTheDocument();

    // Use getAllByText to handle duplicate subjects
    expect(screen.getAllByText(/język polski/i).length).toBeGreaterThanOrEqual(1);
  });

  it('sorts teachers alphabetically by name', () => {
    render(<Teachers />);
    
    // Get all the teacher cards
    const teacherCards = screen.getAllByTestId('staff-member-card');
    
    // Extract the names from the data attributes
    const teacherNames = teacherCards.map(card => 
      card.getAttribute('data-name')
    );
    
    // Check if the names are sorted alphabetically
    const sortedNames = [...teacherNames].sort();
    expect(teacherNames).toEqual(sortedNames);
  });

  it('passes correct props to StaffMemberCard components', () => {
    render(<Teachers />);
    
    // Get a specific teacher card to verify props
    const jacekCard = screen.getByText(/Jacek Brzostowski/i);
    expect(jacekCard).toBeInTheDocument();
    expect(jacekCard).toHaveTextContent(/matematyka, chemia/i);
  });

  it('uses grid layout with proper styling', () => {
    render(<Teachers />);
    
    // Check that the main container has the expected grid properties
    const container = document.querySelector('.MuiBox-root');
    expect(container).toHaveClass('MuiBox-root');
    
    // Check that the container has grid display property
    const computedStyle = window.getComputedStyle(container!);
    expect(computedStyle.display).toBe('grid');
  });

  it('has correct number of teacher entries', () => {
    render(<Teachers />);

    // Count teacher cards - using a specific selector since we mocked StaffMemberCard
    const teacherElements = screen.getAllByTestId('staff-member-card');

    // From the original Teachers.tsx file, there should be 26 teacher entries
    expect(teacherElements.length).toBe(26); // Counted from the array in Teachers.tsx
  });
});