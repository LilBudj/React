let initState = {
    postData: [
        {message: "Расход мужики", id: 1, likes: 4},
        {message: "Ты хорошо подумал, Калган? Или может ты отсюда на рывок надеешься?", id: 2, likes: 25},
        {message: "Ты еще сявка - с ворами водку пить!", id: 3, likes: 35},
        {message: "Ты че пялишься, Окунь, а?", id: 4, likes: 8},
    ],
    currentValue: "...",
};

const profileReducer = (state = initState, action) => {
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