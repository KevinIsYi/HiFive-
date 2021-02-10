import React from 'react';
import { CartItem } from '../CartItem/CartItem';

export const CartItems = () => {

    return (
        <div className="cart-items__shoppig-cart-section">
            <div className="cart-items__total-section">
                <div className="cart-items__total-description">
                    <p>Total: </p>
                    <h1>$200.00</h1>
                </div>
                <button 
                    className="btn cart-items__btn-total"
                >
                    Pay
                </button>
            </div>
            <div className="cart-items__shopping-cart-items">
                <CartItem />
            </div>
        </div>
    )
}