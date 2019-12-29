import React from 'react';
import classes from '../Profile/Profile.module.css';
import Post from './MyPosts/Post/Post';
import PersonalInfo from './PersonalInfo/PersonalInfo';



const Profile = (props) => {

  let postItem = props.postData
    .map((post) => <Post message={post.message} likecount={post.likecount} />);

  return (
    <section className={classes.content}>
      <PersonalInfo />
      {postItem}
    </section>
  );
}

export default Profile;