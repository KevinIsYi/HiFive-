import React from 'react';
import Media from 'react-media';

import { FeaturedCard } from './FeaturedCard/FeaturedCard';

import { featured } from '../../data/featured';

import './Featured.css';

export const Featured = () => {

    const queries = {
        two: '(min-width: 480px)',
        three: '(min-width: 768px)',
        four: '(min-width: 900px)'
    }

    return (
        <section className="featured-section">
            <h1>Featured</h1>
            <div className="featured">
                <FeaturedCard cardData={ featured[0] }/>
                <Media queries={ queries } >
                    {({ two, three, four }) => (
                        <>
                            {       
                                <>
                                    { two && <FeaturedCard cardData={ featured[1] }/> }
                                    { three && <FeaturedCard cardData={ featured[2] }/> }
                                    { four && <FeaturedCard cardData={ featured[3] }/> }
                                </>
                            }
                        </>
                    )}
                </Media>
            </div>
        </section>
    )
}
