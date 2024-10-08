import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

export const markAsRead = (index) => ({
    type: MARK_AS_READ,
    index
  });

export const boundmarkasread = (index) =>markAsRead(index);


export const setNotificationFilter = (filter) => ({
    type: SET_TYPE_FILTER,
    filter
});

export const boundSetNotificationFilter = (filter) => setNotificationFilter(filter);