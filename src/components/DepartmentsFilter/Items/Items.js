import React from 'react';

import './Items.css';

export const Items = ({ items = []}) => {

    return (
        <div className="items-list">
            {
                items.map(({ id, name, price }) => (
                    <div className="card-item" key={ id } >
                        <img src={ `./assets/items/${ id }.jpg` } alt={ id }/>
                        <h1>{ name }</h1>
                        <div className="price-see">
                            <p>${ price.toFixed(2) }</p>
                            <p>See</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
