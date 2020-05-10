import React from 'react';
import classes from './Dialogs.module.scss';
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from '../common/FormValidator/formValidator';
import { Textarea } from '../common/FormControls/formControls';
import { NavLink } from 'react-router-dom';

const maxLength10 = maxLengthCreator(10);

const Dialogs = (props) => {
    let dialogPerson = props.dialogsData
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/> );

    let dialogMessage = props.messagesData
        .map((mess) => <DialogMessage message={mess.message}/> );

    let addNewMessage = (values) => {        
        props.sendMessage(values.newDialogMessage);
    };

 
    const MessageForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field type="text" 
                    placeholder="Message" 
                    name="newDialogMessage"                    
                    component={Textarea}
                    validate={[required, maxLength10]}
                    />
                </div>                
                <div>                
                <button>Send</button>                
                    </div>
            </form>
        )
    }

    const MessageReduxForm = reduxForm({form: 'dialogsMessage'})(MessageForm);
    return (
        <section className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogPerson}
            </div>

            <div className={classes.messages}>
                {dialogMessage}
                <div className={classes.newMessage}>
                    <MessageReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </section>
    );
}

export default Dialogs;


export const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export const DialogMessage = (props) => {
    return (
        <div className={classes.messagesItem}>
            <p>{props.message}</p>
            <div className={classes.addMessage}>                
            </div>
        </div>
    );
}
