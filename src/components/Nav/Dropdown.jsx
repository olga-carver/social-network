import React, { useState } from 'react';
import classes from './Nav.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav';
import { NavLink } from 'react-router-dom';


const Dropdown = () => {
    let [open, setOpen] = useState(false);
    let showNav = () => setOpen(true);
    let closeNav = () => setOpen(false); 
    Dropdown.handleClickOutside = () => setOpen(false);

    const clickOutsideConfig = {
        handleClickOutside: () => Dropdown.handleClickOutside,
      };

    return <div className={classes.dropdown}>      
            { open 
            ? <button className={classes.menuIcon} onClick={closeNav}><FontAwesomeIcon icon={faTimes}/></button> 
            : <button className={classes.menuIcon} onClick={showNav}><FontAwesomeIcon icon={faBars}/></button>
            }
        { open && <nav className={classes.nav}>
         <ul>
          <li><NavLink  onClick={closeNav} to="/news" className={classes.menuLink} activeClassName={classes.activeLink}>Новости</NavLink></li>
          <li><NavLink  onClick={closeNav} to="/profile" className={classes.menuLink} activeClassName={classes.activeLink}>Профиль</NavLink></li>
          <li><NavLink  onClick={closeNav} to="/dialogs" className={classes.menuLink} activeClassName={classes.activeLink}>Сообщения</NavLink></li>
          <li><NavLink  onClick={closeNav} to="/users" className={classes.menuLink} activeClassName={classes.activeLink}>Пользователи</NavLink></li>
        </ul>     
    </nav >
        }
    </div>
}

   
export default Dropdown;