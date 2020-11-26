import React, { useContext, useEffect, useState } from 'react';
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { UserContext } from '../../hooks/useUserContext';

import './CartItems.css';

export const CartItems = () => {

    const [ cartItems, setCartItems ] = useState([]);
    const { isLogged } = useContext(UserContext);
    const [ total, setTotal ] = useState(0);

    const getCartItems = async () => {
        const items = JSON.parse(localStorage.getItem('scitems'));
        let total = 0;
        items.forEach(({ price }) => {
            total += price;
        });
        setCartItems(items);
        setTotal(total);
    }
    useEffect( () => {
        getCartItems();
    }, [])

    const clickedNumberItems = (id, quantity, value, index) => {
        /*
        const newQuantity = Math.max(0, quantity + value);
        const { price } = cartItems[index];
        const totalBefore = cartItems[index].quantity * price;
        setCartItems(cartItems.map(item => item._id === id ? { ...item, quantity: newQuantity } : item));
        const newTotal = newQuantity * price;

        setTotal(total + (newTotal - totalBefore));
        */
    }

    return (
        <div className="shopping-cart-section">
            <div className="total-section">
                <div className="div-total-description">
                    <p>Total: </p>
                    <h1>${ total.toFixed(2) }</h1>
                </div>
                <Link to="/checkout">
                    <button className="btn btn-total">Pay</button>
                </Link>
            </div>
            <div className="shopping-cart-items">
                { 
                    cartItems.map(({ _id, img, name, price }) => (
                        <div className="shopping-cart-item" key={ _id }>
                            <img src={`./assets/items/${ img }.jpg`} alt={ img } />
                            <div className="description-price">
                                <h1>{ name } </h1>
                                <p><span>Price:</span> ${ price }</p>
                            </div>
                        </div>
                    )) 
                }
            </div>
        </div>
    )
}