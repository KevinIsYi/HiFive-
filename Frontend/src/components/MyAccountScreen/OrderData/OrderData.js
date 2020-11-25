import React from 'react';
import PropTypes from 'prop-types';

import './OrderData.css';

export const OrderData = ({ orderData }) => {

    return (
        <>
            {
                orderData.map(({ id, total, date }) => (
                    <div className="order" key={ id }>
                        <p className="order-id">{ id }</p>
                        <p>{ date }</p>
                        <p>${ total.toFixed(2) }</p>
                    </div>
                ))
            }
        </>
    )
}

OrderData.propTypes = {
    orderData: PropTypes.array.isRequired
}