import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../index.css';

const Nav = () => {
    return (
        <nav>
            <NavLink className="nav-link" to="/playground">
                <li className="fas fa-home"></li>
            </NavLink>
            <ul className="nav-links">
                <NavLink className="nav-link" to="/playground/about">
                    <li>About</li>
                </NavLink>
                <NavLink className="nav-link" to="/playground/monsters">
                    <li>Monsters</li>
                </NavLink>
                <NavLink className="nav-link" to="/playground/monsters">
                    <li>Monsters</li>
                </NavLink>
                <NavLink className="nav-link" to="/playground/monsters">
                    <li>Monsters</li>
                </NavLink>
                <NavLink className="nav-link" to="/playground/monsters">
                    <li>Monsters</li>
                </NavLink>
            </ul>
        </nav>
    );
}

export default Nav;
