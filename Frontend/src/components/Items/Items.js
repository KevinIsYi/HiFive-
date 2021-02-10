import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const Items = ( ) => {
    const items = [{
        _id: "AB01",
        img: "AB01",
        name: "Ropita del Pollo Pepe",
        price: 20.23,
        available: 20,
    }];

    const isLogged = false;

    return (
        <div className="items__items-list">
            {
                items.map(({ _id, img, name, price, available }) => (    
                    <div className="items__card-item" key={ _id }>
                        <img src={ `./assets/items/${ img }.jpg` } alt={ img }/>
                        <h1>{ name }</h1>
                        <div className="items__price-see">
                            <p>${ price.toFixed(2) }</p>
                            {
                                
                                !isLogged
                                ?
                                    <p><Link to='/login'><HiOutlineShoppingBag className="items__card-icon" /></Link></p>
                                :
                                    <p><HiOutlineShoppingBag className="items__card-icon" /></p>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
