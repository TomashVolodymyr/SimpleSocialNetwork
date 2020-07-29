import React from "react";
import style from './FormsControls.module.css'
import {Field} from "redux-form";
import {requiredField} from "../../../utils/validators/validators";

 const FormControl = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error;
    return(
        <div className={style.formControl + ' ' + ( hasError ? style.error : ' ')  }>
            <div >
                {props.children}
            </div>
            <div>
                {hasError &&  <span>{meta.error}</span>}
            </div>
        </div>

    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const CreateField = (placeholder,name,component,validate,type,someText) => {
    return <div><Field placeholder={placeholder} name={name} component={component} validate={validate} type={type}/>{someText}</div>
}