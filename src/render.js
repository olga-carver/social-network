import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {addPost, updateNewPostText, sendMessage, updateNewMessageText} from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export let renderEntireFile = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} 
            addPost={addPost} updateNewPostText={updateNewPostText} 
            sendMessage={sendMessage} updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>, document.getElementById('root'));
}