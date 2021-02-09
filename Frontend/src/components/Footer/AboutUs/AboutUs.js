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
            span: 'hifive@hifive.com'
        }
    ];

    return (
        <div className='footer__info-section'>
            <img src={ './assets/icons/hifive-logo.png' } alt="hifive-logo"/>
            {
                data.map(({ p, span }) => (
                    <p key={ p }>{ p }: <span>{ span }</span></p>
                ))
            }
        </div>
    )
}
