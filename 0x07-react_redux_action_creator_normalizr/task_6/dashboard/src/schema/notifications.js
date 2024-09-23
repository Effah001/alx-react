import { normalize, schema } from 'normalizr';
import notifications from '../../../../notifications.json';

const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, { idAttribute: 'guid' });


const notification = new schema.Entity("notifications", {
    author: user,
    context: message
});

export const normalizedData = normalize(notifications, [notification])

const getAllNotificationsByUser = (userId) => {
    const { entities: { notifications, users, messages } } = normalizedData;

    const userNotifications = Object.values(notifications).filter(
        (notification) => notification.author === userId
    );

    return userNotifications.map((notification) => messages[notification.context]);
};

export default getAllNotificationsByUser;