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
        case 'follow': {
            return {
                ...state,
                users: updateItemInArray(state.users, action.userId, 'id', {followed: true} )
            };
        }
        case 'unfollow': {
            return{
                ...state,
                users: updateItemInArray(state.users, action.userId, 'id', {followed: false} )
            };
        }
        case 'setUsers': {
            return {
                ...state, users: [...action.users]
            }
        }
        case 'setCurrentPage':{
            return {
                ...state, currentPage: action.page, isFetching: true
            }
        }
        case 'setTotalCount': {
            return {
                ...state, totalUsersCount: action.totalCount
            }
        }
        case 'toggleFetching': {
            return{
                ...state, isFetching: false
            }
        }
        case 'toggleFollowingProgress': {
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

export const followActionCreator = (userId) => ({type: 'follow', userId});
export const unfollowActionCreator = (userId) => ({type: 'unfollow', userId});
export const setUsersActionCreator = (users) => ({type: 'setUsers', users});
export const setCurrentPageActionCreator = (page) => ({type: 'setCurrentPage', page});
export const setTotalCountActionCreator = (totalCount) => ({type: 'setTotalCount', totalCount});
export const toggleFetchingActionCreator = () => ({type: 'toggleFetching'});
export const toggleFollowingProgressActionCreator = (isFetching, followId) => ({type: 'toggleFollowingProgress', isFetching, followId});

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
    debugger
    return async (dispatch) => followUnfollowFlow(dispatch ,id, usersAPI.followUser.bind(usersAPI), followActionCreator)
};
export const unfollowUserThunkCreator = (id) => {
    return async (dispatch) => followUnfollowFlow(dispatch, id, usersAPI.unfollowUser.bind(usersAPI), unfollowActionCreator)
};

export default usersReducer;