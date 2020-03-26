import React from 'react';
import classes from '../Header/Header.module.css';
import logo from '../../leaf.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.loginLink}>
        {props.isAuth
          ? props.login
          : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  );
}

export default Header;

