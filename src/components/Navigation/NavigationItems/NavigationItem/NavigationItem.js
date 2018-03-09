import React from 'react';

import './NavigationItem.css';

const navigationItem = (props) => {
    return (
        <li><a className="NavItem" to={props.link} onClick={() => props.clickLink(props.link)}>{props.children}</a></li>

    )
}

export default navigationItem;

