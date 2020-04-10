import React from 'react';
import classes from '../Profile/Profile.module.css';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileStatus from './ProfileStatus';



const Profile = (props) => {
  
  
  return (
    <div className={classes.content}>
      <PersonalInfo profile={props.profile}/>
      <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
      <MyPostsContainer store={props.store}/>
    </div>
  )
}

export default Profile;