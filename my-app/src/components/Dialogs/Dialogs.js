import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

let maxLength100 = maxLengthCreator(100);
const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Write something...' name={'dialogs'} component={Textarea} validate={[requiredField,maxLength100]} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm)

const Dialogs = (props) => {

    let dialogElements = props.dialogsData
        .map( dialog =>  <DialogItem name={dialog.name} id={dialog.id}  />
        );


    let messagesElements = props.messagesData
        .map( message => <Message textMessage={message.textMessage}/>
        );


    const onSubmit = (formData) => {
        console.log(formData)
        props.addPost(formData.dialogs);
    }

    if(!props.isAuth) return <Redirect to='/login'/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <DialogsReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;