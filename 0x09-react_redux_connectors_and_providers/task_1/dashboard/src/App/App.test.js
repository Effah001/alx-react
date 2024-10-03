import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

jest.mock('../utils', () => ({
  getFullYear: () => 2023,
  getFooterCopy: () => 'test footer',
  getLatestNotification: () => '<strong>Urgent requirement</strong> - complete by EOD'
}));

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('renders App component with correct elements', async () => {
  await act(async () => {
    render(<App />);
  });
  
  expect(screen.getByText('School Dashboard')).toBeInTheDocument();
  expect(screen.getByText('Copyright 2023 - test footer')).toBeInTheDocument();
  expect(screen.getByText('Log in to continue')).toBeInTheDocument();
  expect(screen.getByText('News from the School')).toBeInTheDocument();
});

describe('App Component', () => {
  it('should call logOut and display an alert when Ctrl + h is pressed', async () => {
    await act(async () => {
      render(<App />);
    });

    // Mock the logOut function
    const mockLogOut = jest.spyOn(App.prototype, 'logOut');
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Simulate Ctrl + h keydown
    fireEvent.keyDown(window, { ctrlKey: true, key: 'h' });

    // Check if logOut was called
    expect(mockLogOut).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    // Clean up mocks
    mockLogOut.mockRestore();
    alertMock.mockRestore();
  });

  it('should have displayDrawer default to false', () => {
    render(<App />);
    expect(screen.queryByTestId('notifications-div')).not.toBeInTheDocument();
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
  });

  it('should update displayDrawer state to true after calling handleDisplayDrawer', () => {
    render(<App />);
    
    const notificationsButton = screen.getByText('Your notifications');
    fireEvent.click(notificationsButton);
    
    expect(screen.getByTestId('notifications-div')).toBeInTheDocument();
  });

  it('should update displayDrawer state to false after calling handleHideDrawer', () => {
    render(<App />);
    
    // Open the notifications drawer
    const notificationsButton = screen.getByText('Your notifications');
    fireEvent.click(notificationsButton);
    expect(screen.getByTestId('notifications-div')).toBeInTheDocument();
    
    // Close the notifications drawer
    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);
    
    expect(screen.queryByTestId('notifications-div')).not.toBeInTheDocument();
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
  });
});

describe('mapStateToProps', () => {
  it('should return the correct object when state is provided', () => {
    const state = fromJS({
      isUserLoggedIn: true,
    });

    const expectedProps = {
      isLoggedIn: true,
    };

    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});