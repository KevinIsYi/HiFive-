import React from 'react';
import { Clock } from '../Clock/Clock';

import './Background.css';

export const Background = () => {

    return (
        <div className="week-deal">
            <h1>Today's Deal</h1>
            <p>Discover what we have for you today!</p>
            <h2>Expires in</h2>
            <Clock />

            <button className="btn btn-deal center">Find Out</button>
        </div>
    )
}
