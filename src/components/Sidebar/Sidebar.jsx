import React from 'react';
import classes from '../Sidebar/Sidebar.module.css';

const Sidebar = () => {
    return (
<nav className={classes.sidebar}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Messages</li>
          <li>Friends</li>
          <li>Video</li>
        </ul>
      </nav>
    );
}

export default Sidebar;