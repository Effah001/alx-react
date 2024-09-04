import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const styles = StyleSheet.create({
  Notifications: {
    border: '1px dashed #e61919',
    margin: '0.2rem 0.3rem',
    display: 'flex',
    textAlign: 'justify',
    justifyContent: 'right',
    paddingBottom: '0.2rem',
  },
  menuItem: {
    padding: '0.7rem 1rem 0 0',
    position: 'absolute',
    right: '0',
  },
  defaultNotification: {
    color: 'blue',
  },
  urgentNotification: {
    color: 'red',
  },
});

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <>
        <div className={css(styles.menuItem)}>Your notifications</div>
        {displayDrawer && (
          <div className={css(styles.Notifications)} data-testid="notifications-div">
            {listNotifications.length > 0 ? (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
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
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;