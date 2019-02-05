/* eslint-disable no-unused-expressions */
import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems= () => (
    <ul className={classes.NavigationItems}>
       <NavigationItem link="/dashboard"> Dashboard</NavigationItem>
       <NavigationItem link="/profile"> Profile</NavigationItem>
       <NavigationItem link="/logout"> Logout</NavigationItem>
    </ul>
);

export default navigationItems;