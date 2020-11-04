import React from 'react';

import { BannerImage } from '../BannerImage/BannerImage';
import { BlogSection } from '../BlogSection/BlogSection';
import { Cards } from '../Cards/Cards';
import { Featured } from '../Featured/Featured';
import { HiFivePros } from '../HiFivePros/HiFivePros';

export const LandingScreen = () => {
    return (
        <>
            <BannerImage 
                image="landing-banner" 
                openingText="Back To School" 
                mainText="New Arrivals" 
                buttonText="Shop" 
                height={ 70 }
            />
            <Cards />
            <Featured />
            <BlogSection />
            <HiFivePros />
        </>
    )
}
