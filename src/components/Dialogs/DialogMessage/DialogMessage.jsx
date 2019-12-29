import React from 'react';
import classes from './DialogMessage.module.css';

const DialogMessage = (props) => {
    return (
        <div className={classes.messagesItem}>
            <p>{props.message}</p>
        </div>
    );
}

export default DialogMessage;
