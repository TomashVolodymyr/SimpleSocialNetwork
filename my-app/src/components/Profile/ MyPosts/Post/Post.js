import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4bkPT14o4_n_lnU-3DNyZol1LE0vParolHN-kXQTD8exgO4-8"/>
            <p>{props.message}</p>
            <div>
                <span>Like:{props.likeCounts}</span>

            </div>
        </div>
    );
}

export default Post;