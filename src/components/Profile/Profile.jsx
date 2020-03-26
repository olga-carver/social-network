import React from 'react';
import classes from '../Profile/Profile.module.css';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileStatus from './ProfileStatus';



const Profile = (props) => {
  
  return (
    <section className={classes.content}>
      <PersonalInfo profile={props.profile}/>
      <ProfileStatus status={"Hello, that is my status"}/>
      <MyPostsContainer store={props.store}/>
    </section>
  )
}

export default Profile;