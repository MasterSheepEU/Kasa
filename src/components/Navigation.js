import React from 'react';
import Logo from './Logo';
import { NavLink } from "react-router-dom";
import "../styles/components/_navigation.scss"

const Navigation = () => {
    return (
        <div className='nav-container'>
            <Logo />
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;