const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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

export const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                message: state.newDialogMessage
            }

            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newDialogMessage: ''
            };

        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newDialogMessage: action.newMessage
            };
            
        }
           
        default:
            return state;

    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text });

// export default dialogsReduser;