import React from 'react';
import { BannerImage } from '../BannerImage/BannerImage';

import { blogData } from '../../data/blogData';
import { BlogPost } from './BlogPost/BlogPost';
import { recentPosts } from '../../data/recentPosts';

import './BlogScreen.css';

export const BlogScreen = () => {

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
                        blogData.map((post, index) => (
                            <BlogPost 
                                key={ index }
                                data={ post } />
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
                            recentPosts.map(({ img, tittle, date }, index) => (
                                <div className="recent-post-blog" key={ index }>
                                    <img src={ `./assets/blog/${ img }.jpg` } alt={ img } />
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
