import React from 'react';
import classes from '../Sidebar/Sidebar.module.css';

const Sidebar = () => {
    return (
<nav className={classes.sidebar}>
        <ul>
          <li><a href="/news">News</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/dialogs">Dialogs</a></li>
          <li><a href="/friends">Settings</a></li>
        </ul>
      </nav>
    );
}

export default Sidebar;