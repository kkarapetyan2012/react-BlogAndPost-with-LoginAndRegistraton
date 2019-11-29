import React from 'react';
import './CardPeople.css';

const CardPeople = (props) => {
    return (
        <div className="card">
            <div className="card-body d-flex align-items-center">
                <img className="" src={props.item.avatar} />
                <h5 className="card-title">{props.item.name}</h5>
            </div>
        </div>
    )
}

export default CardPeople;