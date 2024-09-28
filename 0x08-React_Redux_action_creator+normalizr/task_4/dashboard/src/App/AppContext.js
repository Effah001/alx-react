import React, { createContext, useState } from 'react';

export const defaultUser = {
    email: '',
    isLoggedIn: false,
};

const defaultLogOut = () => {};

export const AppContext = createContext({
    user: defaultUser,
    logOut: defaultLogOut,
    logIn: () => {},
});

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(defaultUser);

    const logIn = (email) => {
        setUser({ ...defaultUser, email, isLoggedIn: true });
    };

    const logOut = () => {
        setUser(defaultUser);
    };

    return (
        <AppContext.Provider value={{ user, logIn, logOut }}>
            {children}
        </AppContext.Provider>
    );
};