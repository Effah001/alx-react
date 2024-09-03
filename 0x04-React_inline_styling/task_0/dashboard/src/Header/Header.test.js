import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  test('renders Header component without crashing', () => {
    render(<Header />);
  });

  test('contains img and h1 tags', () => {
    render(<Header />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();

    const h1Element = screen.getByRole('heading', { level: 1 });
    expect(h1Element).toBeInTheDocument();
  });
});