import React from 'react';

import { Background } from '../Background/Background';
import { BannerImage } from '../BannerImage/BannerImage';
import { Cards } from '../Cards/Cards';
import { LermaPros } from '../LermaPros/LermaPros';

export const LandingScreen = () => {
    return (
        <>
            <BannerImage image="landing-banner" openingText="Back To School" mainText="New Arrivals" buttonText="Shop" />
            <Cards />
            <Background />
            <LermaPros />
        </>
    )
}
