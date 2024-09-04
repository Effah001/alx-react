import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';


describe('CourseListRow Component', () => {

  // Test 1: When isHeader is true and textSecondCell is not provided
  test('renders one cell with colspan = 2 when isHeader is true and textSecondCell is not provided', () => {
    render(<CourseListRow isHeader={true} textFirstCell="Course" />);
    
    const cell = screen.getByText('Course');
    expect(cell).toBeInTheDocument();
    expect(cell).toHaveAttribute('colspan', '2');
  });

  // Test 2: When isHeader is true and textSecondCell is provided
  test('renders two cells when isHeader is true and textSecondCell is provided', () => {
    render(<CourseListRow isHeader={true} textFirstCell="Course" textSecondCell="Credit" />);
    
    const firstCell = screen.getByText('Course');
    const secondCell = screen.getByText('Credit');
    expect(firstCell).toBeInTheDocument();
    expect(secondCell).toBeInTheDocument();
    expect(firstCell.tagName).toBe('TH');
    expect(secondCell.tagName).toBe('TH');
  });

  // Test 3: When isHeader is false
  test('renders two td elements within a tr element when isHeader is false', () => {
    render(<CourseListRow isHeader={false} textFirstCell="Course" textSecondCell="Credit" />);
    
    const firstCell = screen.getByText('Course');
    const secondCell = screen.getByText('Credit');
    expect(firstCell).toBeInTheDocument();
    expect(secondCell).toBeInTheDocument();
    expect(firstCell.tagName).toBe('TD');
    expect(secondCell.tagName).toBe('TD');
  });

  // Test 4: Applies correct style for header row
  test('applies correct style for header row', () => {
    render(<CourseListRow isHeader={true} textFirstCell="Course" />);
    
    const cell = screen.getByText('Course');
    expect(cell).toHaveStyle('background-color: #f5f5f5ab');
  });

  // Test 5: Applies correct style for non-header row
  test('applies correct style for non-header row', () => {
    render(<CourseListRow isHeader={false} textFirstCell="Course" textSecondCell="Credit" />);
    
    const row = screen.getByRole('row');
    expect(row).toHaveStyle('background-color: #f5f5f5');
  });

});