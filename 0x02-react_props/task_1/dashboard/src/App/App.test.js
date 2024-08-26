import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

jest.mock('../Notifications', () => () => <div>Mock Notifications</div>);
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