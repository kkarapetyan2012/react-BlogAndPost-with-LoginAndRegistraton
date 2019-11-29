import React from 'react';
import './OneBlog.css';

const OneBlog = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{props.item.title}</h5>
                    <h5 className="card-author">{props.item.author}</h5>
                </div>
                
                <h6 className="card-description">{props.item.description}</h6>
            </div>
        </div>
    )
}

export default OneBlog;