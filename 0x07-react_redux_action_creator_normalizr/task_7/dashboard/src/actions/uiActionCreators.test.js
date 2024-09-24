import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginSuccess, loginFailure, loginRequest } from './uiActionCreators';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

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

describe('Test loginRequset action', () => {
  beforeEach(() => {
  });

  afterEach(() => {
      fetchMock.restore();
  });

  it('verify right response from API when LOGIN_SUCCESS is dispatched', () => {
      const expectedAction = [loginSuccess()];
      const store = mockStore({});

      fetchMock.getOnce('/login-success.json', { data: 'test data'});

      return store.dispatch(loginRequest('example@example.com', 'password'))
          .then(() => expect(store.getActions()).toEqual(expectedAction));
  });

  it('verify right response from API when LOGIN_FAILURE is dispatched', () => {
      const expectedAction = [loginFailure()];
      const store = mockStore({});

      fetchMock.getOnce('/login-success.json', { throws: new Error('Failed to fetch') });

      return store.dispatch(loginRequest('example@example.com', 'password'))
          .then(() => expect(store.getActions()).toEqual(expectedAction));
  });
});