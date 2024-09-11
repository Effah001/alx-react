import { createContext } from 'react';

const defaultUser = {
    email: '',
    password: '',
    isLoggedIn: false
};

const defaultLogOut = () => {

};

export const AppContext = createContext({
    user: defaultUser,
    logOut: defaultLogOut
});