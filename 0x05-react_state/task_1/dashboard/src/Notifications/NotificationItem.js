import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

// Wrap the component in React.memo to make it a pure component
const NotificationItem = ({ type = 'default', html, value, markAsRead, id }) => {
  const handleClick = () => {
    if (markAsRead && id) {
      markAsRead(id);
    }
  };

  const itemStyle = type === 'urgent' ? styles.urgent : styles.default;

  if (html) {
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        onClick={handleClick}
        className={css(itemStyle)}
      ></li>
    );
  }
  return (
    <li
      data-notification-type={type}
      onClick={handleClick}
      className={css(itemStyle)}
    >
      {value}
    </li>
  );
};

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.shape({__html: PropTypes.string}),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

export default NotificationItem;