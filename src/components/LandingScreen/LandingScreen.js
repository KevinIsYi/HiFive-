import React from 'react';

import { Background } from '../Background/Background';
import { BannerImage } from '../BannerImage/BannerImage';
import { Cards } from '../Cards/Cards';
import { LermaPros } from '../LermaPros/LermaPros';

export const LandingScreen = () => {
    return (
        <>
            <BannerImage 
                image="BannerImage" 
                imageText="Everything for your Laptop"
                botonText="Shop"/>
            <Cards />
            <Background />
            <LermaPros />
        </>
    )
}
