import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';

const Notifications = () => {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem 
          html="<strong>Urgent requirement</strong> - complete by EOD" 
        />
      </ul>
    </div>
  );
};

export default Notifications;
