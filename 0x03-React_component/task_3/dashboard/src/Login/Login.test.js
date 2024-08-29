import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  test('renders Login component without crashing', () => {
    render(<Login />);
  });

  test('contains 2 input and 2 label tags', () => {
    render(<Login />);

    // Check for input tags
    const inputElements = screen.getAllByRole('textbox');
    const passwordInput = screen.getByLabelText('Password:');
    expect(inputElements.length).toBe(1);
    expect(passwordInput).toBeInTheDocument();

    // Check for label tags
    const labelElements = screen.getAllByLabelText(/./i);
    expect(labelElements.length).toBe(2);
  });
});