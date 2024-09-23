import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

describe('notification action creators', () => {
    it('should create an action to mark a notification as read', () => {
        const index = 1;
        const expectedAction = {
        type: MARK_AS_READ,
        index: 1
      };
      expect(markAsRead(index)).toEqual(expectedAction);
    });


    it('should create an action to set the filter type to DEFAULT', () => {
        const expectedAction = {
                type: SET_TYPE_FILTER,
                filter: NotificationTypeFilters.DEFAULT
            };
            expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual(expectedAction);
        });
    });