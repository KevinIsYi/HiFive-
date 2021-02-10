import React, { useCallback, useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { CartItem } from '../CartItem/CartItem';

export const CartItems = () => {

    const cartItems = [
        {
            _id: 1,
            img: "AB01",
            name: "El pollo pepe",
            price: 153.12,
            quantity: 25,
            available: 10
        },
        {
            _id: 2,
            img: "AB02",
            name: "El pollo pepe",
            price: 153.12,
            quantity: 25,
            available: 10
        },
    ];
    const total = 100;

    return (
        <div className="cart-items__shoppig-cart-section">
            <div className="cart-items__total-section">
                <div className="cart-items__total-description">
                    <p>Total: </p>
                    <h1>${ total.toFixed(2) }</h1>
                </div>
                <button 
                    className="btn cart-items__btn-total"
                >
                    Pay
                </button>
            </div>
            <div className="cart-items__shopping-cart-items">
                { 
                    cartItems.map(item => (
                        <CartItem
                            key={ item._id }
                            item={ item } 
                        />
                    )) 
                }
            </div>
        </div>
    )
}