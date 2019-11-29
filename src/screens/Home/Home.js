import React from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import BloggerCard from '../../components/BloggerCard/BloggerCard'
import './Home.css';

const Home = () => {
    return (
        <div className="d-flex justify-content-between">
            <BlogCard />
            <BloggerCard />
        </div>
    )
}

export default Home;