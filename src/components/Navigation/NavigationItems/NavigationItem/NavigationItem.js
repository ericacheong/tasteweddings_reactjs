import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const navigationItem = (props) => {
    return (
        <li className="NavItem"><a href={props.link}>{props.children}</a></li>
        /*
        <li><NavLink
                to={props.link}
                exact={props.exact}
                className="active">
                {props.children}</NavLink></li>
        */
    )
}

export default navigationItem;