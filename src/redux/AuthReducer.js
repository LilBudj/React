import {authAPI, profileAPI, securityAPI} from "../API/api";
import {stopSubmit} from "redux-form";

let initState = {
    login: null,
    email: null,
    userId: null,
    photo: null,
    isFetching: true,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_USER': {
            return {
                ...state,
               ...action.data,
            };
        }
        case 'SET_USER_PHOTO': {
            return {
                ...state,
                photo: action.photo
            }
        }
        case 'TOGGLE_FETCHING': {
            return{
                ...state, isFetching: false
            }
        }
        default:
            return state;
    }
};

export const setUserDataActionCreator = (userId, email, login, isAuth) => ({type: 'SET_USER', data: {email, userId, login, isAuth}});
export const toggleFetchingActionCreator = () => ({type: 'TOGGLE_FETCHING'});
export const setUserPhotoActionCreator = (photo) => ({type: 'SET_USER_PHOTO', photo});
export const getCaptchaUrlActionCreator = (captchaUrl) => ({type: 'SET_USER', data: {captchaUrl}});

export const setUserDataThunkCreator = () => {
    return async (dispatch) => {
        let data = await authAPI.getAuthData();
            if (data.resultCode === 0) {
                dispatch(setUserDataActionCreator(data.data.id, data.data.email, data.data.login, true));
            }
            dispatch(toggleFetchingActionCreator());
    }
};
export const setUserPhotoThunkCreator = (id) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(id);
        dispatch(setUserPhotoActionCreator(data.photos.small))
    }
};
export const authLoginThunkCreator = (loginInfo) => {
    return async (dispatch) => {
        let data = await authAPI.authLogin(loginInfo.email, loginInfo.password, loginInfo.rememberMe, loginInfo.captcha);
            if (data.resultCode === 0) {
                dispatch(setUserDataThunkCreator())
            } else {
                if (data.resultCode === 10) {
                    dispatch(getCaptchaUrlThunkCreator())
                }
                dispatch(stopSubmit('login', {_error: data.messages[0]}))
            }}
};

export const authLogoutThunkCreator = () => {
    return async (dispatch) => {
        let data = await authAPI.authLogout();
            if (data.resultCode === 0) {
                dispatch(setUserDataActionCreator(null, null, null, false))
            }
    }
};

export const getCaptchaUrlThunkCreator = () => {
    return async (dispatch) => {
        const response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlActionCreator(captchaUrl))
    }
};

export default authReducer;