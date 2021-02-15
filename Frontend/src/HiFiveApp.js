import React from 'react';
import { AuthProvider } from './context/auth';
import { ProductsProvider } from './context/products';
import { AppRouter } from './routers/AppRouter';

export const HiFiveApp = () => {
    return (
        <AuthProvider>
            <ProductsProvider>
                <AppRouter />
            </ProductsProvider>
        </AuthProvider>
    )
}
