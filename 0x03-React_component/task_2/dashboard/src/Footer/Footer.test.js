import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders Footer component without crashing', () => {
    render(<Footer />);
  });

  test('contains "Copyright" text', () => {
    render(<Footer />);

    const copyrightElement = screen.getByText(/Copyright/i);
    expect(copyrightElement).toBeInTheDocument();
  });
});