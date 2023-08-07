import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoKasa from "../assets/img/logo_kasa.png"



const Logo = () => {
    return (
        <NavLink to="/">

            <img src={LogoKasa} alt="Logo de Kasa" />

        </NavLink>
    );
};

export default Logo;