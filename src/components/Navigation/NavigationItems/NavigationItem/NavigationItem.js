import React from 'react';
import { Link } from 'react-scroll';

import './NavigationItem.css';

const navigationItem = (props) => {
    return (
        <li>
            <Link className="NavItem" 
                  activeClass="active" to={props.link} spy={true} duration={500} 
                  offset={-60}
                  smooth={true}>{props.children}</Link></li>

    )
}

export default navigationItem;