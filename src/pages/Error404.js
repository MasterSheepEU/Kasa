import React from 'react';
import { NavLink } from "react-router-dom";
import Navigation from '../components/Navigation';
import Footers from '../components/Footers';
import "../styles/pages/_error404.scss";

const Error404 = () => {
    return (
        <div className='error-page'>
            <Navigation />
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className='return'>
                Retourner sur la page d'acceuil
            </NavLink>
            <Footers />
        </div >

    );
};


export default Error404;