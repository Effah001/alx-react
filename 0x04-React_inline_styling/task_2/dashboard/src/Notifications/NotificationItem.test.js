import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('renders NotificationItem component without crashing', () => {
  render(<NotificationItem type="default" value="test" />);
});

test('renders NotificationItem with correct type and value', () => {
  render(<NotificationItem type="default" value="test" />);
  
  const listItem = screen.getByText('test');
  expect(listItem).toBeInTheDocument();
  expect(listItem).toHaveAttribute('data-notification-type', 'default');
});

test('renders NotificationItem with correct html content', () => {
  render(<NotificationItem html={{ __html: "<u>test</u>" }} />);

  const listItem = screen.getByText('test');
  expect(listItem).toContainHTML('<u>test</u>');
});

describe('NotificationItem Component', () => {
  it('should call markAsRead with the correct ID when clicked', () => {
    const markAsReadSpy = jest.fn();
    render(
      <NotificationItem
        type="default"
        value="Test Notification"
        markAsRead={markAsReadSpy}
        id={1}
      />
    );

    fireEvent.click(screen.getByText('Test Notification'));

    expect(markAsReadSpy).toHaveBeenCalledWith(1);
  });

  it('applies the correct class for default type', () => {
    render(<NotificationItem type="default" value="test" />);
    const listItem = screen.getByText('test');
    expect(listItem.className).toMatch(/default/);
  });

  it('applies the correct class for urgent type', () => {
    render(<NotificationItem type="urgent" value="test" />);
    const listItem = screen.getByText('test');
    expect(listItem.className).toMatch(/urgent/);
  });
});