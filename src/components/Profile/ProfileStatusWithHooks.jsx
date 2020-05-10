import React, { useState, useEffect } from 'react';
import classes from '../Profile/Profile.module.scss';



const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => { setStatus(props.status)}, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    }

     const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status)
    }

    const onUserStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

        return (
            <div>                
               { !editMode &&
                    <div className={classes.status}>
                        <span onDoubleClick={activateEditMode}>{props.status || "Мой статус..."}</span>
                    </div>                    
                }
                { editMode &&
                    <div>
                        <textarea onChange={onUserStatusChange} 
                        autoFocus={true} 
                        onBlur={deactivateEditMode} 
                        value={status}/>
                    </div>
                }
            </div>
                
         )
        
    }

    export default ProfileStatusWithHooks;