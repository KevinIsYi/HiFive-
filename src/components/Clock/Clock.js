import React from 'react';

import './Clock.css'

export const Clock = () => {

    return (
        <div className="clock">
            <div className="each-number">
                <p>00</p>
                <h4>Hrs</h4>
            </div>
            <div className="each-number">
                <p>00</p>
                <h4>Mins</h4>
            </div>
            <div className="each-number">
                <p>00</p>
                <h4>Secs</h4>
            </div>
        </div>
    )
}
