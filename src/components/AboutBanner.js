import React from 'react';
import Mountain from "../assets/img/mountain.png"
import "../styles/components/_aboutBanner.scss";

const AboutBanner = () => {
    return (
        <div className='about-banner'>
            <img src={Mountain} alt="photo des montagnes" />
        </div>
    );
};

export default AboutBanner;