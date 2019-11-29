import React from 'react';
import './Nav.css';

const Nav = (props) => {
    return (
        <div className="box-shadow header">
            {
                <ul className="d-flex justify-content-end w-100" style={{listStyle: 'none'}}>
                    <li className="nav-item">
                        <a onClick={props.changeTab.bind(null, "HOME")} href='#' className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={props.changeTab.bind(null, "LOGIN")} href='#' className="nav-link">Login</a>
                    </li>
                </ul>
            }
        </div>
    )
}

export default Nav;