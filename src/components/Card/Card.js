import React from 'react';

import './Card.css';

export const Card = ({ card }) => {

    const { name, image } = card;
    
    return (
        <div className="card">
            <img src={ `./assets/cards/${ image }.jpg` } alt={`${ image } `} />
            <button className="btn in-middle btn-card">{ name }</button>
        </div>
    )
}