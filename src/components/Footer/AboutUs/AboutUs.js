import React from 'react';

export const AboutUs = () => {

    const data = [
        {
            p: 'Address',
            span: '11-17 Road 11354 New York'
        },
        {
            p: 'Phone',
            span: '+65 11.888.888'
        },
        {
            p: 'Email',
            span: 'lerma@lerma.com'
        }
    ];

    return (
        <div className='info-section lerma-info'>
            <img src={ './assets/icons/lerma-logo-white.png' } alt="lerma-logo-white"/>
            {
                data.map(({ p, span }) => (
                    <p key={ p }>{ p }: <span>{ span }</span></p>
                ))
            }
        </div>
    )
}
