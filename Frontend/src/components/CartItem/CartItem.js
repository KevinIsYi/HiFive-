import React from 'react'
import { AiFillDelete, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';

export const CartItem = () => {

    return (
        <div className="cart-item__shopping-cart-item">
            <img src={`./assets/items/AB01.jpg`} alt="AB01" />
            <div className="cart-item__description-price">
                <h1>El pollo pepe | In Stock: #15</h1>
                <p><span># Items:</span> 20</p>
                <p><span>Unit Price:</span> $15.67</p>
                <p><span>Total:</span> $20.54</p>
                <AiFillDelete 
                    className="cart-item__icon cart-item__sc-icon cart-item__sc-delete-icon" 
                />
                <AiFillPlusCircle 
                    className="cart-item__icon cart-item__sc-icon" 
                />
                <AiFillMinusCircle 
                    className="cart-item__icon cart-item__sc-icon"
                />
            </div>
        </div>
    )
}