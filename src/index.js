import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Post from './components/Profile/MyPosts/Post/Post';
import DialogItem from './components/Dialogs/DialogItem/DialogItem';
import DialogMessage from './components/Dialogs/DialogMessage/DialogMessage';

//for Profile
let postData = [
    { message: "I am learning react!", likecount: 13 },
    { message: "It is so exiting!", likecount: 17 }
]

// for Dialogs
let dialogsData = [
    { id: 1, name: "Olga" },
    { id: 2, name: "Ilya" },
    { id: 3, name: "Timofey" },
    { id: 4, name: "Lena" }
]

let messagesData = [
    { message: "Hi!" },
    { message: "Hi!" },
    { message: "Hi!" },
    { message: "Hi!" }
]




ReactDOM.render(<App postData={postData} messagesData={messagesData} dialogsData={dialogsData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
