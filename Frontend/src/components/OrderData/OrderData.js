import React, { useEffect, useState } from 'react';
import { OrderDetail } from '../OrderDetail/OrderDetail';

export const OrderData = ({ order }) => {

    const { id, date, orders } = order;
    const [ total, setTotal ] = useState(0);
    const [ show, setShow ] = useState(false);

    useEffect(() => {
        let tot = 0;
        orders.forEach(({ quantity, unitPrice }) => {
            tot += (quantity * unitPrice);
        });
        setTotal(tot);
    }, [ orders ] );

    return (
        <>
            <div className="order-data__order">
                <p 
                    className="order-data__order-id"
                    onClick={ () => setShow(!show) }
                >
                    { id }
                </p>
                <p>{ date.slice(0, 10) } </p>
                <p>${ total.toFixed(2) }</p>
            </div>
            {
                show && 
                <div className="order-data__items-description-container">
                    <OrderDetail order={ order } />
                </div>
            }
        </>
    )
}