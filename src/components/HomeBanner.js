import React from 'react';
import "../styles/components/_homeBanner.scss"

const HomeBanner = (bannerimg) => {
    return (
        <div className='home-banner'>
            <h2>Chez vous, partout et ailleurs</h2>
            <img src="./cliff.png" alt="photo des falaise" />
        </div>
    );
};

export default HomeBanner;