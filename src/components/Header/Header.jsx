import React from 'react';
import classes from '../Header/Header.module.scss';
import { NavLink } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Dropdown from '../Nav/Dropdown';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <div className={classes.smallScreenNav}><Dropdown/></div>
        <div className={classes.bigScreenNav}><Nav/></div>
      </div>
      <div className={classes.loginLink}>
        {props.isAuth
          ? <div> <p>{props.login}</p> <button onClick={props.logout} className={classes.logOutLink}>Выйти</button> </div>
          : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  );
}

export default Header;

