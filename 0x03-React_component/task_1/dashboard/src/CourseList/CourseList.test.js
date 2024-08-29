import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList component', () => {
  test('renders CourseList component without crashing', () => {
    render(<CourseList />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  });

  test('renders 3 rows by default (2 header rows + "No course available yet" row)', () => {
    render(<CourseList />);
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(3);
  });
});

describe('With empty listCourses or no listCourses', () => {
  test('renders correctly with an empty array', () => {
    render(<CourseList listCourses={[]} />);
    expect(screen.getByText('No course available yet')).toBeInTheDocument();
  });

  test('renders correctly without listCourses property', () => {
    render(<CourseList />);
    expect(screen.getByText('No course available yet')).toBeInTheDocument();
  });
});

describe('With listCourses containing elements', () => {
  test('renders correctly with the list of courses', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    render(<CourseList listCourses={listCourses} />);
    
    // +2 for the header rows
    const rows = screen.getAllByRole('row');
    expect(rows.length).toBe(listCourses.length + 2);
  });
});
