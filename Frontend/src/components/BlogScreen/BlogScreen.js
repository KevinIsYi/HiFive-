import React, { useState } from 'react';
import { BannerImage } from '../BannerImage/BannerImage';

import { blogData as bd } from '../../data/blogData';
import { BlogPost } from './BlogPost/BlogPost';

import { getDataById } from '../../selectors/getDataById';

import './BlogScreen.css';

export const BlogScreen = () => {

    const blogData = bd.slice(0, 3);
    const recentPosts = bd.slice(3, 8);

    const [ currentPost, setCurrentPost ] = useState(false);

    const changeCurrentPost = (id) => {
        setCurrentPost(getDataById(id));
    }

    return (
        <>
            <BannerImage 
                image="blog-banner" 
                mainText="Blog"
                height={ 50 }
            />
            <section className="blog-section">
                {
                    !currentPost
                    ?
                        <div>
                        {
                            blogData.map((post) => (
                                <BlogPost 
                                    data={ post }
                                    key={ post.id }
                                    id={ post.id }
                                    changeCurrentPost={ changeCurrentPost }
                                />
                            ))
                        }
                        </div>
                    : 
                        <div>
                            <BlogPost
                                data={ currentPost }
                                id={ currentPost.id }  
                                changeCurrentPost={ changeCurrentPost }
                            />

                        </div>
                        
                }
                <div className="blog-filters">
                    <div className="search-blog">
                        <input type="text" placeholder="Search Keyword"/>
                        <button className="btn">Search</button>
                    </div>
                    <div className="blog-filter-section">
                        <h1>Category</h1>
                        <p
                            onClick={ () => changeCurrentPost(false) }
                        >
                            All
                        </p>
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
                                    <img 
                                        src={ `./assets/blog/${ image }.jpg` } alt={ image } 
                                        onClick={ () => changeCurrentPost(id) }
                                    />
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
