import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../hooks/useUserContext';

import './MyAccountScreen.css';
import { OrderData } from './OrderData/OrderData';

export const MyAccountScreen = () => {

    const { isLogged } = useContext(UserContext);
    const [ isOrder, setIsOrder ] = useState(true);

    const [ buttonClasses, setButtonClasses ] = useState([ 'active-button', 'nonactive-button' ]);
    const [ ordersButtonClass, infoButtonClass ] = buttonClasses;

    const buttonClick = ( newButtonClasses, isAccountState ) => {
        setButtonClasses(newButtonClasses);
        setIsOrder(isAccountState);
    }

    const [ activeClasses, setActiveClasses ] = useState([ 'active-selection', 'nonactive-selection', 'nonactive-selection' ]);
    const [ ordersClass, openOrdersClass, returnClass ] = activeClasses;

    const [ orders, setOrders ] = useState([
        {
            id: '12345454646646',
            total: 1545,
            date: 'February 10, 2020'
        },
        {
            id: '12345454646646',
            total: 1545,
            date: 'February 10, 2020'
        },
        {
            id: '12345454646646',
            total: 1545,
            date: 'February 10, 2020'
        },
        {
            id: '12345454646646',
            total: 1545,
            date: 'February 10, 2020'
        },
]);

    const changeSelection = ( newClasses ) => {
        setActiveClasses(newClasses);
    }

    return (
        <div className="account-container center">
            {/* { !isLogged && <Redirect to="/login" />} */}

            <div className="account-buttons">
                <button className={ `btn btn-account ${ ordersButtonClass }` }
                    onClick={ () => buttonClick([ 'active-button', 'nonactive-button' ], true) }
                >
                    My Orders
                </button>
                <button
                    className={ `btn btn-account ${ infoButtonClass }` }
                    onClick={ () => buttonClick([ 'nonactive-button', 'active-button' ], false) }   
                >
                    My Info
                </button>
            </div>

            {
                isOrder
                ?
                    <fieldset className="account-fieldset">
                        <legend>Your Orders</legend>
                        <div className="order-options">
                            <p 
                                className={ ordersClass }
                                onClick={ () => changeSelection([ 'active-selection', 'nonactive-selection', 'nonactive-selection' ]) }
                            >
                                Orders
                            </p>
                            <p 
                                className={ openOrdersClass }
                                onClick={ () => changeSelection([ 'nonactive-selection', 'active-selection', 'nonactive-selection' ]) }
                            >
                                Open Orders
                            </p>
                            <p 
                                className={ returnClass }
                                onClick={ () => changeSelection([ 'nonactive-selection', 'nonactive-selection', 'active-selection' ]) }
                            >
                                Returns
                            </p>
                        </div>

                        <div className="line-division-orders" />

                        <div className="order-info">
                            <h1>Order ID</h1>
                            <h1>Date</h1>
                            <h1>Total</h1>
                        </div>
                        <OrderData orderData={ orders } />

                    </fieldset>
                :
                    <p>Info</p>
            }

        </div>
    )
}
