import React from 'react';
import { BannerImage } from '../BannerImage/BannerImage';

import { blogData as bd } from '../../data/blogData';
import { BlogPost } from './BlogPost/BlogPost';

import './BlogScreen.css';

export const BlogScreen = () => {

    const blogData = bd.slice(0, 3);
    const recentPosts = bd.slice(3, 8);

    return (
        <>
            <BannerImage 
                image="blog-banner" 
                mainText="Blog"
                height={ 50 }
            />
            <section className="blog-section">
                <div>
                    { 
                        blogData.map((post) => (
                            <BlogPost 
                                data={ post }
                                key={ post.id }
                            />
                        ))
                    }
                </div>
                <div className="blog-filters">
                    <div className="search-blog">
                        <input type="text" placeholder="Search Keyword"/>
                        <button className="btn">Search</button>
                    </div>
                    <div className="blog-filter-section">
                        <h1>Category</h1>
                        <p>Restaurant Food</p>
                        <p>Travel</p>
                        <p>Trending</p>
                        <p>Inspiration</p>
                        <p>Healt Care</p>
                    </div>
                    <div className="blog-filter-section">
                        <h1>Recent Posts</h1>
                        {
                            recentPosts.map(({ id, image, tittle, date }) => (
                                <div 
                                    className="recent-post-blog" 
                                    key={ id }
                                >
                                    <img src={ `./assets/blog/${ image }.jpg` } alt={ image } />
                                    <div className="recent-post-info">
                                        <h2>{ tittle }</h2>
                                        <p>{ date }</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
