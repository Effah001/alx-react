import { Map, List } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification selectors', () => {
  let state;

  beforeEach(() => {
    state = Map({
      notifications: Map({
        filter: 'DEFAULT',
        notifications: List([
          Map({ id: 1, type: 'default', value: 'Notification 1', isRead: false }),
          Map({ id: 2, type: 'urgent', value: 'Notification 2', isRead: true }),
        ]),
      }),
    });
  });

  test('filterTypeSelected works as expected', () => {
    const filter = filterTypeSelected(state);
    expect(filter).toBe('DEFAULT');
  });

  test('getNotifications returns a list of the message entities within the reducer', () => {
    const notifications = getNotifications(state);
    expect(notifications.toJS()).toEqual([
      { id: 1, type: 'default', value: 'Notification 1', isRead: false },
      { id: 2, type: 'urgent', value: 'Notification 2', isRead: true },
    ]);
  });

  test('getUnreadNotifications returns a list of unread message entities', () => {
    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications.toJS()).toEqual([
      { id: 1, type: 'default', value: 'Notification 1', isRead: false },
    ]);
  });
});
