/* eslint-disable no-unused-expressions */
import React from 'react';
import Logo from '../../assets/logo.jpg';
import classes from './Logo.css';

const logo= (props) => (
    <div className={classes.Logo} >
        <img src={Logo} alt="MyCoffee" />
    </div>
);

export default logo;