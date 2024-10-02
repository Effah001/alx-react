import { Map, List } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { notificationNormalizer } from '../schema/notifications';

const initialState = Map({
    notifications: List(),
    filter: 'DEFAULT'
});

const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
    const normalizedData = notificationNormalizer(action.data);
    const notifications = normalizedData.entities.notifications 
        ? Object.values(normalizedData.entities.notifications).map(notification => ({
            ...notification,
            isRead: false,
        })) 
        : [];

    return state.merge({
        notifications: List(notifications),
    });
        case MARK_AS_READ:
            return state.setIn(['notifications', action.id, 'isRead'], true);

        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);

        default:
            return state;
    }
};

export default notificationReducer;
