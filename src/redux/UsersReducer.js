import {usersAPI} from "../API/api";
import {updateItemInArray} from "../utils/validators/ObjectHelpers";

let initState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 2,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: updateItemInArray(state.users, action.userId, 'id', {followed: true} )
            };
        }
        case 'UNFOLLOW': {
            return{
                ...state,
                users: updateItemInArray(state.users, action.userId, 'id', {followed: false} )
            };
        }
        case 'SET_USERS': {
            return {
                ...state, users: [...action.users]
            }
        }
        case 'SET_CURRENT_PAGE':{
            return {
                ...state, currentPage: action.page, isFetching: true
            }
        }
        case 'SET_TOTAL_COUNT': {
            return {
                ...state, totalUsersCount: action.totalCount
            }
        }
        case 'TOGGLE_FETCHING': {
            return{
                ...state, isFetching: false
            }
        }
        case 'TOGGLE_FETCHING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress,action.followId ] :
                    state.followingInProgress.filter(id => id !== action.followId)
            }
        }
        default:
            return state;
    }
};

export const followActionCreator = (userId) => ({type: 'FOLLOW', userId});
export const unfollowActionCreator = (userId) => ({type: 'UNFOLLOW', userId});
export const setUsersActionCreator = (users) => ({type: 'SET_USERS', users});
export const setCurrentPageActionCreator = (page) => ({type: 'SET_CURRENT_PAGE', page});
export const setTotalCountActionCreator = (totalCount) => ({type: 'SET_TOTAL_COUNT', totalCount});
export const toggleFetchingActionCreator = () => ({type: 'TOGGLE_FETCHING'});
export const toggleFollowingProgressActionCreator = (isFetching, followId) => ({type: 'TOGGLE_FETCHING_PROGRESS', isFetching, followId});

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        let data = await usersAPI.getUsers(currentPage, pageSize);
            dispatch(setUsersActionCreator(data.items));
            dispatch(setTotalCountActionCreator(data.totalCount));
            dispatch(toggleFetchingActionCreator());
    }
};
const followUnfollowFlow = async (dispatch, id, APIMethod, actionCreator) => {
        dispatch(toggleFollowingProgressActionCreator(true, id));
        let statusCode = await APIMethod(id);
        if (statusCode === 0 ) {
            dispatch(actionCreator(id));
            dispatch(toggleFollowingProgressActionCreator(false, id))
        }
};
export const followUserThunkCreator = (id) => {
    return async (dispatch) => followUnfollowFlow(dispatch ,id, usersAPI.followUser.bind(usersAPI), followActionCreator)
};
export const unfollowUserThunkCreator = (id) => {
    return async (dispatch) => followUnfollowFlow(dispatch, id, usersAPI.unfollowUser.bind(usersAPI), unfollowActionCreator)
};

export default usersReducer;