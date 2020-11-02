import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './FeaturedCard.css';

export const FeaturedCard = ({ cardData }) => {

    const { name, image, price, inOffer, offerPrice, isNew } = cardData;

    return (
        <div className="featured-item">
            <img src={ `./assets/featured/${ image }.jpg` } alt={ name } />
            { isNew && <p className="in-image">New</p> }
            <button className="btn btn-add-cart">Add To Cart</button>
            <div className="specifications">
                <p className="item-name">{ name }</p>
                <div className="price-offer">
                    { inOffer && <p className="offer-price">${ price.toFixed(2) }</p> }
                    <p className="current-price">${ offerPrice.toFixed(2) }</p>
                </div>
            </div>
        </div>
    )
}

FeaturedCard.propTypes = {
    cardData: PropTypes.object.isRequired
}