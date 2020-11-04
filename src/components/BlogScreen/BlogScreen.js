import React from 'react';
import { BannerImage } from '../BannerImage/BannerImage';

import { blogData } from '../../data/blogData';
import { BlogPost } from './BlogPost/BlogPost';

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
                
                    { 
                        blogData.map((post, index) => (
                            <BlogPost 
                                key={ index }
                                data={ post } />
                        ))
                    }
                <div className="blog-filters">

                </div>
            </section>
        </>
    )
}
