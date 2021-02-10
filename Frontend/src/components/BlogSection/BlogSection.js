import React from 'react'
import { blogData as bd } from '../../data/blogData'

export const BlogSection = () => {

    const blogData = bd.slice(0, 3);

    return (
        <section className="blog-section__landing-blog">
            <h1>Our Blog</h1>
            <ul className="blog-section__cards">
                {
                    blogData.map(({ image, tittle, author, date, content }) => (
                        <li className="blog-section__blog-card" key={image}>
                            <img src={`./assets/blog/${image}.jpg`} alt={image} />
                            <div className="blog-section__blog-info">
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
