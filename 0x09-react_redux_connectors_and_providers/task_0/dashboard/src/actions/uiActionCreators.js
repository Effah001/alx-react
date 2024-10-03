import { LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_FAILURE, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import fetch from 'node-fetch';

export const login = (email, password) => ({
    type: LOGIN,
    user: { email, password }
});

export const boundLogin = (email, password) => login(email, password);

export const logout = () => ({
    type: LOGOUT
});

export const boundLogout = () => logout();

export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER
});

export const boundDisplayNotificationDrawer = () => displayNotificationDrawer();

export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER
});

export const boundHideNotificationDrawer = () => hideNotificationDrawer();

export const loginSuccess = () => {
    return {type: LOGIN_SUCCESS};
};

export const loginFailure = () => {
    return {type: LOGIN_FAILURE};
}


export const loginRequest = (email, password) => {
    return (dispatch) => {
        dispatch(login(email, password));

        fetch('/login-success.json')
        .then((response) => response.json())
        .then((data) => {
            dispatch(loginSuccess());
        })
        .catch((error) => {
            dispatch(loginFailure());
        });
    };
};