import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const DialogMessage = (props) => {
    return (
        <div className={classes.messagesItem}>
            <p>{props.message}</p>
        </div>
    );
}

let dialogsData = [
    { id: 1, name: "Olga" },
    { id: 2, name: "Ilya" },
    { id: 3, name: "Timofey" },
    { id: 4, name: "Lena" }
]

let dialogPerson = dialogsData
    .map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);



let messagesData = [
    { message: "Hi!" },
    { message: "Hi!" },
    { message: "Hi!" },
    { message: "Hi!" }
]

let dialogMessage = messagesData
    .map((mess) => <DialogMessage message={mess.message} />);

const Dialogs = () => {
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