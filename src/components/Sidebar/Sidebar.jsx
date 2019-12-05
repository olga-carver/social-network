import React from 'react';
import classes from '../Sidebar/Sidebar.module.css';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (
<nav className={classes.sidebar}>
        <ul>
          <li><NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink></li>
          <li><NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink></li>
          <li><NavLink to="/dialogs" activeClassName={classes.activeLink}>Dialogs</NavLink></li>
          <li><NavLink to="/friends" activeClassName={classes.activeLink}>Settings</NavLink></li>
        </ul>
      </nav>
    );
}

export default Sidebar;