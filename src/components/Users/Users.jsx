import React from 'react';
import classes from './Users.module.scss';
import { NavLink } from "react-router-dom";
import { avatar } from '../../images/users/avatar.svg';


const Users = (props) => {
  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <ul className={classes.pages}>
        {
          pages.map(p => {
            return <li onClick={() => { props.onPageChanged(p); }} className={`${classes.page} ${props.currentPage === p && classes.activePage}`}>{p}</li>
          })
        }
      </ul>

      <div  className={classes.outUserName}>
      {
        props.users.map(u => <div key={u.id}>

          <div className={classes.userLinkWrap}>
            <div className={classes.imgFollow}>
              <NavLink to={'/profile/' + u.id}>
                <div className={classes.profileImg}>
                { 
                  u.photos.small
                  ? <img  src={u.photos.small} alt="" />
                  : <img  src={avatar} alt="" />
                  }
                </div>
              </NavLink>
              </div>

              <div className={classes.userInfo}>
              <p className={classes.name}>{u.name}</p>
              <p className={classes.status}>{u.status}</p>
              {
                u.followed
                  ? <button className={classes.followBtn} disabled={props.followingInProgress
                    .some(id => id === u.id)} onClick={() => {props.unfollow(u.id)}
                  }>Unfollow</button>

                  : <button className={classes.followBtn} disabled={props.followingInProgress
                    .some(id => id === u.id)} onClick={() => {props.follow(u.id);}
                    }>Follow</button>

              }
              </div>      

          </div>

        </div>
        )
      }
      </div>
    </div>
  )

}


export default Users;
