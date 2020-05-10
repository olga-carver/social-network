import React from 'react';
import classes from './Users.module.scss';
import Pangination from '../Pangination/Pangination';
import User from './User';

 
const Users = (props) => {

  return  <div>
     <div  className={classes.panginationWrap}>
     <Pangination className={classes.pangination}
                  onPageChanged={props.onPageChanged}
                  currentPage={props.currentPage}
                  totalCount={props.totalCount}
                  pageSize={props.pageSize}/>

     </div>
     
      <div>
      <User users={props.users}
            follow={props.follow}
            unfollow={props.unfollow}
            followingInProgress={props.followingInProgress}/>
      </div>

      <div  className={classes.panginationWrap}>
     <Pangination className={classes.pangination}
                  onPageChanged={props.onPageChanged}
                  currentPage={props.currentPage}
                  totalCount={props.totalCount}
                  pageSize={props.pageSize}/>

     </div>
    </div>

}


export default Users;
