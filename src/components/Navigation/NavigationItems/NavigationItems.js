import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = (props) => {
    return (
        <ul className="NavItems">
          <NavigationItem link="service">服務</NavigationItem>
          <NavigationItem link="photo">攝影</NavigationItem>
          <NavigationItem link="book">著作</NavigationItem>
          <NavigationItem link="about">關於</NavigationItem>
          <NavigationItem link="contact">聯絡</NavigationItem>
        </ul>
    )
}

export default navigationItems;