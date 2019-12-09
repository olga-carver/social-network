import React from 'react';
import classes from '../Profile/Profile.module.css';
import Post from './MyPosts/Post/Post';
import PersonalInfo from './PersonalInfo/PersonalInfo';

let postData = [
  { message: "I am learning react!", likecount: 13 },
  { message: "It is so exiting!", likecount: 17 }
]

let postItem = postData
  .map((post) => <Post message={post.message} likecount={post.likecount} />);

const Profile = () => {
  return (
    <section className={classes.content}>
      <PersonalInfo />
      {postItem}
    </section>
  );
}

export default Profile;