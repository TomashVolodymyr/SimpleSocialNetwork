import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";


const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
const onMainPhotoSelected = (e) => {
    if(e.target.files.length){
        props.savePhoto(e.target.files[0]);
    }
}

    return (
        <div >
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || 'data:image/png;base64,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'} alt=""/>
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <h3>About me:</h3>
                <p>{props.profile.aboutMe}</p>
                <h3>Looking for a job:</h3>
                <p>{props.profile.lookingForAJobDescription}</p>
                <h3>My full name:</h3>
                <p>{props.profile.fullName}</p>
            </div>
        </div>
    );
}

export default ProfileInfo;