import React from 'react'
import {Field, reduxForm} from "redux-form";
import {CreateField, Input} from "../common/FormsControls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redax/auth-reducer";
import {Redirect} from "react-router-dom";
import style from './Login.module.css'


const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                {CreateField('Login','login',Input,[requiredField])}
                {/*<div><Field placeholder='Login' name={'login'} component={Input} validate={[requiredField]}/></div>*/}
                {CreateField('Password','password',Input,[requiredField],'password')}
                {/*<div><Field placeholder='Password' name={'password'} component={Input} validate={[requiredField]}
                            type={'password'}/></div>*/}
                {CreateField(null,'rememberMe',Input,null,'checkbox','Remember me')}
                {/*<div><Field type='checkbox' name={'rememberMe'} component={Input}/>Remember me</div>*/}
                {props.error && <div className={style.formSummaryError}>{props.error}</div>}
                <div>
                    <button>login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.login, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={'/Profile'}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state) => ({isAuth: state.auth.isAuth});


export default connect(mapStateToProps, {login})(Login);