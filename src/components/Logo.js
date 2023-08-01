import React from 'react';
import { NavLink } from 'react-router-dom';



const Logo = () => {
    return (
        <NavLink to="/">

            <img src="./logo_kasa.png" alt="Logo de Kasa" />

        </NavLink>
    );
};

export default Logo;