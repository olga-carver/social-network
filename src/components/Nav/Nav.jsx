import React from 'react';
import classes from './Nav.module.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {    
    return <nav className={classes.nav}>
         <ul>
          <li><NavLink to="/news" className={classes.menuLink} activeClassName={classes.activeLink}>Новости</NavLink></li>
          <li><NavLink to="/profile" className={classes.menuLink} activeClassName={classes.activeLink}>Профиль</NavLink></li>
          <li><NavLink to="/dialogs" className={classes.menuLink} activeClassName={classes.activeLink}>Сообщения</NavLink></li>
          <li><NavLink to="/users" className={classes.menuLink} activeClassName={classes.activeLink}>Пользователи</NavLink></li>
        </ul>     
    </nav >

}

export default Nav;