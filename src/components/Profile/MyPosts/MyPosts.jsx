import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../common/FormValidator/formValidator';
import { Textarea } from '../../common/FormControls/formControls';

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
    let postItem = props.postData
        .map((post) => <Post message={post.message} likecount={post.likecount}/>);

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }


    const PostForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" 
                    placeholder="What's new?" 
                    name="newPostText" 
                    component={Textarea}
                    validate={[required, maxLength10]}

                    />
                    </div>                
                <div>                
                    <button>Add Post</button>
                    </div>
            </form>
        )
    }

    const PostReduxForm = reduxForm({form: 'post'})(PostForm);
    
    return (
        <div className={classes.myposts}>
            <div className={classes.addPost}>
                <PostReduxForm onSubmit={addNewPost}/>                
            </div>
            {postItem}
        </div>

    )
}

export default MyPosts;