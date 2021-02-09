import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const BannerImage = ({ image, openingText, mainText, buttonText, height }) => {
    const backImage = (image === undefined) ? 'var(--red-color)' : require(`./${ image }.jpg`);

    const imgSection = {
        backgroundColor: backImage,
        backgroundImage: `url(${ backImage })`, // Won't be valid css if url is undefined, so it won't be applied
        height: `${ height }vh`,
    };

    //OpeningText will be shown only if it is provided when calling the component

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
    mainText: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired
}