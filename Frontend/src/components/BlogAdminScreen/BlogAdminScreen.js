import React from 'react';

import './BlogAdminScreen.css';

export const BlogAdminScreen = () => {

    return (
        <div className="blog-admin">
            <form>
                <fieldset>
                    <legend>New Blog Post</legend>
                    <h1>Title</h1>
                    <input
                        type="text"
                        placeholder="Blog Title"
                    />
                    <h1>Author</h1>
                    <input
                        type="text"
                        placeholder="Name and Last Name"
                    />
                    <h1>Date</h1>
                    <input
                        type="text"
                        placeholder="Format: month dd, yyyy | i.e. november 20, 2020"
                    />
                    <h1>Image</h1>
                    <input
                        type="file"
                        placeholder="Name and Last Name"
                    />
                    <h1>Content</h1>
                    <textarea 
                        placeholder="Body"
                    />
                    
                </fieldset>
            </form>
        </div>
    )
}
