import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    return <div>

        <Paginator
            currentPage={props.currentPage}
            totalItemsCount={props.totalUsersCount}
            pageSize={props.pageSize}
            onPageChanged={props.onPageChanged}/>

        {props.usersList.map(u => <User
            user={u} key={u.id}
            followingInProgress={props.followingInProgress}
            unfollowThunkCreator={props.unfollowThunkCreator}
            followThunkCreator={props.followThunkCreator}/>)}
    </div>
}
export default Users;