import React, { useState, useEffect } from 'react';
import CardPeople from '../CardPeople/CardPeople';
// import { url } from '../../api/url';
// import { people } from '../../api/people';
import './BlogCard.css';

const BlogCard = () => {

    const [data, setData] = useState([]);
    const url = 'https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/users';
    const people = 'people';

    useEffect(() => {
        fetch(`${url}`)
        .then(response => response.json())
        .then(data => setData(data))
    })

    return (
        <aside>
            {data.map((item) => {
                return (
                    <CardPeople key={item.id} item={item} />
                )
            })}
        </aside>
    )
}

export default BlogCard;