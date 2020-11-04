import React, { useState } from 'react';
import { RiDeleteBack2Line } from 'react-icons/ri';

import './CartItems.css';

export const CartItems = () => {

    const [ elements, setElements ] = useState(0);

    return (
        <div className="cart-container">
            <h1>{ elements } Items in your shopping bag </h1>
            <p>Items</p>
            <div className="items">
                <div className="cart-item">
                    <img src="./assets/items/AB01.jpg" />
                    <div className="cart-item-description">
                        <p className="item-description">Louis Vuitton Tote Bag Onthego (White) Handbag </p>
                        <div className="price-breakdown">
                            <p># Items: <span>3</span></p>
                            <p>Unit Price: <span>$360</span></p>
                            <p>Total: <span>$1080</span></p>
                        </div>
                        <RiDeleteBack2Line className="icon" />
                    </div>
                </div>
                
                <div className="cart-item">
                    <img src="./assets/items/AB01.jpg" />
                    <div className="cart-item-description">
                        <p className="item-description">Louis Vuitton Tote Bag Onthego (White) Handbag </p>
                        <div className="price-breakdown">
                            <p># Items: <span>3</span></p>
                            <p>Unit Price: <span>$360</span></p>
                            <p>Total: <span>$1080</span></p>
                        </div>
                        <RiDeleteBack2Line className="icon" />
                    </div>  
                </div>
            </div>
        </div>
    )
}
