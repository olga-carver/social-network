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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likecount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this.getState());
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this.getState());
        } else if (action.type === 'SEND-MESSAGE') {
            let newMessage = {
                message: this._state.dialogsPage.newDialogMessage
            }
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newDialogMessage = '';
            this._callSubscriber(this.getState());
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newDialogMessage = action.newMessage;
            this._callSubscriber(this.getState());
        }
    }
}

export default store;