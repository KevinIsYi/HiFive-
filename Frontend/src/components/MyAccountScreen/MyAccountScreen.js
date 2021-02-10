import React, { useState } from 'react';
import { OrderData } from '../OrderData/OrderData';

export const MyAccountScreen = () => {

    const [ purchases ] = useState([]);

    return (
        <div className="my-account__account-container center">
            <fieldset className="my-account__account-fieldset"> 
                <legend>Your Orders</legend>
                <p>Orders</p>

                <div className="my-account__line-division-orders" />

                <div className="my-account__order-info">
                    <h1>Order ID</h1>
                    <h1>Date</h1>
                    <h1>Total</h1>
                </div>
                {
                    purchases.map(order => (
                        <OrderData 
                            key={ order.id }
                            order={ order } 
                        />
                    ))
                }
            </fieldset>

        </div>
    )
}
