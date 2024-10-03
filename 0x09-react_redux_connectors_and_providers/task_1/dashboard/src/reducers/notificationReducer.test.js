import { fromJS } from 'immutable';
import notificationReducer from '../reducers/notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
    const initialState = fromJS({
        notifications: [],
        filter: 'DEFAULT',
    });

    it('should return the initial state', () => {
        expect(notificationReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
                { id: 1, type: "default", value: "Notification 1" },
                { id: 2, type: "urgent", value: "Notification 2" },
            ]
        };
        const expectedState = fromJS({
            notifications: [
                { id: 1, type: "default", value: "Notification 1", isRead: false },
                { id: 2, type: "urgent", value: "Notification 2", isRead: false },
            ],
            filter: 'DEFAULT',
        });
        expect(notificationReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
    });

    it('should handle MARK_AS_READ', () => {
        const initialStateWithNotifications = fromJS({
            notifications: [
                { id: 1, type: "default", value: "Notification 1", isRead: false },
                { id: 2, type: "urgent", value: "Notification 2", isRead: true },
            ],
            filter: 'DEFAULT',
        });

        const action = {
            type: MARK_AS_READ,
            id: 1
        };
        const expectedState = fromJS({
            notifications: [
                { id: 1, type: "default", value: "Notification 1", isRead: false },
                { id: 2, type: "urgent", value: "Notification 2", isRead: true },
            ],
            filter: 'DEFAULT',
        });
        expect(notificationReducer(initialStateWithNotifications, action).toJS()).toEqual(expectedState.toJS());
    });

    it('should handle SET_TYPE_FILTER', () => {
        const action = {
            type: SET_TYPE_FILTER,
            filter: 'URGENT'
        };
        const expectedState = fromJS({
            notifications: [],
            filter: 'URGENT',
        });
        expect(notificationReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
    });
});
