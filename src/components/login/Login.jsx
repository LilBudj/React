import React from 'react'
import style from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {authLoginThunkCreator} from "../../redux/AuthReducer";
import {Input} from "../common/formControls/FormControls";
import {createField, maxLengthCreator, required} from "../../utils/validators/Validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


const maxLength = maxLengthCreator(25);

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('email', 'email', [required, maxLength], Input)}
            {createField('password', 'password', [required, maxLength], Input, {type: 'password'})}
            {createField(null, 'rememberMe', null, 'input', {type: 'checkbox'}, 'Remember me')}
            {error && <div className={style.error}>
                {error}
            </div>}
            {captchaUrl &&
            <div>
                <img src={captchaUrl}/>
                {createField('Captcha', 'captcha', [required], Input)}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

const Login =(props)=> {
    const onSubmit = (formData) => {
        props.authLoginThunkCreator(formData)
    };
    if (props.isAuth){
        return <Redirect to={'/Profile'}/>
    }
    return(
        <div className={style.login}>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
};

export default connect(mapStateToProps, {authLoginThunkCreator})(Login);