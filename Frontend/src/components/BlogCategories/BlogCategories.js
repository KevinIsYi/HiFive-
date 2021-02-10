import React from 'react'

export const BlogCategories = () => {
    return (
        <>
            <div className="blog-categories__search-blog">
                <input type="text" placeholder="Search Keyword"/>
                <button className="btn">Search</button>
            </div>
            <div className="blog__blog-filter-section">
                <h1>Category</h1>
                <p>All</p>
                <p>Restaurant Food</p>
                <p>Travel</p>
                <p>Trending</p>
                <p>Inspiration</p>
                <p>Healt Care</p>
            </div>
        </>
    )
}
