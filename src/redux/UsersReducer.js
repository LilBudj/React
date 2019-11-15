let initState = {
    users: [],
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
                ...state, users: [...state.users, ...action.users]
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

export default usersReducer;