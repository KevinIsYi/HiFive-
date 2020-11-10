import React from 'react';
import PropTypes from 'prop-types';

import { BsPerson } from 'react-icons/bs';
import { FaComment } from 'react-icons/fa';

import './BlogPost.css';

export const BlogPost = ({ data, id }) => {
    const { image, tittle, author, date, content } = data;
    const [ month, d ] = date.split(' ');
    const day = d.slice(0, 2);

    const fuc = (clickedId) => {
        console.log(`Entre con ${ clickedId }`);
    }

    return (
        <div className="blog-post">
            <div className="blog-image">
                <img 
                    src={ `./assets/blog/${ image }.jpg` } 
                    alt={ image }
                    onClick={ () => fuc(id) }
                />
                <div className="date-square">
                    <p>{ day }</p>
                    <p>{ month.slice(0, 3) }</p>
                </div>
            </div>
            <div className="blog-content">
                <h1>{ tittle }</h1>
                <p>{ content }</p>
                <div className="blog-data">
                    <div className="icon-info-blog">
                        <BsPerson className="blog-icon" />
                        <p>{ author }</p>
                    </div>
                    <div className="icon-info-blog">
                        <FaComment className="blog-icon" />
                        <p>0 Comments</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

BlogPost.propTypes = {
    data: PropTypes.object.isRequired
}
