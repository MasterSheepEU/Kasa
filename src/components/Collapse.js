import React from 'react';
import { useState } from 'react';
import "../styles/components/_collapse.scss"


const Accordeon = ({ title, content }) => {

    const [active, setActive] = useState(false)

    const handletoogle = () => {
        setActive(!active)
    }


    return (

        <div className={`accordeon ${active && "active"}`}>
            <div className='accordeon-title' onClick={handletoogle}>{title}<span className='accordeon-icon'></span></div>
            <div className='accordeon-content'>{content}</div>
        </div>

    );
};

export default Accordeon