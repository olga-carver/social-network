import React from 'react';
import classes from '../Profile/Profile.module.css';
import Post from './MyPosts/Post/Post';

const Profile = () => {
    return (
        <section className={classes.content}>
        <img src="" alt="" className="photo" />
        <div className="info">
          <p>Anton Egorov</p>
          <small>Programmer</small>
          <p>Age: 30</p>
        </div>
        <Post message='I am learning react!' likecount='15'/>
        <Post message='It is so exiting!' likecount='20'/>
      </section>
    );
}

export default Profile;