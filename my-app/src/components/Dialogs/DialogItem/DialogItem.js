import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <img src='https://www.paulseward.com/downloads/Avatars/cartoon_avatar.png' />
        <NavLink className={s.text} to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}


export default DialogItem;