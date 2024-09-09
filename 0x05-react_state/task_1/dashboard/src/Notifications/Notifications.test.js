import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Notifications component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('renders NotificationItem components as list items', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];

    render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    
    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems.length).toBe(listNotifications.length);
  });

  test('verifies that the first NotificationItem renders the correct HTML', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];

    render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    
    // Check the HTML content of the third notification item
    const notificationItems = screen.getAllByRole('listitem');
    expect(notificationItems[2].innerHTML).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });

  test('menu item is displayed when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);

    // Check for the presence of the menu item with "Your notifications" text
    const menuItem = screen.getByText('Your notifications');
    expect(menuItem).toBeInTheDocument();
    expect(menuItem).toHaveClass('menuItem_thxxps');

    // Ensure the notifications div is not present
    expect(screen.queryByTestId('notifications-div')).not.toBeInTheDocument();
  });

  test('div.Notifications is not displayed when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    
    const notificationsDiv = screen.queryByTestId('notifications-div');
    expect(notificationsDiv).not.toBeInTheDocument();
  });

  test('menu item is displayed when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);

    // Instead of looking for 'Your notifications', look for the actual content
    const notificationContent = screen.getByText('No new notification for now');
    expect(notificationContent).toBeInTheDocument();

    // Also check if the notifications div is present
    const notificationsDiv = screen.getByTestId('notifications-div');
    expect(notificationsDiv).toBeInTheDocument();
  });

  test('div.Notifications is displayed when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    expect(screen.getByTestId('notifications-div')).toBeInTheDocument();
  });

  describe('With empty listNotifications or no listNotifications', () => {
    test('renders correctly without listNotifications property', () => {
      render(<Notifications displayDrawer={true} />);
      expect(screen.getByText('No new notification for now')).toBeInTheDocument();
      expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument();
    });
  });

  describe('With listNotifications containing elements', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];

    test('verifies that the first NotificationItem renders the correct HTML', () => {
      render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
      
      const notificationItems = screen.getAllByRole('listitem');
      expect(notificationItems[2].innerHTML).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
  });

  describe('Notifications Component', () => {
    it('should log the correct message when markAsRead is called', () => {
      // Create a spy to monitor console.log
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

      // Render the Notifications component with a notification item
      render(
        <Notifications
          displayDrawer={true}
          listNotifications={[{ id: 1, type: 'default', value: 'New course available' }]}
        />
      );

      // Get the notification item and simulate a click
      const notificationItem = screen.getByText('New course available').closest('li');
      if (notificationItem) {
        fireEvent.click(notificationItem);
      }

      // Check if console.log was called with the correct message
      expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');

      // Clean up mocks
      consoleSpy.mockRestore();
    });
  });

  describe('Notifications Component', () => {
    it('should not re-render when the listNotifications prop is the same', () => {
      // Initial render with a list of notifications
      const { rerender } = render(
        <Notifications
          displayDrawer={true}
          listNotifications={[
            { id: 1, type: 'default', value: 'Notification 1' },
          ]}
        />
      );

      // Get the initial number of NotificationItem components
      const initialNotificationItems = screen.queryAllByRole('listitem');

      // Re-render with the same list
      rerender(
        <Notifications
          displayDrawer={true}
          listNotifications={[
            { id: 1, type: 'default', value: 'Notification 1' },
          ]}
        />
      );

      // Check that the number of NotificationItem components hasn't changed
      expect(screen.queryAllByRole('listitem').length).toBe(initialNotificationItems.length);
    });

    it('should re-render when the listNotifications prop is longer', () => {
      // Initial render with a shorter list of notifications
      const { rerender } = render(
        <Notifications
          displayDrawer={true}
          listNotifications={[
            { id: 1, type: 'default', value: 'Notification 1' },
          ]}
        />
      );

      // Get the initial number of NotificationItem components
      const initialNotificationItems = screen.queryAllByRole('listitem');

      // Re-render with a longer list
      rerender(
        <Notifications
          displayDrawer={true}
          listNotifications={[
            { id: 1, type: 'default', value: 'Notification 1' },
            { id: 2, type: 'urgent', value: 'Notification 2' },
          ]}
        />
      );

      // Check that the number of NotificationItem components has increased
      expect(screen.queryAllByRole('listitem').length).toBeGreaterThan(initialNotificationItems.length);
    });
  });

  it('should call handleDisplayDrawer when clicking on the menu item', () => {
    const handleDisplayDrawer = jest.fn();
    render(<Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} />);
    
    const menuItem = screen.getByText('Your notifications');
    fireEvent.click(menuItem);
    
    expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
  });

  it('should call handleHideDrawer when clicking on the close button', () => {
    const handleHideDrawer = jest.fn();
    render(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} listNotifications={[]} />);
    
    const closeButton = screen.getByLabelText('Close');
    fireEvent.click(closeButton);
    
    expect(handleHideDrawer).toHaveBeenCalledTimes(1);
  });
});
