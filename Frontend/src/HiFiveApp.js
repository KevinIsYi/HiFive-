import React from 'react';
import { AuthProvider } from './context/auth';
import { AppRouter } from './routers/AppRouter';

export const HiFiveApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}
