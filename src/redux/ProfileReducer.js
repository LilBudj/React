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

export default profileReducer;