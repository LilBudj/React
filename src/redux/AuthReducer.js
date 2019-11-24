import {authAPI, profileAPI} from "../API/api";
import {stopSubmit} from "redux-form";
import {getProfileThunkCreator} from "./ProfileReducer";

let initState = {
    login: null,
    email: null,
    userId: null,
    photo: null,
    isFetching: true,
    isAuth: false
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'setUser': {
            return {
                ...state,
               ...action.data,
            };
        }
        case 'setUserPhoto': {
            return {
                ...state,
                photo: action.photo
            }
        }
        case 'toggleFetching': {
            return{
                ...state, isFetching: false
            }
        }
        default:
            return state;
    }
};

export const setUserDataActionCreator = (userId, email, login, isAuth) => ({type: 'setUser', data: {email, userId, login, isAuth}});
export const toggleFetchingActionCreator = () => ({type: 'toggleFetching'});
export const setUserPhotoActionCreator = (photo) => ({type: 'setUserPhoto', photo});

export const setUserDataThunkCreator = () => {
    return (dispatch) => {
        authAPI.getAuthData().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserDataActionCreator(data.data.id, data.data.email, data.data.login, true));
            }
            dispatch(toggleFetchingActionCreator());
        });
    }
};
export const setUserPhotoThunkCreator = (id) => {
    return (dispatch) => {
        profileAPI.getProfile(id).then(data => {
                dispatch(setUserPhotoActionCreator(data.photos.small))
        })
    }
};
export const authLoginThunkCreator = (loginInfo) => {
    return (dispatch) => {
        authAPI.authLogin(loginInfo.email, loginInfo.password, loginInfo.rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserDataThunkCreator())
            } else dispatch(stopSubmit('login', {_error: data.messages[0]}))
        })}
};

export const authLogoutThunkCreator = () => {
    return (dispatch) => {
        authAPI.authLogout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserDataActionCreator(null, null, null, false))
            }
        })
    }
};

export default authReducer;