import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const BannerImage = ({ image, openingText, mainText, buttonText, height }) => {
    const backImage =  require(`./${ image }.jpg`);

    const imgSection = {
        backgroundColor: backImage,
        backgroundImage: `url(${ backImage })`,
        height: `${ height }vh`,
    };

    return (
        <div style={ imgSection } className="banner-image__img-section">
            <div className="banner-image__inside-img">
                { openingText !== undefined && <h5 className="red-border">{ openingText }</h5> } 
                <h1 className="red-border">{ mainText }</h1>
                { buttonText !== undefined && <Link to="/categories"><button className="btn center">{ buttonText }</button></Link> }
            </div>
        </div>
    )
}

BannerImage.propTypes = {
    image: PropTypes.string.isRequired,
    mainText: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired
}