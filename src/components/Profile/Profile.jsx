import React from 'react';
import classes from '../Profile/Profile.module.css';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import MyPosts from './MyPosts/MyPosts';



const Profile = (props) => {
  return (
    <section className={classes.content}>
      <PersonalInfo/>
      <MyPosts postData={props.postData} addPost={props.addPost}/>
    </section>
  );
}

export default Profile;