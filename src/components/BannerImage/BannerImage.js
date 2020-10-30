import React from 'react';
import PropTypes from 'prop-types';

import './BannerImage.css';

export const BannerImage = ({ imageText, btnText }) => {

    return (
        <div className="img-section">
            <div className="inside-banner-img">
                <h1 className="text-shadow-red">{ imageText }</h1>
                <button className="btn btn-banner">{ btnText } </button>
            </div>
        </div>
    )
}

BannerImage.propTypes = {
    imageText: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired
}