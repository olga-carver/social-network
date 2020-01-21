import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from '../Dialogs/DialogItem/DialogItem';
import DialogMessage from '../Dialogs/DialogMessage/DialogMessage';


const Dialogs = (props) => {
    debugger
    let dialogPerson = props.dialogsPage.dialogsData
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/> );

    let dialogMessage = props.dialogsPage.messagesData
        .map((mess) => <DialogMessage message={mess.message}/> );

    let addNewMessage = () => {        
        props.addNewMessage();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);
    }

    return (
        <section className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogPerson}
            </div>

            <div className={classes.messages}>
                {dialogMessage}
                <div className={classes.newMessage}>
                    <textarea value={props.dialogsPage.newDialogMessage} onChange={onMessageChange}/>
                    <button onClick={addNewMessage}>Send</button>
                </div>
            </div>
        </section>
    );
}

export default Dialogs;