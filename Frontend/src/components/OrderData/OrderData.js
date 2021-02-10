import React from 'react';
import { OrderDetail } from '../OrderDetail/OrderDetail';

export const OrderData = () => {

    return (
        <>
            <div className="order-data__order">
                <p 
                    className="order-data__order-id"
                >
                    123
                </p>
                <p>10-feb-2020 </p>
                <p>15836</p>
            </div>
            <div className="order-data__items-description-container">
                <OrderDetail />
            </div>
            
        </>
    )
}