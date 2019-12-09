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

const Dialogs = () => {
    return (
        <section className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Olga" id="1" />
                <DialogItem name="Ilya" id="2" />
                <DialogItem name="Timofey" id="3" />
                <DialogItem name="Lena" id="4" />
            </div>

            <div className={classes.messages}>
                <DialogMessage message="Yo"/>
                <DialogMessage message="Hi"/>
                <DialogMessage message="Hello"/>
                <DialogMessage message="Yes"/>                
            </div>
        </section>
    );
}

export default Dialogs;