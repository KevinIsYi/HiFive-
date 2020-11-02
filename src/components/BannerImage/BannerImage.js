import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './BannerImage.css';

export const BannerImage = ({ image, imageText, botonText }) => {

    const backImage = (image === undefined) ? '#E7AB3C' : require(`./${ image }.jpg`);

    const imgSection = {
        backgroundColor: backImage,
        backgroundImage: `url(${ backImage })`, // Won't be valid css if url is undefined, so it won't be applied
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '50vh',
        margin: '0 0 40px 0',
        position: 'relative',
        textAlign: 'center'
    };

    return (
        <div style={ imgSection } className="img-section">
            <div className="inside-img">
                <h1 className="black-border">{ imageText }</h1>
                <Link to="/categories"><button className="btn center">{ botonText }</button></Link>
            </div>
        </div>
    )
}

BannerImage.propTypes = {
    imageText: PropTypes.string.isRequired,
    botonText: PropTypes.string.isRequired
}