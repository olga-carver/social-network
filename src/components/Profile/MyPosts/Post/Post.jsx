import React from 'react';
import classes from '../Post/Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.blog}>
      <div className={classes.post}>
        <img src="" alt="avatar"/>
       <div>{props.message}</div>
  <button>like {props.likecount}</button>
      </div>
    </div>
  );
}

export default Post;