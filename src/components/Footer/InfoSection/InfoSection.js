import React from 'react';

export const InfoSection = ({h1, p}) => {
    return (
        <div className="info-section link">
            <h1>{ h1 }</h1>
            {
                p.map(element => (
                    <p key={ element }>{ element }</p>
                ))
            }
        </div>
    )
}