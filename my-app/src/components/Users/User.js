import React from 'react';
import s from './Users.module.css';
import {NavLink} from "react-router-dom";

const User = (props) => {
    return <div  className={s.item}>
            <span>
                <div>
                    <NavLink to={'/Profile/' + props.user.id}>
                        <img
                            src={props.user.photos.small != null ? props.user.photos.small : "https://www.avatabletop.de/themes/avaexport/styles/images/logo/AVA_Logo_Without_Baseline_RGB_01.png"}
                            alt=""/>
                    </NavLink>
                </div>
                <div>
                   {props.user.followed
                       ? <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                           props.unfollowThunkCreator(props.user.id);
                       }}>
                           Unfollow
                       </button>

                       : <button disabled={props.followingInProgress.some(id => id === props.user.id)} onClick={() => {
                           props.followThunkCreator(props.user.id);
                       }}>
                           Follow
                       </button>}
                </div>
            </span>
        <span>
                <span>
                    <div>{props.user.name}</div>
                    <div>{props.user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
    </div>
}
export default User;