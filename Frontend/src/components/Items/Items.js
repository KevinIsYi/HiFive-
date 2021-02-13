import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const Items = ({ products }) => {

    return (
        <div className="items__items-list">
            {
                products.map(({ _id, image, name, price }) => (    
                    <div className="items__card-item" key={ _id }>
                        <img src={ image } alt={ image }/>
                        <h1>{ name }</h1>
                        <div className="items__price-see">
                            <p>${ price.toFixed(2) }</p>
                            <p><Link to="/cart"><HiOutlineShoppingBag className="items__card-icon" /></Link></p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
