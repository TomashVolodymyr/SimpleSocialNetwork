import React from 'react';
import ProfileInfo from "./ MyPosts/ProfileInfo/ProfileInfo";
import MyPostsConteiner from "./ MyPosts/MyPostsConteiner";

const Profile = (props) => {
    return (
        <div >
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsConteiner />
    </div>
    );
}

export default Profile;