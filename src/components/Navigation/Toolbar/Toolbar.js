import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import './Toolbar.css';

const toolbar = (props) => {
    return (
        <div className="Toolbar">
            <div className="LogoContainer">
                <Logo />
            </div>
            <nav className="DesktopOnly">
                <NavigationItems />
            </nav>
            <DrawerToggle clicked={props.click}/>
        </div>

    )
}

export default toolbar;