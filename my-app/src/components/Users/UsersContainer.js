import React from 'react'
import {
    currentPageAC,
    followAC,
    unfollowAC,
    toggleFollowingProgress, getUsersThunkCreator, unfollowThunkCreator, followThunkCreator,
} from "../../Redax/Users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Prealoder from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    currentPage,
    followingInProgress,
    isFetching,
    pageSize,
    totalUsersCount,
    usersList
} from "../../Redax/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        let {getUsersThunkCreator,currentPage,pageSize} = this.props;
        getUsersThunkCreator(currentPage,pageSize);
    }

    onPageChanged = (p) => {
        let {currentPageAC,getUsersThunkCreator,pageSize} = this.props;
        currentPageAC(p);
        getUsersThunkCreator(p,pageSize);
    }
    render() {
        return <>
            {this.props.isFetching ? <Prealoder />: null}
            <Users
            usersList={this.props.usersList}
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            followingInProgress={this.props.followingInProgress}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            followAC={this.props.followAC}
            unfollowAC={this.props.unfollowAC}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            unfollowThunkCreator={this.props.unfollowThunkCreator}
            followThunkCreator={this.props.followThunkCreator}
        />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersList: usersList(state),
        pageSize: pageSize(state),
        totalUsersCount: totalUsersCount(state),
        currentPage: currentPage(state),
        isFetching: isFetching(state),
        followingInProgress: followingInProgress(state)
    }
}

export default compose(connect(mapStateToProps, {
    followAC,
    unfollowAC,
    currentPageAC,
    toggleFollowingProgress,
    getUsersThunkCreator,
    unfollowThunkCreator,
    followThunkCreator
}))(UsersContainer)