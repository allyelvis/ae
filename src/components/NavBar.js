import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/restaurant-pos">Restaurant POS</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;
