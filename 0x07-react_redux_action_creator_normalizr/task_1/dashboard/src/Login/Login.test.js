import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
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

  it('submit button is disabled by default', () => {
    render(<Login />);
    const submitButton = screen.getByRole('button', { name: /ok/i });
    expect(submitButton).toBeDisabled();
  });

  it('submit button is enabled after changing the value of both inputs', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /ok/i });

    // Initially, the button should be disabled
    expect(submitButton).toBeDisabled();

    // Type into email input
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    
    // Button should still be disabled
    expect(submitButton).toBeDisabled();

    // Type into password input
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Now the button should be enabled
    expect(submitButton).toBeEnabled();
  });
});