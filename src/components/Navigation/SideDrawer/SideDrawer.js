import React from 'react';

import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

import './SideDrawer.css';

const sideDrawer = (props) => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open']
    }
    return (
        <Aux>
            <Backdrop 
                show={props.open} 
                click={props.closed} />
            <div 
                className={attachedClasses.join(' ')}
                onClick={props.closed} >
                <Logo />
                <NavigationItems clickHandler={props.openLinkAndCloseSideDrawerHandler}/>
            </div>
        </Aux>

    );
}

export default sideDrawer;