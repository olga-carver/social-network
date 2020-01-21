import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReduser';
import { connect } from 'react-redux';


// const DialogsContainer = (props) => {
//     let state = props.store.getState();

//     let addNewMessage = () => {
//         props.store.dispatch(sendMessageActionCreator());
//     }

//     let onMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageTextActionCreator(body));
//     }

//     return (
//         <Dialogs dialogsPage={state.dialogsPage} onMessageChange={onMessageChange} addNewMessage={addNewMessage} />)
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (body) => dispatch(updateNewMessageTextActionCreator(body)),
        addNewMessage: () => dispatch(sendMessageActionCreator())        
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;