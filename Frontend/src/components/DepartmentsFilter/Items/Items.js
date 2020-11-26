import React, { useContext, useState } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../hooks/useUserContext';

import './Items.css';

export const Items = ({ items = []}) => {

    const { isLogged } = useContext(UserContext);
    const [ wasCartClicked, setWasCartClicked ] = useState(false);
    const cartClass = wasCartClicked & 'clicked-cart' || '';

    const addToCart = (item) => {
        const cartItems = JSON.parse(localStorage.getItem('scitems'));
        const itemExist = cartItems.find(({ _id }) => _id === item._id);
        
        if (!itemExist) {
            cartItems.push(item);
            localStorage.setItem('change', true);
        }
        localStorage.setItem('scitems', JSON.stringify(cartItems));
    }

    return (
        <div className="items-list">
            {
                items.map(({ _id, img, name, price }) => (
                    <div className="card-item" key={ _id } >
                        <img src={ `./assets/items/${ img }.jpg` } alt={ img }/>
                        <h1>{ name }</h1>
                        <div className="price-see">
                            <p>${ price.toFixed(2) }</p>
                            {
                                !isLogged
                                ?
                                    <p><Link to='/login'><HiOutlineShoppingBag className="icon" /></Link></p>
                                :
                                    <p 
                                        className={ cartClass }
                                        onClick={ () => addToCart({ _id, img, name, price }) }
                                    >
                                        <HiOutlineShoppingBag className="icon" />
                                    </p>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
