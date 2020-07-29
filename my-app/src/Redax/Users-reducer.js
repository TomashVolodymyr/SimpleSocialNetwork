import {usersAPI} from "../api/api";
import {updateObjectInArray} from "./object-helper";

const FOLLOW = 'USERS/FOLLOW';
const UNFOLLOW = 'USERS/UNFOLLOW';
const SET_USERS = 'USERS/SET_USERS';
const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'USERS/SET_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'USERS/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS';


// action creators
export const followAC = (userId) => ({
    type: FOLLOW,
    userId
});

export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId
});

export const set_users = (users) => ({
    type: SET_USERS,
    users
});

export const currentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});

export const totalUsersCountAC = (totalUsersCount) => ({
    type: SET_USERS_COUNT,
    totalUsersCount
});

export const toggleIsFetchingAC = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});

export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});


// defolt state
let initialState = {
    usersList: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersList: updateObjectInArray(state.usersList, action.userId,'id', {followed:true})
                /*state.usersList.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })*/
            }

        case UNFOLLOW:
            return {
                ...state,
                usersList: updateObjectInArray(state.usersList, action.userId, 'id', {followed:false})
                /*state.usersList.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })*/
            }

        case SET_USERS:
            return {...state, usersList: action.users}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state;
    }
}

// thunks
export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetchingAC(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetchingAC(false));
        dispatch(set_users(data.items));
        dispatch(totalUsersCountAC(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch,userId,apiMethod,actionCreator) => {
        dispatch(toggleFollowingProgress(true, userId));
        let response = await apiMethod(userId);
        if (response.data.resultCode === 0) {
            dispatch(actionCreator(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
}

export const followThunkCreator = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followAC);
    }
}

export const unfollowThunkCreator = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI),  unfollowAC);
    }
}

export default usersReducer;