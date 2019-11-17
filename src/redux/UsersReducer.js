let initState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 2,
    isFetching: true,
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
        default:
            return state;
    }
};

export const followActionCreator = (userId) => {
    return {
        type: 'follow',
        userId
    };
};

export const unfollowActionCreator = (userId) => {
    return {
        type: 'unfollow',
        userId
    };
};

export const setUsersActionCreator = (users) => {
return {
    type: 'setUsers',
    users
}
};

export const setCurrentPageActionCreator = (page) => {
    return {
        type: 'setCurrentPage',
        page
    }
};

export const setTotalCountActionCreator = (totalCount) => {
    return {
        type: 'setTotalCount',
        totalCount
    }
};

export const toggleFetchingActionCreator = () => {
    return {
        type: 'toggleFetching'
    }
};

export default usersReducer;