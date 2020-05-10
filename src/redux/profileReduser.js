import { profileAPI } from '../api/api';
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    postData: [
        { userImg: "https://social-network.samuraijs.com/activecontent/images/users/6224/user-small.jpg?v=2", userName: "olga", message: "I am learning react!", likecount: 13 },
        { userImg: "https://social-network.samuraijs.com/activecontent/images/users/6224/user-small.jpg?v=2", userName: "olga", message: "It is so exiting!", likecount: 17 }
    ],
    newPostText: ' ',
    profile: null,
    status: ''
}


export const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                userImg: "https://social-network.samuraijs.com/activecontent/images/users/6224/user-small.jpg?v=2", 
                userName: "olga",
                message: action.newPostText,
                likecount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost]
            };
            
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }

        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state, 
                profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;

    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})


export const setProfile = (userId) => (dispatch) => {
    profileAPI.setProfile(userId)
        .then(data => {            
            dispatch(setUserProfile(data));         
        }); 
}

export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getUserStatus(userId)
        .then(data => {            
            dispatch(setStatus(data));         
        }); 
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateUserStatus(status)
        .then(data => {   
            if (data.resultCode === 0)         
            dispatch(setStatus(status));         
        }); 
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(setProfile(userId));
    } 
    // else {
    //     dispatch(stopSubmit("editProfile", {_error: response.data.messages[0] }));
    //     return Promise.reject(response.data.messages[0]);
    // }
}

export default profileReduser;