import React from 'react';

import { Card } from '../Card/Card';
import { cards} from '../../data/cards';

import './Cards.css';

export const Cards = () => {

    return (
        <>
            <h1 className="departments-h1 center-text">Our departments</h1>
            <div className="landing-cards">
            {
                cards.map(card => (
                    <Card 
                        key = { card.image }
                        card = { card }
                    />
                ))
            }    
            </div> 
        </>
    )
}
