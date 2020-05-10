import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reduser';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import classes from '../Login/Login.module.scss';
import Preloader from '../Preloader/Preloader';
import waterball from '../../images/login/waterball1.png';


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
            {props.error && <p className={classes.formSummaryError}>
                {props.error}</p>
            }
            </div>
            <div>
                <Field  className={classes.loginInput} type="text" placeholder="E-mail" name="email" component="input"/>
                </div>
            <div>
                <Field className={classes.loginInput} type="text" placeholder="Пароль" name="password" component="input"/>
                </div>
            <div>
                <Field className={classes.loginCheckbox} type="checkbox" name="rememberMe" component="input"/><span>Запомнить меня</span>
                </div>
            <div>                
                <button className={classes.loginBtn}>Войти</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        console.log(props.isAuth);
        return <Redirect to={"/profile"}/>        
    }

    return <div className={classes.body} >
        <div className={classes.wrapperBlock}>
        <div className={classes.content}>
        <h1>Войти в акаунт</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        </div>
        
        </div>
        {/* <img className={classes.loginImg} src={waterball} alt="Welcome"/> */}
    </div>
}

let mapStateToProps = (state) => {
    return { 
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(Login);

