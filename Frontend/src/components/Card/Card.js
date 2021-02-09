import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ card }) => {

    const { name, image } = card;
    
    return (
        <div className="card__card">
            <img src={ `./assets/cards/${ image }.jpg` } alt={`${ image } `} />
            <Link to="/categories" >
                <button 
                    className="btn card__in-middle card__btn-card"
                >
                    { name }
                </button>
            </Link>
        </div>
    )
}