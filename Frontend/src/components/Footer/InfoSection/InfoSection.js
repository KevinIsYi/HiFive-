import React from 'react';
import { Link } from 'react-router-dom';

export const InfoSection = ({ h1, p }) => {
    return (
        <div className="info-section link">
            <h1>{ h1 }</h1>
            {
                p.map(([name, link]) => (
                    <Link to={ `${ link }` } key={ name }><p>{ name }</p></Link>
                ))
            }
        </div>
    )
}