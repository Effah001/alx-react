import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For the extended matchers like toBeInTheDocument
import BodySection from './BodySection';

describe('BodySection component', () => {
  test('renders correctly with title and children', () => {
    // Render the BodySection component
    render(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Check that the h2 element includes the text "test title"
    const h2Element = screen.getByRole('heading', { level: 2 });
    expect(h2Element).toHaveTextContent('test title');

    // Check that the p element includes the text "test children node"
    const pElement = screen.getByText('test children node');
    expect(pElement).toBeInTheDocument();
  });
});