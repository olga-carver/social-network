import React from 'react';
import { addPost } from '../../../redux/profileReduser';
import { connect } from 'react-redux';
import classes from './MyPosts.module.scss';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../../common/FormValidator/formValidator';
import { Textarea } from '../../common/FormControls/formControls';
import { compose } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';




const maxLength100 = maxLengthCreator(100);

const MyPosts = (props) => {

    let date = new Date().toLocaleString();
    let setCurrentDate = () => {
        console.log(date);
    }

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
                            validate={[required, maxLength100]}
                    />
                </div>
                <div>
                    <button className={classes.sendBtn} onClick={setCurrentDate}>Отправить</button>
                </div>
            </form>
        )
    }

    const PostReduxForm = reduxForm({form: 'post'})(PostForm);
    
    const reversedPostList = [...props.postData].reverse();

    return (
        <div className={classes.myPosts}>
            <div className={classes.addPost}>
                <PostReduxForm onSubmit={addNewPost} />
            </div>
            <div>
                { reversedPostList.map((post) => {
                        return <Post userImg={post.userImg} userName={post.userName} message={post.message} likecount={post.likecount}/>
                })}
            </div>
        </div>
    )

}


const Post = (props) => {
    return (
        <div className={classes.blog}>
            <div className={classes.post}>
                <div className={classes.userInfo}>
                    <div className={classes.postImg}>
                        <img src={props.userImg} alt="avatar" />
                    </div>
                    <div className={classes.postName}>
                        {props.userName}
                    </div>
                </div>
                <div>
                    <div>{props.message}</div>
                    <button><FontAwesomeIcon icon={faHeart}/> {props.likecount}</button>
                </div>
            </div>
        </div>
    );
  }
  

//  const MyPostsContainer = connect (mapStateToProps, { addPost }) (MyPosts);
let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        profile: state.profilePage.profile,
        profilePage: state.profilePage       
    }    
}

 export default compose (
    connect (mapStateToProps, { addPost }),
  )(MyPosts);