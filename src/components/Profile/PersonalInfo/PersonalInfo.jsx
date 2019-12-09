import React from 'react';
import classes from '../PersonalInfo/PersonalInfo.module.css';

const PersonalInfo = () => {
    return (
        <div className={classes.personalInfo}>
            <img src="" alt="" className="photo" />
            <div className="info">
                <p>Anton Egorov</p>
                <small>Programmer</small>
                <p>Age: 30</p>
            </div>
        </div>
    );
}

export default PersonalInfo;