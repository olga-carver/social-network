import React from 'react';
import classes from '../Post/Post.module.css';

const Post = () => {
  return (
    <div className={classes.blog}>
      <div className={classes.post}>
        <img src="" alt="avatar"/>
        <p>I did it!!!</p>
        <button>like</button>
      </div>
    </div>
  );
}

export default Post;