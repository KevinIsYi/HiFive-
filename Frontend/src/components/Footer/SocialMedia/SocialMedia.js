import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import './SocialMedia.css'

export const SocialMedia = () => {
    return (
        <div className="info-section social-media link">
            <h1>Social Media</h1>
            <FaFacebookF className="social-media-icon" />
            <FaInstagram className="social-media-icon" />
            <FaTwitter className="social-media-icon" />   
        </div>
    )
}
