import React from 'react';
import classes from '../Profile/Profile.module.css';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = (props) => {
  return (
    <section className={classes.content}>
      <PersonalInfo/>
      <MyPostsContainer store={props.store}/>
    </section>
  );
}

export default Profile;