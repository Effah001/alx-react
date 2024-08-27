import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import './Notifications.css';

const Notifications = ({ displayDrawer }) => {
  return (
    <>
      <div className="menuItem">
        Your notifications
      </div>
      {displayDrawer && (
        <div className="Notifications" data-testid="notifications-div">
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem 
              type="urgent" 
              html={{ __html: '<strong>Urgent requirement</strong> - complete by EOD' }} 
            />
          </ul>
        </div>
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
