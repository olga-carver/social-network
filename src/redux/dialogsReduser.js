const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


export const dialogsReduser = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                message: state.newDialogMessage
            }
            state.messagesData.push(newMessage);
            state.newDialogMessage = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newDialogMessage = action.newMessage;
            return state;

        default:
            return state;

    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text});

// export default dialogsReduser;