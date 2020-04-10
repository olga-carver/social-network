import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postData: [
        { message: "I am learning react!", likecount: 13 },
        { message: "It is so exiting!", likecount: 17 }
    ],
    newPostText: ' ',
    profile: null,
    status: ''
}


export const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
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
            
        default:
            return state;

    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});


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



export default profileReduser;