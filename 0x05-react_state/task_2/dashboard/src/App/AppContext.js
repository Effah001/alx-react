import React, { createContext, useState } from 'react';

export const defaultUser = {
    email: '',
    password: '',
    isLoggedIn: false
};

const defaultLogOut = () => {};

export const AppContext = createContext({
    user: defaultUser,
    logOut: defaultLogOut
});

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(defaultUser);

    const logIn = (email, password) => {
        setUser({ ...defaultUser, email, password, isLoggedIn: true });
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