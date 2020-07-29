import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'PROFILE/ADD-POST';
const SET_USERS_PROFILE = 'PROFILE/SET_USERS_PROFILE';
const SET_STATUS_PROFILE = 'PROFILE/SET_STATUS_PROFILE';
const DELETE_POST = 'PROFILE/DELETE_POST';
const SAVE_PHOTOS_SUCCESS = 'PROFILE/SAVE_PHOTOS_SUCCESS';

export const addPostActionCreator = (posts) => ({
    type: ADD_POST,
    posts
});


const setUsersProfile = (profile) => ({
    type: SET_USERS_PROFILE,
    profile
});

const setStatusProfileAC = (status) => ({
    type: SET_STATUS_PROFILE,
    status
});

export const deletePostActionCreator = (id) => ({
    type: DELETE_POST,
    id
});

export const savePhotosSuccess = (photo) => ({
    type: SAVE_PHOTOS_SUCCESS,
    photo
});


let initialState = {
    myPostsData: [
        {id: 1, message: 'Hi, how are you?', likeCounts: 15},
        {id: 2, message: 'It\'s my first post', likeCounts: 23}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let body = action.posts;
            return {
                ...state,
                newPostText: '',
                myPostsData: [...state.myPostsData, {id: 5, message: body, likeCounts: 0}]
            };

        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case SET_STATUS_PROFILE:
            return {
                ...state,
                status: action.status
            };

        case DELETE_POST:
            return {
                ...state,
                myPostsData: [...state.myPostsData.filter(p => p.id !== action.id)]
            };

        case SAVE_PHOTOS_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photo}};

        default:
            return state;
    }
}

export const getUsersProfile = (userId) => {
    return async (dispatch) => {
        let response = await usersAPI.getProfile(userId);
        dispatch(setUsersProfile(response.data));
    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId);
        dispatch(setStatusProfileAC(response.data));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatusProfileAC(status));
        }
    }
}

export const savePhoto = (file) => async (dispatch) => {
        let response = await profileAPI.savePhoto(file);

        if (response.data.resultCode === 0) {
            dispatch(savePhotosSuccess(response.data.data.photos));
        }
}
export default profileReducer;