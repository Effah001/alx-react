import { Map, List } from 'immutable';

export const filterTypeSelected = (state) => state.getIn(['notifications', 'filter']);

export const getNotifications = (state) => state.getIn(['notifications', 'notifications']);

export const getUnreadNotifications = (state) => {
  return state.getIn(['notifications', 'notifications']).filter(notification => !notification.get('isRead'));
};