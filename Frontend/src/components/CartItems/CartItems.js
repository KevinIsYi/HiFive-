import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../hooks/useUserContext';
import { CartItem } from './CartItem/CartItem';

import './CartItems.css';

export const CartItems = () => {

    const [ cartItems, setCartItems ] = useState([]);
    const { isLogged } = useContext(UserContext);
    const [ total, setTotal ] = useState(0);

    const getCartItems = () => {
        const items = JSON.parse(localStorage.getItem('scitems'));
        let total = 0;
        items.forEach(({ price, quantity }) => {
            total += (price * quantity);
        });
        setCartItems(items);
        setTotal(total);
    }
    useEffect( () => {
        getCartItems();
    }, [])

    const editTotal = useCallback((num) => {
        setTotal(total => total + num);
    }, [ setTotal ]);


    const processPurchase = async () => {
        const cartItems = JSON.parse(localStorage.getItem('scitems'));
        const deletedItems = JSON.parse(localStorage.getItem('sc-deleted-items'));
        
        cartItems.forEach(item => {
            deletedItems.push(item);
        });
        
        const url = 'http://localhost:4000/api/purchase/';
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                user: isLogged,
                items: cartItems
            })
        });
        

        localStorage.setItem('scitems', JSON.stringify([]));
        localStorage.setItem('sc-deleted-items', JSON.stringify(deletedItems));
        localStorage.setItem('change', true);
    }

    return (
        <div className="shopping-cart-section">
            <div className="total-section">
                <div className="div-total-description">
                    <p>Total: </p>
                    <h1>${ total.toFixed(2) }</h1>
                </div>
                <Link to="/checkout">
                    <button 
                        className="btn btn-total"
                        onClick={ processPurchase }
                    >
                        Pay
                    </button>
                </Link>
            </div>
            <div className="shopping-cart-items">
                { 
                    cartItems.map(item => (
                        <CartItem 
                            key={ item._id }
                            item={ item } 
                            editTotal={ editTotal }
                        />
                    )) 
                }
            </div>
        </div>
    )
}