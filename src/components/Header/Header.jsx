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
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
          : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  );
}

export default Header;

