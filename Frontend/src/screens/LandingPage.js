import React from 'react'
import { BannerImage } from '../components/BannerImage/BannerImage'
import { BlogSection } from '../components/BlogSection/BlogSection'
import { Cards } from '../components/Cards/Cards'
import { HiFivePros } from '../components/HiFivePros/HiFivePros'

export const LandingPage = () => {
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
            <BlogSection /> 
            <HiFivePros />
        </>
    )
}
