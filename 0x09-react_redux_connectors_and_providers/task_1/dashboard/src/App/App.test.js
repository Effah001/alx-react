import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App, { mapStateToProps } from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';
import Notifications from '../Notifications/Notifications';

jest.mock('../utils', () => ({
  getFullYear: () => 2023,
  getFooterCopy: () => 'test footer',
  getLatestNotification: () => '<strong>Urgent requirement</strong> - complete by EOD',
}));

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('App Component', () => {
  it('renders App component with correct elements', async () => {
    await act(async () => {
      render(<App />);
    });
  
    expect(screen.getByText('School Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Copyright 2023 - test footer')).toBeInTheDocument();
    expect(screen.getByText('Log in to continue')).toBeInTheDocument();
    expect(screen.getByText('News from the School')).toBeInTheDocument();
  });

  it('should call logOut and display an alert when Ctrl + h is pressed', async () => {
    await act(async () => {
      render(<App />);
    });

    const mockLogOut = jest.spyOn(App.prototype, 'logOut');
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    fireEvent.keyDown(window, { ctrlKey: true, key: 'h' });

    expect(mockLogOut).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

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
    
    const notificationsButton = screen.getByText('Your notifications');
    fireEvent.click(notificationsButton);
    expect(screen.getByTestId('notifications-div')).toBeInTheDocument();
    
    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);
    
    expect(screen.queryByTestId('notifications-div')).not.toBeInTheDocument();
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
  });
});

// Consolidated mapStateToProps tests
describe('mapStateToProps', () => {
  it('should return the correct state', () => {
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: true,
    });

    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: true,
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
