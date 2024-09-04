import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';


beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

jest.mock('../Notifications/Notifications', () => () => <div>Mock Notifications</div>);
jest.mock('../Header/Header', () => () => <div>Mock Header</div>);
jest.mock('../Footer/Footer', () => () => <div>Mock Footer</div>);
jest.mock('../Login/Login', () => () => <div>Mock Login</div>);

test('renders App component with mocked children', () => {
  render(<App />);
  
  // Check that the mocked child components are rendered

  expect(screen.getByText('Mock Notifications')).toBeInTheDocument();
  expect(screen.getByText('Mock Header')).toBeInTheDocument();
  expect(screen.getByText('Mock Footer')).toBeInTheDocument();
  expect(screen.getByText('Mock Login')).toBeInTheDocument();
});


// Mock the alert function
window.alert = jest.fn();

describe('App Component', () => {
  it('should call logOut and display an alert when Ctrl + h is pressed', () => {
    // Mock logOut function
    const mockLogOut = jest.fn();

    // Render the App component with the mock logOut function passed as a prop
    const { container } = render(<App isLoggedIn={true} logOut={mockLogOut} />);

    // Simulate pressing Ctrl + h keys
    fireEvent.keyDown(document, { key: 'h', ctrlKey: true });

    // Assert that the logOut function was called
    expect(mockLogOut).toHaveBeenCalled();

    // Assert that the alert function was called with the correct message
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });
});