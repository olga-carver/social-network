import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from "react-router-dom";
import DialogItem from '../Dialogs/DialogItem/DialogItem';
import DialogMessage from '../Dialogs/DialogMessage/DialogMessage';


const Dialogs = (props) => {

    let dialogPerson = props.dialogsData
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

    let dialogMessage = props.messagesData
        .map((mess) => <DialogMessage message={mess.message} />);

    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <section className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogPerson}
            </div>

            <div className={classes.messages}>
                {dialogMessage}
            </div>
            <div className={classes.newMessage}>
                <textarea name="" id="" cols="30" rows="2" ref={newMessageElement}></textarea>
                <button onClick={addNewMessage}>Send</button>
            </div>
        </section>
    );
}

export default Dialogs;