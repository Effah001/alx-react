import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppProvider } from '../App/AppContext'; 
import Header from './Header';

describe('Header Component', () => {
  test('renders Header component without crashing', () => {
    render(
      <AppProvider>
        <Header />
      </AppProvider>
    );
  });

  test('contains img and h1 tags', () => {
    render(
      <AppProvider>
        <Header />
      </AppProvider>
    );

    // Check for the image
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();

    // Check for the h1 heading
    const h1Element = screen.getByRole('heading', { level: 1 });
    expect(h1Element).toBeInTheDocument();
  });

  // Test for rendering without user logged in
  test('renders Header without user logged in', () => {
    render(
      <AppProvider>
        <Header />
      </AppProvider>
    );

    // Verify that the logout section is not created
    const logoutSection = screen.queryByText(/logout/i);
    expect(logoutSection).not.toBeInTheDocument();
  });

  // Test for rendering with user logged in
  test('renders Header with user logged in', () => {
    const user = { isLoggedIn: true, email: 'user@example.com' };

    render(
      <AppProvider value={{ user, logOut: jest.fn() }}>
        <Header />
      </AppProvider>
    );

    // Debugging: Log the current DOM structure
    screen.debug();

    // Verify that the logout section is created
    const logoutSection = screen.getByText(/Welcome, user@example.com/i);
    expect(logoutSection).toBeInTheDocument();
  });
});