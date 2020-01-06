import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItem from '../Dialogs/DialogItem/DialogItem';
import DialogMessage from '../Dialogs/DialogMessage/DialogMessage';


const Dialogs = (props) => {

    let dialogPerson = props.dialogsPage.dialogsData
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

    let dialogMessage = props.dialogsPage.messagesData
        .map((mess) => <DialogMessage message={mess.message} />);

    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        props.dispatch({type: 'SEND-MESSAGE'});
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text});
    }

    return (
        <section className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogPerson}
            </div>

            <div className={classes.messages}>
                {dialogMessage}
                <div className={classes.newMessage}>
                    <textarea ref={newMessageElement} value={props.dialogsPage.newDialogMessage} onChange={onMessageChange}/>
                    <button onClick={addNewMessage}>Send</button>
                </div>
            </div>
        </section>
    );
}

export default Dialogs;