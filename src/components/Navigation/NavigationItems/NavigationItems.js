import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = (props) => {
    return (
        <ul className="NavItems">
          <NavigationItem link="service" clickLink={props.clickHandler}>服務</NavigationItem>
          <NavigationItem link="photo" clickLink={props.clickHandler}>攝影</NavigationItem>
          <NavigationItem link="book" clickLink={props.clickHandler}>著作</NavigationItem>
          <NavigationItem link="about" clickLink={props.clickHandler}>關於</NavigationItem>
          <NavigationItem link="contact" clickLink={props.clickHandler}>聯絡</NavigationItem>
        </ul>
    )
}

export default navigationItems;