import React, { useState, useEffect } from 'react';
import OneBlog from '../OneBlog/OneBlog';
// import { url } from '../../api/url';
// import { postLink } from '../../api/post';
import './BloggerCard.css';

const BloggerCard = () => {
    const [post, setPost] = useState([]);
    const url = 'https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/postblog';
    // const post = 'post';

    useEffect(() => {
        fetch(`${url}`)
        .then(response => response.json())
        .then(post => setPost(post))
    })

    return (
        <div>
            {post.map((item) => {
                return (
                    <OneBlog key={item.id} item={item} />
                )
            })}
        </div>
    )
}

export default BloggerCard;