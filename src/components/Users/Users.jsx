import React from 'react';
import classes from './Users.module.css';
import { NavLink } from "react-router-dom";


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
      { 
        props.users.map(u => <div key={u.id}>
          <div className={classes.wrap}>
            <div className={classes.imgFollow}>
              <NavLink to={'/profile/' + u.id}>
                <img className={classes.profileImg} src={u.photos.small} alt="" />
              </NavLink>
              {
                u.followed
                  ? <button disabled={props.followingInProgress
                    .some(id => id === u.id)} onClick={() => {props.unfollow(u.id)}
                  }>Unfollow</button>

                  : <button disabled={props.followingInProgress
                    .some(id => id === u.id)} onClick={() => {props.follow(u.id);}
                    }>Follow</button>

              }
            </div>
            <div>
              <p className={classes.name}>{u.name}</p>
              <p>{u.status}</p>
            </div>
            {/* <div>hey</div> тут должен быть показан город */}
          </div>
        </div>
        )
      }
    </div>
  )

}


export default Users;
