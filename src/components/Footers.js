import React from 'react';
import WhiteLogo from './WhiteLogo'
import "../styles/components/_footers.scss"

const Footers = () => {
    return (
        <div className='footers-container'>
            <WhiteLogo />
            <h2>© 2020 Kasa. All rights reserved</h2>
        </div>
    );
};

export default Footers;