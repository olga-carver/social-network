import { profileReduser } from './profileReduser';
import {dialogsReduser} from './dialogsReduser';

let store = {

    _state: {
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
    },

    _callSubscriber() {
        console.log('State was changed')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {   
        this._state.profilePage = profileReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);
               
        this._callSubscriber(this.getState());
        
    }
}




export default store;