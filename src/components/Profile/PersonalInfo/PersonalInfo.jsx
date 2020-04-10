import React from 'react';
import classes from '../PersonalInfo/PersonalInfo.module.css';
import Preloader from '../../Preloader/Preloader';

const PersonalInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
   
    return (
        <div className={classes.personalInfo}>
            <div className={classes.profileImg}>
            <img src={props.profile.photos.large} alt="" className="photo" />
            </div>
            <div className="info">
                <p>{props.profile.fullName}</p>
                <small>{props.profile.aboutMe}</small>
                <p>Age: 30</p>                
            </div>
        </div>
    );
}

export default PersonalInfo;