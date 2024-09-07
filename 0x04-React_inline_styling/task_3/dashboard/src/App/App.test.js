import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

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
  expect(screen.getByText('Course list')).toBeInTheDocument();
  expect(screen.getByText('News from the School')).toBeInTheDocument();
});

describe('App Component', () => {
  it('should call logOut and display an alert when Ctrl + h is pressed', () => {
    const mockLogOut = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<App logOut={mockLogOut} />);

    fireEvent.keyDown(document, { key: 'h', ctrlKey: true });

    expect(mockLogOut).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    alertMock.mockRestore();
  });
});