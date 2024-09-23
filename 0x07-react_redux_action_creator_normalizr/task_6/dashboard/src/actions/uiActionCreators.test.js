import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';


describe('uiActionCreators', () => {
  it('should create an action to login with email and password', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const expectedAction = {
      type: LOGIN,
      user: { email, password }
    };

    expect(login(email, password)).toEqual(expectedAction);
  });


  it('should create an action to logout', () => {
    const expectedAction = {
      type: LOGOUT
    };

    expect(logout()).toEqual(expectedAction);
  });

 
  it('should create an action to display the notification drawer', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER
    };

    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

 
  it('should create an action to hide the notification drawer', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER
    };

    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest action', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
    fetchMock.restore();
  });

  afterEach(() => {
    fetchMock.reset();
  });

  it('should dispatch LOGIN and LOGIN_SUCCESS when API call succeeds', () => {
    fetchMock.getOnce('/login-success.json', {
      body: { message: 'Login success' },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password123' } },
      { type: LOGIN_SUCCESS }
    ];

    return store.dispatch(loginRequest('test@example.com', 'password123')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch LOGIN and LOGIN_FAILURE when API call fails', () => {
    fetchMock.getOnce('/login-success.json', 404);

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: 'password123' } },
      { type: LOGIN_FAILURE }
    ];

    return store.dispatch(loginRequest('test@example.com', 'password123')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});