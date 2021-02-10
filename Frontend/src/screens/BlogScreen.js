import React from 'react';
import { BannerImage } from '../components/BannerImage/BannerImage';
import { BlogCategories } from '../components/BlogCategories/BlogCategories';
import { BlogPost } from '../components/BlogPost/BlogPost';

import { RecentBlogPosts } from '../components/RecentBlogPosts/RecentBlogPosts';

const blogPost = [
    {
        id: 1,
        image: 'blog-01',
        tittle: 'Prepare for Winter',
        author: 'María Latroshka',
        date: 'June 21, 2020',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis libero, earum facilis eius deleniti, nisi temporibus fugit non.'
    },
    {
        id: 2,
        image: 'blog-02',
        tittle: 'What with what?',
        author: 'Kavita Kola',
        date: 'July 22, 2020',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis libero, earum facilis eius deleniti, nisi temporibus fugit non.'
    },
    {
        id: 3,
        image: 'blog-03',
        tittle: 'Wedding tips',
        author: 'June Otrarumateska',
        date: 'August 19, 2020',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis libero, earum facilis eius deleniti, nisi temporibus fugit non.'
    },
    {
        id: 4,
        image: 'recent-01',
        tittle: 'Winter Is Coming',
        author: 'Sansa Stark',
        date: 'October 12, 2020',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis libero, earum facilis eius deleniti, nisi temporibus fugit non.'
    },
    {
        id: 5,
        image: 'recent-02',
        tittle: 'Time to Explore',
        author: 'Mahmud Atriminish',
        date: 'December 31, 2019',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis libero, earum facilis eius deleniti, nisi temporibus fugit non.'
    },
    {
        id: 6,
        image: 'recent-03',
        tittle: 'New year, new me',
        author: 'Quetzeri Marmolenko',
        date: 'August 19, 2020',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis libero, earum facilis eius deleniti, nisi temporibus fugit non.'
    },
    {
        id: 7,
        image: 'recent-04',
        tittle: 'Be the best chef',
        author: 'Pablita Castaño',
        date: 'November 17, 2019',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia veritatis libero, earum facilis eius deleniti, nisi temporibus fugit non.'
    }
];

export const BlogScreen = () => {

    const blogData = blogPost.slice(0, 3);
    const recentPosts = blogPost.slice(3, 8);

    return (
        <>
            <BannerImage 
                image="blog-banner" 
                mainText="Blog"
                height={ 50 }
            />
            <section className="blog__blog-section">
                <BlogPost blogPost={blogData} />           
                <div className="blog__blog-filters">
                    <BlogCategories />
                    <RecentBlogPosts recentPosts={recentPosts} />
                </div>
            </section>
        </>
    )
}
