import React from "react";

const NotificationItem = ({ type, html, value }) => {
    if (type && value) {
        return(
            <li data-notification-type={type}>
                {value}
            </li>
        )
    }
    else {
        return(
            <li data-notification-type='urgent' dangerouslySetInnerHTML={{ __html: html }}></li>
        )
    }
}

export default NotificationItem