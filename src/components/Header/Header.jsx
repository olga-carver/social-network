import React from 'react';
import classes from '../Header/Header.module.css';
import logo from '../../leaf.png';

const Header = () => {
    return (
        <header className={classes.header}>
        <img src={logo} alt="logo" />
        <p>Network</p>
      </header>
    );
}

export default Header;

