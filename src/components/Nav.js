import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Nav = () => {
    return (
        <nav>
            <Link className="nav-link" to="/playground">
                <h3>Logo</h3>
            </Link>
            <ul className="nav-links">
                <Link className="nav-link" to="/playground/about">
                    <li>About</li>
                </Link>
                <Link className="nav-link" to="/playground/monsters">
                    <li>Monsters</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
