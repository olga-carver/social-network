import React from 'react';
import classes from '../Header/Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
        <img src="leaf.png" alt="logo" />
        <p>Network</p>
      </header>
    );
}

export default Header;

