import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';

describe('CourseListRow', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const testCases = [
    {
      props: { isHeader: true, textFirstCell: 'Header', textSecondCell: null },
      expected: { cellCount: 1, colspan: '2' }
    },
    {
      props: { isHeader: true, textFirstCell: 'Header 1', textSecondCell: 'Header 2' },
      expected: { cellCount: 2, colspan: undefined }
    },
    {
      props: { isHeader: false, textFirstCell: 'Data 1', textSecondCell: 'Data 2' },
      expected: { cellCount: 2, colspan: undefined }
    }
  ];

  test.each(testCases)('renders correctly with props: %o', ({ props, expected }) => {
    render(<CourseListRow {...props} />);

    const row = screen.getByRole('row');
    const cells = row.children;

    expect(cells).toHaveLength(expected.cellCount);

    if (expected.cellCount === 1) {
      expect(cells[0]).toHaveAttribute('colspan', expected.colspan);
      expect(cells[0]).toHaveTextContent(props.textFirstCell);
    } else {
      expect(cells[0]).toHaveTextContent(props.textFirstCell);
      expect(cells[1]).toHaveTextContent(props.textSecondCell);
    }

    // Check for the presence of Aphrodite-generated classes
    expect(row.className).toMatch(/headerRow|defaultRow/);
  });

  test('applies the correct background color', () => {
    const { rerender } = render(<CourseListRow isHeader={true} textFirstCell="Header" />);
    expect(screen.getByRole('row').className).toMatch(/headerRow/);

    rerender(<CourseListRow isHeader={false} textFirstCell="Data" textSecondCell="More Data" />);
    expect(screen.getByRole('row').className).toMatch(/defaultRow/);
  });

  it('renders correctly with props: isHeader=true, textFirstCell="Header 1", textSecondCell="Header 2"', () => {
    const { container } = render(
      <CourseListRow
        isHeader={true}
        textFirstCell="Header 1"
        textSecondCell="Header 2"
      />
    );

    const row = container.querySelector('tr');
    expect(row).not.toBeNull();

    const cells = row.querySelectorAll('th');
    expect(cells).toHaveLength(2);

    expect(cells[0].textContent).toBe('Header 1');
    expect(cells[1].textContent).toBe('Header 2');
  });

  it('renders correctly with props: isHeader=false, textFirstCell="Data 1", textSecondCell="Data 2"', () => {
    const { container } = render(
      <CourseListRow
        isHeader={false}
        textFirstCell="Data 1"
        textSecondCell="Data 2"
      />
    );

    const row = container.querySelector('tr');
    expect(row).not.toBeNull();

    const cells = row.querySelectorAll('td');
    expect(cells).toHaveLength(2);

    expect(cells[0].textContent).toBe('Data 1');
    expect(cells[1].textContent).toBe('Data 2');
  });
});