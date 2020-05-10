import React from 'react';
import classes from '../Profile/Profile.module.scss';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

 

const Profile = (props) => {
  
  
  return (
    <div className={classes.content}>
      <PersonalInfo profile={props.profile} status={props.status} isOwner={props.isOwner} savePhoto={props.savePhoto}
      updateUserStatus={props.updateUserStatus} saveProfile={props.saveProfile}/>
      <MyPostsContainer store={props.store}/>
    </div>
  )
} 

export default Profile;