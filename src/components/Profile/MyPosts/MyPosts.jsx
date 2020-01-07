import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReduser';


const MyPosts = (props) => {
    let postItem = props.profilePage.postData
        .map((post) => <Post message={post.message} likecount={post.likecount}/>);

    let newPostElement = React.createRef();

    let onPostClick = () => {
        props.dispatch(addPostActionCreator());        
    }

    let onPostChange = () => {
        let postText = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(postText));        
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