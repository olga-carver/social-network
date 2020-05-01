import React from 'react';
import classes from '../Sidebar/Sidebar.module.scss';
import {NavLink} from 'react-router-dom';


const Sidebar = (props) => {
    return (
<div className={classes.sidebar}>
        <ul className={classes.nav}>
          <li><NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink></li>
          <li><NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink></li>
          <li><NavLink to="/dialogs" activeClassName={classes.activeLink}>Dialogs</NavLink></li>
          <li><NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink></li>
          <li><NavLink to="/friends" activeClassName={classes.activeLink}>Settings</NavLink></li>
        </ul>        
      </div>
    );
}

export default Sidebar;