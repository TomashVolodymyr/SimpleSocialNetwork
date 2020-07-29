import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

let maxLength30 = maxLengthCreator(10)
const PostsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Posts' name={'posts'} component={Textarea} validate={[requiredField,maxLength30]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const PostsReduxForm = reduxForm({form: 'posts'})(PostsForm);

const MyPosts = React.memo((props) => {

    let postsElements = props.myPostsData
        .map( post =>  <Post message={post.message} likeCounts={post.likeCounts}/>)

    const onSubmit = (formData) => {
        props.addPost(formData.posts);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <PostsReduxForm onSubmit={onSubmit}/>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});



export default MyPosts;