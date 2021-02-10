import React from 'react'

export const RecentBlogPosts = ({ recentPosts }) => {

    return (
        <div className="blog__blog-filter-section">
            <h1>Recent Posts</h1>
            {
                recentPosts.map(({ id, image, tittle, date }) => (
                    <div 
                        className="recent-blog-post__blog_post" 
                        key={ id }
                    >
                        <img 
                            src={ `./assets/blog/${ image }.jpg` } alt={ image } 
                        />
                        <div>
                            <h2>{ tittle }</h2>
                            <p>{ date }</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
