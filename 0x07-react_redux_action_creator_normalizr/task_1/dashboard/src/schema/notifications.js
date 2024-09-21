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
    return notifications.filter(notification => notification.author.id === userId)
                        .map(notification => notification.context);
};

export default getAllNotificationsByUser;