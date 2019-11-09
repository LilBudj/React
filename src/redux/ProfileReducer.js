const profileReducer = (state, action) => {
    switch (action.type) {
        case 'addPost': {
            let obj = {
                message: state.currentValue,
                id: state.postData.length + 1,
                likes: 3
            };
            state.postData.push(obj);
            state.currentValue = '';
            return state;
        }

        case 'addCurrentPost': {
            state.currentValue = action.currentPost;
            return state;
        }
        case 'likeCounter': {
            state.postData[action.id - 1].likes++;
            return state;
        }
        default:
            return state;
    }
};

export const likePressActionCreator = (id) => {
    return {
        type: 'likeCounter',
        id: id,
    };
};

export const addPostActionCreator = () => {
    return {
        type: 'addPost',
    };
};

export const addCurrentPostActionCreator = (currentPost) => {
    return {
        type: 'addCurrentPost',
        currentPost: currentPost,
    };
};

export default profileReducer;