import React from 'react';
import '../NavItems.css';

const toggledItems = (props) => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item-toggled">
                <a className="nav-link" href="/">{props.title}</a>
            </li>
        </ul>
    );
}

export default toggledItems;