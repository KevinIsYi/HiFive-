import React from 'react';

import { BsPerson } from 'react-icons/bs';
import { FaComment } from 'react-icons/fa';

export const Post = ({ data, id, changeCurrentPost }) => {
    const { image, tittle, author, date, content } = data;
    const [ month, d ] = date.split(' ');
    const day = d.slice(0, 2);

    return (
        <div className="blog__blog-post">
            <div className="blog__blog-image">
                <img 
                    src={ `./assets/blog/${ image }.jpg` } 
                    alt={ image }
                    onClick={ () => changeCurrentPost(id) }
                />
                <div className="blog__date-square">
                    <p>{ day }</p>
                    <p>{ month.slice(0, 3) }</p>
                </div>
            </div>
            <div className="blog__blog-content">
                <h1>{ tittle }</h1>
                <p>{ content }</p>
                <div className="blog__blog-data">
                    <div className="blog__icon-info-blog">
                        <BsPerson className="blog__blog-icon" />
                        <p>{ author }</p>
                    </div>
                    <div className="blog__icon-info-blog">
                        <FaComment className="blog__blog-icon" />
                        <p>0 Comments</p>
                    </div>
                </div>
            </div>
        </div>
    )
}