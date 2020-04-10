const SEND_MESSAGE = 'SEND-MESSAGE';

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
    ]
}

export const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: 
        let messageBody = {message: action.newDialogMessage}   
            return {
                ...state,
                messagesData: [...state.messagesData, messageBody]
            };
           
        default:
            return state;

    }
}

export const sendMessage = (newDialogMessage) => ({ type: SEND_MESSAGE, newDialogMessage });

export default dialogsReduser;