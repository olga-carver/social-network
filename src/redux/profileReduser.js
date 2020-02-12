const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        { message: "I am learning react!", likecount: 13 },
        { message: "It is so exiting!", likecount: 17 }
    ],
    newPostText: ' '
}

export const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likecount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
            
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
            
        }
            
        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

    // export default profileReduser;