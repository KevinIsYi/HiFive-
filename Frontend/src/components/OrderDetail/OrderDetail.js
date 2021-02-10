import React from 'react';

export const OrderDetail = ({ order = [] }) => {
    
    const { orders } = order;

    return (
        <>
            {
                orders.map(({ id, name, quantity, unitPrice }) => (
                    <div 
                        key={ id }
                        className="order-detail__each-item-description"
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
