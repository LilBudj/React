import {usersAPI} from "../API/api";

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
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    else return u;
                })
            };
        }
        case 'unfollow': {
            return{
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    else  return u;
                })
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
            debugger
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress,action.followId ] :
                    state.followingInProgress.filter(id => id != action.followId)
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
    return (dispatch) => {
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsersActionCreator(data.items));
            dispatch(setTotalCountActionCreator(data.totalCount));
            dispatch(toggleFetchingActionCreator());
        });
    }
};
export const followUserThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressActionCreator(true, id));
        usersAPI.followUser(id).then( (statusCode)=> {
            if (statusCode === 0 ) {
                dispatch(followActionCreator(id));
                dispatch(toggleFollowingProgressActionCreator(false, id))
            }
        })
    }
};
export const unfollowUserThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgressActionCreator(true, id));
        usersAPI.unfollowUser(id).then( (statusCode)=> {
            if (statusCode === 0 ) {
                dispatch(unfollowActionCreator(id));
                dispatch(toggleFollowingProgressActionCreator(false, id))
            }
        })
    }
};

export default usersReducer;