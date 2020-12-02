import React from 'react';
import './OrderDetail.css';

export const OrderDetail = ({ order = [] }) => {
    
    const { orders } = order;

    console.log(orders);

    return (
        <>
            {
                orders.map(({ id, name, quantity, unitPrice }) => (
                    <div 
                        key={ id }
                        className="each-item-description"
                   >
                        <h1> { name }</h1>
                        <p><span>Price:</span> ${ unitPrice.toFixed(2) }</p>
                        <p><span># Items:</span> { quantity }</p>
                        <p><span>Total:</span> ${ (unitPrice * quantity).toFixed(2) }</p>
                    </div>
                ))
            }
        </>
    )
}
