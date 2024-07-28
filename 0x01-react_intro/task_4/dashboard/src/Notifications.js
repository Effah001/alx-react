import React from 'react';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';
import './Notifications.css';

function Notifications() {
  const notification = getLatestNotification();

  const handleCloseClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <p>Here is a list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: notification }} />
      </ul>
      <button aria-label='Close' onClick={handleCloseClick}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          position: 'absolute',
          right: '10px',
          top: '10px'
        }} >
        <img src={closeIcon} alt="Close" style={{ width: '20px', height: '20px' }} />
      </button>
    </div>
  );
}

export default Notifications;