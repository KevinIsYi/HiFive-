import React from 'react';

import { Background } from '../Background/Background';
import { BannerImage } from '../BannerImage/BannerImage';
import { BlogSection } from '../BlogSection/BlogSection';
import { Cards } from '../Cards/Cards';
import { Featured } from '../Featured/Featured';
import { LermaPros } from '../LermaPros/LermaPros';

export const LandingScreen = () => {
    return (
        <>
            <BannerImage image="landing-banner" openingText="Back To School" mainText="New Arrivals" buttonText="Shop" />
            <Cards />
            <Featured />
            <BlogSection />
        </>
    )
}
