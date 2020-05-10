import React from 'react';
import classes from './Users.module.scss';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';


const User = (props) => {

  return  <div  className={classes.outUserName}>

      {
        props.users.map(u => <div key={u.id}>

          <div className={classes.userLinkWrap}>

            <div className={classes.imgFollow}>
              <NavLink to={'/profile/' + u.id}>
                <div className={classes.profileImg}>
                { 
                  u.photos.small
                  ? <img  src={u.photos.small} alt="" />
                  : <FontAwesomeIcon  icon={faUserAlt}/>
                  }
                </div>
              </NavLink>
              </div>

              <div className={classes.userInfo}>
              <p className={classes.name}>{u.name}</p>
              <p className={classes.status}>{u.status}</p>
              <a className={classes.writeMessage} href="">Написать сообщение</a>
              </div>
              <div className={classes.btnWrap}>
              {
                u.followed
                  ? <button className={classes.followBtn} disabled={props.followingInProgress
                    .some(id => id === u.id)} onClick={() => {props.unfollow(u.id)}
                  }>Отписаться</button>

                  : <button className={classes.followBtn} disabled={props.followingInProgress
                    .some(id => id === u.id)} onClick={() => {props.follow(u.id);}
                    }>Подписаться</button>

              }
              </div>      

          </div>

        </div>
        )
      }
      </div>

}


export default User;
