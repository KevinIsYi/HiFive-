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
                        <h5><span>Price:</span> ${ unitPrice.toFixed(2) }</h5>
                        <h5><span># Items:</span> { quantity }</h5>
                        <h5><span>Total:</span> ${ (unitPrice * quantity).toFixed(2) }</h5>
                    </div>
                ))
            }
        </>
    )
}
