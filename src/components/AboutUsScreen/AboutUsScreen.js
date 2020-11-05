import React from 'react';
import { BannerImage } from '../BannerImage/BannerImage';

import './AboutUsScreen.css';

export const AboutUsScreen = () => {
    return (
        <>
            <BannerImage 
                mainText="About Us"
                height={ 50 }  
                image="about-banner"
            />
            <div className="about-us">
                <h1>Our History</h1>
                <div className="about-us-layout">
                    <img src="./assets/about_us.jpg" alt="about_us" />
                    <div className="about-p">
                        <p>
                            Aenean rhoncus ultrices mi, eget auctor ex malesuada vitae. Vestibulum volutpat aliquet nisl 
                            interdum rutrum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per 
                            Duis semper nulla eget ante aliquam, non tristique enim feugiat. Ut id rhoncus nulla, a maximus 
                            eros. Donec tellus nibh, lacinia quis justo vitae, sollicitudin pharetra sem. Maecenas ultrices 
                            imperdiet nisi nec imperdiet.
                        </p>
                        <p>
                            Integer condimentum feugiat magna non bibendum. Aenean quis turpis hendrerit, convallis ante non, 
                            feugiat justo. Curabitur consequat tincidunt lorem a sollicitudin. Ut eu diam gravida felis 
                            vestibulum maximus. Nunc at ipsum magna. Vestibulum porta consequat nulla nec tincidunt. Vivamus
                            ac elit gravida, malesuada enim sit amet, pulvinar nibh. Ut leo tortor, mollis ac tempus nec, 
                            ullamcorper et malesuada a, porta vitae dolor.
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}
