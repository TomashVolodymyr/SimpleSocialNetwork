import React from 'react';
import {addPostActionCreator} from "../../../Redax/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        myPostsData:state.profilePage.myPostsData,
        newPostText:state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (posts) => {dispatch(addPostActionCreator(posts))},
    }
}
const MyPostsConteiner = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsConteiner;