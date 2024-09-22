import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For the extended matchers like toBeInTheDocument
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

jest.mock('../BodySection/BodySection', () => (props) => (
  <div data-testid="body-section">
    <h2>{props.title}</h2>
    {props.children}
  </div>
));

describe('BodySectionWithMarginBottom component', () => {
  test('renders a BodySection component with correct props', () => {
    // Define the props to be passed to BodySection
    const title = 'Test Title';
    const children = <p>Test Children Node</p>;

    // Render the BodySectionWithMarginBottom component
    render(
      <BodySectionWithMarginBottom title={title}>
        {children}
      </BodySectionWithMarginBottom>
    );

    // Check that BodySection is rendered
    const bodySection = screen.getByTestId('body-section');
    expect(bodySection).toBeInTheDocument();

    // Check that BodySection has the correct title and children
    const h2Element = bodySection.querySelector('h2');
    expect(h2Element).toHaveTextContent(title);

    const pElement = bodySection.querySelector('p');
    expect(pElement).toHaveTextContent('Test Children Node');
  });
});
