import React from 'react';
import { BannerImage } from './components/BannerImage/BannerImage';
import { Header } from './components/Header/Header';

export const App = () => {
    return (
        <>
            <Header />
            <BannerImage 
                imageText="New Arrivals" 
                btnText="Shop"
            />
        </>
    )
}
