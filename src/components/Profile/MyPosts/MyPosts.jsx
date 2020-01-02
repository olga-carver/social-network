import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postItem = props.postData
        .map((post) => <Post message={post.message} likecount={post.likecount} />);

    let newPostElement = React.createRef();

    
    return (
        <div className={classes.myposts}>
            <div className={classes.addPost}>
                <textarea name="" id="" cols="30" rows="10" ref={newPostElement}></textarea>
                <button onClick={props.addPost}>AddPost</button>
            </div>
            {postItem}
        </div>

    )
}

export default MyPosts;