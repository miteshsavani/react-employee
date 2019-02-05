/* eslint-disable no-unused-expressions */
import React from 'react';
import classes from './NavigationItem.css';
import { NavLink } from 'react-router-dom';

const navigationItem= (props) => (
    <li className={classes.NavigationItem}>
        <NavLink to={props.link}
            activeClassName={classes.active}
            className={props.active ? classes.active: null}> {props.children} </NavLink>
    </li>
);

export default navigationItem;