import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList component', () => {
  test('renders CourseList component without crashing', () => {
    render(<CourseList />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  });

  test('renders 5 different rows', () => {
    render(<CourseList />);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(5);
  });
});
