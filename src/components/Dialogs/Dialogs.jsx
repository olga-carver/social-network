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

    return (
        <section className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogPerson}
            </div>

            <div className={classes.messages}>
                {dialogMessage}
            </div>
        </section>
    );
}

export default Dialogs;