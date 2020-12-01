import React, { useEffect, useState } from 'react';

import './OrderData.css';

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
    }, []);

    return (
        <>
            <div className="order">
                <p className="order-id">{ id }</p>
                <p>{ date.slice(0, 10) } </p>
                <p>${ total.toFixed(2) }</p>
            </div>
        </>
    )
}