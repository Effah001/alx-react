import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppProvider } from '../App/AppContext'; 
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders Footer component without crashing', () => {
    render(
      <AppProvider value={{ user: { isLoggedIn: false } }}> 
        <Footer />
      </AppProvider>
    );
  });

  test('contains "Copyright" text', () => {
    render(
      <AppProvider value={{ user: { isLoggedIn: false } }}> 
        <Footer />
      </AppProvider>
    );

    const copyrightElement = screen.getByText(/Copyright/i);
    expect(copyrightElement).toBeInTheDocument();
  });

  // Test for "Contact us" link when user is logged out
  test('does not display "Contact us" link when user is logged out', () => {
    render(
      <AppProvider value={{ user: { isLoggedIn: false } }}> 
        <Footer />
      </AppProvider>
    );

    const contactLink = screen.queryByText(/Contact us/i);
    expect(contactLink).not.toBeInTheDocument(); 
  });

  // Test for "Contact us" link when user is logged in
  test('displays "Contact us" link when user is logged in', () => {
    render(
      <AppProvider value={{ user: { isLoggedIn: true } }}> 
        <Footer />
      </AppProvider>
    );

    const contactLink = screen.getByText(/Contact us/i);
    expect(contactLink).toBeInTheDocument(); // Verify the link is present
  });
});