import React from "react";
import classes from '../PersonalInfo/PersonalInfo.module.scss';
import { Textarea, Input } from '../../common/FormControls/formControls';
import { Field, reduxForm } from 'redux-form';

const ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
                <div className={classes.infoBlock}>
                <span className={classes.infoBlockName}>Имя:</span>
                    <Field  type="text"
                            name="fullName"
                            component={Input}                            
                            />
                </div>
                <div className={classes.infoBlock}>
                <span className={classes.infoBlockName}>О себе:</span>
                    <Field  type="text"
                            name="aboutMe"
                            component={Textarea}                            
                            />
                </div>
                <div className={classes.infoBlock}>
                <span className={classes.infoBlockName}>Мои Контакты:</span>
                    { Object.keys(props.profile.contacts).map(key => {
                        return <div key={key}>
                            {key}: {
                            <Field  type="text"
                                    name={"contacts." + key}
                                    component={Input}/>
                            }                       
                </div>
                 })}
                </div>
                <div className={classes.infoBlock}>
                <span className={classes.infoBlockName}>Ищу работу:</span>
                    <Field  type="checkbox"
                            name="lookingForAJob"
                            component={Input}/>
                </div>
                <div className={classes.infoBlock}>
                <span className={classes.infoBlockName}>Деятельность:</span>
                    <Field  type="text"
                            name="lookingForAJobDescription"
                            component={Input}/>
                </div>
                <div>
                    <button className={classes.saveBtn}>Сохранить</button>
                </div>
                 </form>
}
        
        {/* <div><button>save</button></div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: { createField("", "lookingForAJob", [], Input, {type: "checkbox"} )}
        </div>

        <div>
            <b>My professional skills</b>:
            { createField("My professional skills", "lookingForAJobDescription", [], Textarea  )}
        </div>


        <div>
            <b>About me</b>:
            { createField("About me", "aboutMe", [], Textarea  )}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
            <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
            </div>
        })}
        </div> */}
   


const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;