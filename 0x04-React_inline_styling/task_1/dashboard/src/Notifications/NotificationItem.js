import React from 'react';
import PropTypes from 'prop-types';

// Wrap the component in React.memo to make it a pure component
const NotificationItem = React.memo(({ type = 'default', html, value, markAsRead, id }) => {
  const handleClick = () => {
    if (markAsRead && id) {
      markAsRead(id);
    }
  };

  if (html) {
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={handleClick}
      ></li>
    );
  }
  return (
    <li
      data-notification-type={type}
      onClick={handleClick}
    >
      {value}
    </li>
  );
});

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: null,
  value: '',
  markAsRead: () => {},
};

export default NotificationItem;