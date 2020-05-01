import React from 'react';
import classes from '../Profile/Profile.module.scss';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';



const Profile = (props) => {
  
  
  return (
    <div className={classes.content}>
      <PersonalInfo profile={props.profile}/>
      <ProfileStatusWithHooks status={props.status} 
      updateUserStatus={props.updateUserStatus}/>
      <MyPostsContainer store={props.store}/>
    </div>
  )
}

export default Profile;