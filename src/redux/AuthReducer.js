import {authAPI, profileAPI, securityAPI} from "../API/api";
import {stopSubmit} from "redux-form";
import {getProfileThunkCreator} from "./ProfileReducer";

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
export const getCaptchaUrlActionCreator = (captchaUrl) => ({type: 'setUser', data: {captchaUrl}});

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
    return (dispatch) => {
        profileAPI.getProfile(id).then(data => {
                dispatch(setUserPhotoActionCreator(data.photos.small))
        })
    }
};
export const authLoginThunkCreator = (loginInfo) => {
    return (dispatch) => {
        authAPI.authLogin(loginInfo.email, loginInfo.password, loginInfo.rememberMe, loginInfo.captcha).then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserDataThunkCreator())
            } else {
                if (data.resultCode === 10){
                    dispatch(getCaptchaUrlThunkCreator())
                }
                dispatch(stopSubmit('login', {_error: data.messages[0]}))
            }
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

export const getCaptchaUrlThunkCreator = () => {
    return async (dispatch) => {
        const response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlActionCreator(captchaUrl))
    }
};

export default authReducer;