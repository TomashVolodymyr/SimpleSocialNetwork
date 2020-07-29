import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'AUTH/SET_USER_DATA';

const setAuthUserData = (data, isAuth) => ({
    type: SET_USER_DATA,
    data,
    isAuth
});

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }

        default:
            return state;
    }
}

export const getUsersData = () => async (dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData({id, email, login}, true));
    }

}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getUsersData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, false));
        }
    }
}

export default authReducer;