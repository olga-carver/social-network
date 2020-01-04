import { renderEntireFile } from "../render";

let state = {
    profilePage: {
        postData: [
            { message: "I am learning react!", likecount: 13 },
            { message: "It is so exiting!", likecount: 17 }
        ],
        newPostText: ' '
    },

    dialogsPage: {
        dialogsData: [
            { id: 1, name: "Olga" },
            { id: 2, name: "Ilya" },
            { id: 3, name: "Timofey" },
            { id: 4, name: "Lena" }
        ],
        
        messagesData: [
            { message: "Hi!" },
            { message: "Hi!" },
            { message: "Hi!" },
            { message: "Hi!" }
        ],

        newDialogMessage: 'hi'
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likecount: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireFile(state);
}

export let updateNewPostText = (newText)  => {
    state.profilePage.newPostText = newText;
    renderEntireFile(state);
}

export let sendMessage = () => {
    let newMessage =  {
        message: state.dialogsPage.newDialogMessage
    }    
    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.newDialogMessage = '';
    renderEntireFile(state);
}

export let updateNewMessageText = (newMessage)  => {
    state.dialogsPage.newDialogMessage = newMessage;
    renderEntireFile(state);
}




export default state;