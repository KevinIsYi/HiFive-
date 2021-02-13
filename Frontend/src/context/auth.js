import React, { createContext, useState } from 'react';

const initialState = {
    id: null,
    isLogged: false
}

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth] = useState(initialState);
 
    return (
        <AuthContext.Provider value={{
            auth
        }}>
            {children}
        </AuthContext.Provider>
    );
}