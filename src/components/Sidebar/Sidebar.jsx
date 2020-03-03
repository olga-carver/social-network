import React from 'react';
import classes from '../Sidebar/Sidebar.module.css';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (
<div className={classes.sidebar}>
        <ul className={classes.nav}>
          <li><NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink></li>
          <li><NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink></li>
          <li><NavLink to="/dialogs" activeClassName={classes.activeLink}>Dialogs</NavLink></li>
          <li><NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink></li>
          <li><NavLink to="/friends" activeClassName={classes.activeLink}>Settings</NavLink></li>
        </ul>
        <div className={classes.friends}>
          <div className={classes.friendsItem}>
            <div className={classes.profileImg}>
              <img src="" alt="" className=""/>
              
            </div>
            <p>Petr Ivanovchenko</p>
          </div>
          <div className={classes.friendsItem}>
            <div className={classes.profileImg}>
              <img src="" alt="" className=""/>
             
            </div>
            <p>Alice Korshunova</p>
          </div>
          <div className={classes.friendsItem}>
            <div className={classes.profileImg}>
              <img src="" alt="" className=""/>
             
            </div>
            <p>Ivan Griboedov</p>
          </div>
          <div className={classes.friendsItem}>
            <div className={classes.profileImg}>
              <img src="" alt="" className=""/>
              
            </div>
            <p>Anastasia Kruglova</p>
          </div>
        </div>
      </div>
    );
}

export default Sidebar;