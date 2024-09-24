import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const styles = StyleSheet.create({
  Notifications: {
    border: '1px dashed #e61919',
    padding: '10px',
    position: 'absolute',
    top: '0',
    right: '0',
    width: '300px',
    backgroundColor: 'white',
    zIndex: 1000,
    '@media (max-width: 900px)': {
      width: '100vw',
      height: '100vh',
      fontSize: '20px',
      padding: 0,
      margin: 0,
      border: 'none',
    }
  },
  menuItem: {
    float: 'right',
    backgroundColor: '#fff8f8',
    ':hover': {
      cursor: 'pointer',
      animation: 'opacityChange 1s ease-in-out infinite',
    }
  },
  defaultNotification: {
    color: 'blue',
  },
  urgentNotification: {
    color: 'red',
  },
  closeButton: {
    float: 'right',
    background: 'none',
    border: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  notificationsList: {
    '@media (max-width: 900px)': {
      listStyleType: 'none',
      //padding: '30px',
      paddingBottom: '90px',
    }
  },

  heading: {
    '@media (max-width: 900px)': {
      padding: '30px',
    }
  },
});

class Notifications extends React.Component {
  render() {
    const { listNotifications, displayDrawer, handleDisplayDrawer, handleHideDrawer, markNotificationAsRead } = this.props;

    return (
      <>
        {!displayDrawer && (
          <div 
            className={css(styles.menuItem)} 
            onClick={handleDisplayDrawer}
          >
            Your notifications
          </div>
        )}
        {displayDrawer && (
          <div className={css(styles.Notifications)} data-testid="notifications-div">
            <button 
              className={css(styles.closeButton)}
              aria-label="Close" 
              onClick={handleHideDrawer}
            >
              X
            </button>
            {listNotifications.length > 0 ? (
              <>
                <p className={css(styles.heading)}>Here is the list of notifications</p>
                <ul className={css(styles.notificationsList)}>
                  {listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={markNotificationAsRead}
                      id={notification.id}
                      className={css(
                        notification.type === 'urgent'
                          ? styles.urgentNotification
                          : styles.defaultNotification
                      )}
                    />
                  ))}
                </ul>
              </>
            ) : (
              <p>No new notification for now</p>
            )}
          </div>
        )}
      </>
    );
  }
}

Notifications.defaultProps = {
  listNotifications: [],
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

export default Notifications;