import React from "react";
import PropTypes from 'prop-types';

const NotificationItem = ({ type = 'default', html, value }) => {
    if (html) {
        return (
            <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
        );
    }
    return (
        <li data-notification-type={type}>
            {value}
        </li>
    );
};

NotificationItem.propTypes = {
    type: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired,
    }),
    value: PropTypes.string,
};

NotificationItem.defaultProps = {
    type: 'default',
    html: null,
    value: '',
};

export default NotificationItem;
