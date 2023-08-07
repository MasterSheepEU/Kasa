import React from 'react';
import Cliff from '../assets/img/cliff.png'
import "../styles/components/_homeBanner.scss"

const HomeBanner = () => {
    return (
        <div className='home-banner'>
            <h2>Chez vous, partout et ailleurs</h2>
            <img src={Cliff} alt="photo des falaise" />
        </div>
    );
};

export default HomeBanner;