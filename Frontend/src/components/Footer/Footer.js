import React from 'react';
import { AboutUs } from '../AboutUs/AboutUs';
import { InfoSection } from '../InfoSection/InfoSection';
import { SocialMedia } from '../SocialMedia/SocialMedia';
import { footerInfo } from '../../data/footerInfo';


export const Footer = () => {

    return (
        <footer className="footer__footer">
            <div className="footer__footer-container">
                <AboutUs />
                <SocialMedia />
                {
                    footerInfo.map(({ h1, p }) => (
                        <InfoSection 
                            key = { h1 }
                            h1 = { h1 }
                            p = { p }
                        />
                    ))
                }
            </div>

        </footer>
    )
}
