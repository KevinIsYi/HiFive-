import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserCategory } from '../../hooks/useUserCategory';

import './Card.css';

export const Card = ({ card }) => {

    const { setCategory } = useContext(UserCategory);
    const { name, image, id } = card;

    const changeCategory = () => {
        setCategory(id);
    }
    
    return (
        <div className="card">
            <img src={ `./assets/cards/${ image }.jpg` } alt={`${ image } `} />
            <Link to="/categories" >
                <button 
                    className="btn in-middle btn-card"
                    onClick={ changeCategory }
                >
                    { name }
                </button>
            </Link>
        </div>
    )
}