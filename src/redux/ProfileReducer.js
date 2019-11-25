import {profileAPI} from "../API/api";

let initState = {
    profile: null,
    postData: [
        {message: "Расход мужики", id: 1, likes: 4},
        {message: "Ты хорошо подумал, Калган? Или может ты отсюда на рывок надеешься?", id: 2, likes: 25},
        {message: "Ты еще сявка - с ворами водку пить!", id: 3, likes: 35},
        {message: "Ты че пялишься, Окунь, а?", id: 4, likes: 8},
    ],
    status: ".."
};

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case 'addPost': {
            let obj = {
                message: action.post,
                id: state.postData.length + 1,
                likes: 3
            };
            return {
                ...state,
                postData: [...state.postData, obj],
            };
        }
        case 'likeCounter': {
            let stateCopy = {
                ...state,
                postData: [...state.postData],
            };
            stateCopy.postData[action.id - 1].likes++;
            return stateCopy;
        }
        case 'setProfile': {
            return{
                ...state, profile: action.profile
            }
        }
        case 'setStatus': {
            return{
                ...state, status: action.status
            }
        }
        default:
            return state;
    }
};
export const likePressActionCreator = (id) => ({type: 'likeCounter', id: id});
export const addPostActionCreator = (post) => ({type: 'addPost', post});
export const setProfileActionCreator = (profile) => ({type: 'setProfile', profile});
export const setStatusActionCreator = (status) => ({type: 'setStatus', status});

export const getProfileThunkCreator = (id) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(id);
            dispatch(setProfileActionCreator(data));
    }
};
export const getStatusThunkCreator = (id) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(id);
            dispatch(setStatusActionCreator(data))
    }
};
export const putStatusThunkCreator = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.setStatus(status);
            if (response.data.resultCode === 0){
                dispatch(setStatusActionCreator(status))
            }

    }
};

export default profileReducer;