import {authAPI} from "../API/api";

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
                isAuth: true
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

export const setUserDataActionCreator = (userId, email, login) => {
    return {
        type: 'setUser',
        data: {
            email,
            userId,
            login
        }
    };
};
export const toggleFetchingActionCreator = () => {
    return {
        type: 'toggleFetching'
    }
};
export const setUserPhotoActionCreator = (photo) => {
    return {
        type: 'setUserPhoto',
        photo
    }
};

export const setUserDataThunkCreator = () => {
    return (dispatch) => {
        authAPI.getAuthData().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserDataActionCreator(data.data.id, data.data.email, data.data.login));
            }
            dispatch(toggleFetchingActionCreator());
        });
    }
};

export default authReducer;