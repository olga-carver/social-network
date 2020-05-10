import React from 'react';
import classes from './MyPosts.module.scss';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../common/FormValidator/formValidator';
import { Textarea } from '../../common/FormControls/formControls';

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
    let postItem = props.postData
        .map((post) => 
        <Post message={post.message} likecount={post.likecount}/>
    );

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }
    const PostForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field className={classes.newPostText} type="text" 
                    placeholder="Что нового?" 
                    name="newPostText" 
                    component={Textarea}
                    validate={[required, maxLength10]}

                    />
                    </div>                
                <div>                
                    <button className={classes.sendBtn}>Отправить</button>
                    </div>
            </form>
        )
    }

    const PostReduxForm = reduxForm({form: 'post'})(PostForm);
    
    return (
        <div className={classes.myPosts}>
            <div className={classes.addPost}>
                <PostReduxForm onSubmit={addNewPost} />                
            </div>
            {postItem}
        </div>

    )
}

export default MyPosts;

export const Post = (props) => {
 

    return (
      <div className={classes.blog}>
        <div className={classes.post}>
          <img src='' alt="avatar"/>
         <div>{props.message}</div>
    <button>like {props.likecount}</button>
        </div>
      </div>
    );
  }
  