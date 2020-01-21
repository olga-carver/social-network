import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postItem = props.profilePage.postData
        .map((post) => <Post message={post.message} likecount={post.likecount}/>);

    let newPostElement = React.createRef();

    let onPostClick = () => {
        props.onPostClick();        
    }

    let onPostChange = () => {
        let postText = newPostElement.current.value;
        props.onPostChange(postText);        
    }

    return (
        <div className={classes.myposts}>
            <div className={classes.addPost}>
                <textarea name="" id="" cols="30" rows="10" ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText}/>
                <button onClick={onPostClick}>AddPost</button>
            </div>
            {postItem}
        </div>

    )
}

export default MyPosts;