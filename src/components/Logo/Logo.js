import React from 'react';

import LogoBrown from '../../assets/images/logo_brown.png';
import LogoWhite from '../../assets/images/logo_yellow.png';
import './Logo.css';

const logo = (props) => {
    return (
        props.coverlogo ? 
            <img src={LogoWhite} alt="Tasteweddings logo" className="Logo" /> :
            <img src={LogoBrown} alt="Tasteweddings logo" className="Logo" />
    )
}

export default logo;