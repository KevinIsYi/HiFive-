import React from 'react';

import { Post } from '../Post/Post';

export const BlogPost = ({ blogPost }) => {

    return (
        <div>
            {
                blogPost.map((post) => (
                    <Post
                        data={ post }
                        key={ post.id }
                        id={ post.id }
                    />
                ))
            }
        </div>
    )
}
