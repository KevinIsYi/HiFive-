import React from 'react';
import { FaLock, FaTruck, FaClock } from 'react-icons/fa';

import './LermaPros.css';

export const LermaPros = () => {
    return (
        <div className="lerma-pros">
            <div className="each-pro">
                <FaTruck className="lerma-pro-icon" />
                <div className="pros">
                    <h1>Free Shipping</h1>
                    <p>For all orders over 99$</p>    
                </div>
            </div>
            <div className="each-pro">
                <FaClock className="lerma-pro-icon" />
                <div className="pros">
                    <h1>Deliver on time</h1>
                    <p>To your doorstep</p>
                </div>
            </div>
            <div className="each-pro">
                <FaLock className="lerma-pro-icon" />
                <div className="pros">
                    <h1>Secure Payment</h1>
                    <p>100 % Secure Payment</p>
                </div>
            </div>
        </div>
    )
}
