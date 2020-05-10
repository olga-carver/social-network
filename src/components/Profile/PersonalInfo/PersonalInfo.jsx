import React, {useState} from 'react';
import classes from '../PersonalInfo/PersonalInfo.module.scss';
import Preloader from '../../Preloader/Preloader';
import ProfileStatusWithHooks from '../ProfileStatusWithHooks';
import ProfileDataFormReduxForm from './ProfileDataForm';

const PersonalInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />
    }    

    const onSubmit = (formData) => {
        props.saveProfile(formData)
        .then(
            () => {
                setEditMode(false);
            }
        );
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const toEditMode = () => {setEditMode(true)};
   
    return (
        
        <div className={classes.personalInfo}>
            <div className={classes.profileImg}>
            <img src={props.profile.photos.large} alt="" className="photo" />
            {props.isOwner && 
            
            <label for="customFileUpload" className={classes.uploadImgLabel}>
                Загрузить фотографию            
            <input type="file" id="customFileUpload" className={classes.customFileUpload} onChange={onMainPhotoSelected}/>
            </label>            
            }
            {props.isOwner && <div><button className={classes.editBtn} onClick={toEditMode}>Редактировать профиль</button></div>}             
            </div>
            { editMode
                    ? <ProfileDataFormReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} status={props.status} updateUserStatus={props.updateUserStatus}/> }

        </div>
    );
}

const ProfileData = (props) => {
    return <div className="info">
        <div className={classes.topInfo}>
            <p className={classes.fullName}>{props.profile.fullName}</p>            
        </div>
        <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
        <p className={classes.infoBlock}><span className={classes.infoBlockName}>О себе:</span>{props.profile.aboutMe}</p>
        <div className={classes.contacts}>
            <p className={classes.infoBlock}><span className={classes.infoBlockName}>Мои контакты:</span> {Object.keys(props.profile.contacts).map(key => {
                return <Contacts contactTitle={key} contactValue={props.profile.contacts[key]} />
            })}</p>
        </div>
        <p className={classes.infoBlock}><span className={classes.infoBlockName}>Ищу работу:</span>
        { props.profile.lookingForAJob ? "Да" : "Нет" }</p>
        <p className={classes.infoBlock}><span className={classes.infoBlockName}>Деятельность:</span>{props.profile.lookingForAJobDescription}</p>
    </div>
}


export const Contacts = ({contactTitle, contactValue}) => {
    
    return <div>
        <p className={classes.contactItem}>{contactTitle}:</p> {contactValue}
        </div>
}

export default PersonalInfo;