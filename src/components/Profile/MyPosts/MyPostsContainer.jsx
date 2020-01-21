import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReduser';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


// const MyPostsContainer = (props) => {
//     let state = props.store.getState();

//     let onPostClick = () => {
//         props.store.dispatch(addPostActionCreator());        
//     }

//     let onPostChange = (body) => {
//         props.store.dispatch(updateNewPostTextActionCreator(body));        
//     }

//     return <MyPosts onPostChange={onPostChange} onPostClick={onPostClick} profilePage={state.profilePage}/>

// }

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (body) => dispatch(updateNewPostTextActionCreator(body)),
        onPostClick: () => dispatch(addPostActionCreator())       
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;