import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reduser';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import classes from '../Login/Login.module.scss';
import Preloader from '../Preloader/Preloader';


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
            {props.error && <p className={classes.formSummaryError}>
                {props.error}</p>
            }
            </div>
            <div>
                <Field type="text" placeholder="E-mail" name="email" component="input"/>
                </div>
            <div>
                <Field type="text" placeholder="password" name="password" component="input"/>
                </div>
            <div>
                <Field type="checkbox" name="rememberMe" component="input"/>remember me
                </div>
            <div>                
                <button>Login</button></div>
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

    return <div>
        <div className="wrapperBlock">
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    </div>
}

let mapStateToProps = (state) => {
    return { 
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(Login);

