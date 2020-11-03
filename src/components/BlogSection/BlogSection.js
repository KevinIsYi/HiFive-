import React from 'react';

import { blogData } from '../../data/blogData';

import './BlogSection.css';

export const BlogSection = () => {
    return (
        <section className="landing-blog">
            <h1>Our Blog</h1>
            <ul className="cards">
                {
                    blogData.map(({ image, tittle, author, date, content }) => (
                        <li className="blog-card" key={ image }>
                            <img src={ `./assets/blog/${ image }.jpg` } alt={ image } />
                            <div className="blog-info">
                                <h1>{ tittle }</h1>
                                <h3>By <span>{ author }</span> on <span>{ date }</span></h3>
                                <p>{ content }</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}