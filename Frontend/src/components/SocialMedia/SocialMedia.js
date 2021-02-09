import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export const SocialMedia = () => {
    return (
        <div className="footer__info-section footer__link">
            <h1>Social Media</h1>
            <FaFacebookF className="social-media__icon" />
            <FaInstagram className="social-media__icon" />
            <FaTwitter className="social-media__icon" />   
        </div>
    )
}
