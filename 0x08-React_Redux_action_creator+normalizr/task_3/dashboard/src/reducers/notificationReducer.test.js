import notificationReducer from '../reducers/notificationReducer';
import { SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const initialState = {
    notifications: [],
    filter: 'default',
  };

  it('should return the initial state when no action is passed', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS and add isRead: false to all notifications', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
      ],
    };

    const expectedState = {
      ...initialState,
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      ],
    };

    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ and update the isRead property of the correct notification', () => {
    const currentState = {
      ...initialState,
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      ],
    };

    const action = {
      type: MARK_AS_READ,
      id: 1,
    };

    const expectedState = {
      ...currentState,
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: true },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      ],
    };

    const state = notificationReducer(currentState, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER and update the filter to "urgent"', () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: 'urgent',
    };

    const expectedState = {
      ...initialState,
      filter: 'urgent',
    };

    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER and update the filter to "default"', () => {
    const currentState = {
      ...initialState,
      filter: 'urgent',
    };

    const action = {
      type: SET_TYPE_FILTER,
      filter: 'default',
    };

    const expectedState = {
      ...currentState,
      filter: 'default',
    };

    const state = notificationReducer(currentState, action);
    expect(state).toEqual(expectedState);
  });
});
