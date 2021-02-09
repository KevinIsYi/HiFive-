import React from 'react';
import { Card } from '../Card/Card';
import { cards} from '../../data/cards';

export const Cards = () => {
    return (
        <>
            <h1 className="center-text cards__departments-h1">Our departments</h1>
            <div className="cards__cards-layout">
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
