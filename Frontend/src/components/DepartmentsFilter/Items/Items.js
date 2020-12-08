import React, { useContext } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserContext } from '../../../hooks/useUserContext';

import './Items.css';

export const Items = ({ items = []}) => {

    const { isLogged } = useContext(UserContext);

    const addToCart = (item) => {
        const cartItems = JSON.parse(localStorage.getItem('scitems'));
        const itemExist = cartItems.find(({ _id }) => _id === item._id);

        cartItems.forEach(currentCartItem => {
            const { _id } = currentCartItem;
            if (_id === item._id) {
                currentCartItem.quantity = currentCartItem.quantity + 1;
            }
        });
        
        if (!itemExist) {
            cartItems.push({...item, quantity: 1});
        }
        
        Swal.fire('Success', 'This Item was added to your shopping cart', 'success');
        localStorage.setItem('change', true);
        localStorage.setItem('scitems', JSON.stringify(cartItems));
    }

    return (
        <div className="items-list">
            {
                items.map(({ _id, img, name, price, available }) => (    
                    <div className="card-item" key={ _id }>
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
                                        onClick={ () => addToCart({ _id, img, name, price, available }) }
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
