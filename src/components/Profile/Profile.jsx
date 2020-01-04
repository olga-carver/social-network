import React from 'react';
import classes from '../Profile/Profile.module.css';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import MyPosts from './MyPosts/MyPosts';



const Profile = (props) => {
  return (
    <section className={classes.content}>
      <PersonalInfo/>
      <MyPosts profilePage={props.profilePage} 
      addPost={props.addPost}
      updateNewPostText={props.updateNewPostText}/>
    </section>
  );
}

export default Profile;