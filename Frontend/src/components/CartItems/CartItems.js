import React, { useCallback, useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
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
        const req = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                user: isLogged,
                items: cartItems
            })
        });

        const resp = await req.json();
        if (resp.ok) {
            localStorage.setItem('scitems', JSON.stringify([]));
            localStorage.setItem('sc-deleted-items', JSON.stringify(deletedItems));
            localStorage.setItem('change', true);
            setCartItems([]);
            setTotal(0);
            Swal.fire('Success', 'Your purchase has been processed', 'success');
        }
        else {
            Swal.fire('Error', 'Your purchase cannot be processed, contact us to get more info', 'error');
        }
    }

    return (
        <div className="shopping-cart-section">
            <div className="total-section">
                <div className="div-total-description">
                    <p>Total: </p>
                    <h1>${ total.toFixed(2) }</h1>
                </div>
                <button 
                    className="btn btn-total"
                    onClick={ processPurchase }
                >
                    Pay
                </button>
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