import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CourseListRow from './CourseListRow';
import { act } from 'react';

describe('CourseListRow Component', () => {

  // Test 1: When isHeader is true and textSecondCell is not provided
  test('renders one cell with colspan = 2 when isHeader is true and textSecondCell is not provided', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Course" />
        </tbody>
      </table>
    );

    const cell = screen.getByText('Course');
    expect(cell).toBeInTheDocument();
    expect(cell).toHaveAttribute('colspan', '2');
    expect(cell.tagName).toBe('TH');
  });

  // Test 2: When isHeader is true and textSecondCell is provided
  test('renders two cells when isHeader is true and textSecondCell is provided', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Course" textSecondCell="Grade" />
        </tbody>
      </table>
    );

    const firstCell = screen.getByText('Course');
    const secondCell = screen.getByText('Grade');
    expect(firstCell).toBeInTheDocument();
    expect(secondCell).toBeInTheDocument();
    expect(firstCell.tagName).toBe('TH');
    expect(secondCell.tagName).toBe('TH');
  });

  // Test 3: When isHeader is false and textSecondCell is provided
  test('renders two td elements when isHeader is false and textSecondCell is provided', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell="Course" textSecondCell="Grade" />
        </tbody>
      </table>
    );

    const firstCell = screen.getByText('Course');
    const secondCell = screen.getByText('Grade');
    expect(firstCell).toBeInTheDocument();
    expect(secondCell).toBeInTheDocument();
    expect(firstCell.tagName).toBe('TD');
    expect(secondCell.tagName).toBe('TD');
  });

  // Test 4: When isHeader is false and textSecondCell is not provided
  test('renders one td element with colspan = 2 when isHeader is false and textSecondCell is not provided', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell="Course" />
        </tbody>
      </table>
    );

    const cell = screen.getByText('Course');
    expect(cell).toBeInTheDocument();
    expect(cell).toHaveAttribute('colspan', '2');
    expect(cell.tagName).toBe('TD');
  });

  // Test 5: Applies inline style correctly
  test('applies inline style correctly', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell="Course" style={{ backgroundColor: 'red' }} />
        </tbody>
      </table>
    );

    const row = screen.getByRole('row');
    expect(row).toHaveStyle('background-color: red');
  });

});