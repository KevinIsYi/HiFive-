import React, { createContext, useState } from 'react';

const initialState = {
    id: null,
    isLogged: true
}

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(initialState);
 
    return (
        <AuthContext.Provider value={{
            auth
        }}>
            {children}
        </AuthContext.Provider>
    );
}