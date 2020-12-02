import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../hooks/useUserContext';

import './MyAccountScreen.css';
import { OrderData } from './OrderData/OrderData';

export const MyAccountScreen = () => {

    const [ purchases, setPurchases ] = useState([]);
    const { isLogged } = useContext(UserContext);


    const getPurchases = async () => {
        const url = 'http://localhost:4000/api/purchase/getpurchases';

        
        
        const req = await fetch(url, {
            method: 'GET',
            headers: {
                'user': isLogged
            }
        });
        const { ok, purchases } = await req.json();
        if (ok) {
            setPurchases(purchases);
        }
    }

    useEffect(() => {
        getPurchases();
    }, []);

    return (
        <div className="account-container center">
            <fieldset className="account-fieldset"> 
                <legend>Your Orders</legend>
                <p>Orders</p>

                <div className="line-division-orders" />

                <div className="order-info">
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
