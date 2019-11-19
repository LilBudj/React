let initState = {
    messagesData: [
        {message: "Delay chto tebe govoryat Mogol", id: '1'},
        {message: "Opystite ego!", id: '2'},
    ],
    currentMessage: "",
    dialogData: [
        {
            name: "Knyaz",
            id: '1',
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAb3SPw5yTzMwTaQ2k0vTSl4bVkia4ikyVM2KLxfKLkUjNqkMG&s"
        },
        {name: "Kalach", id: '2', src: "https://i.ytimg.com/vi/niQIeyYk0Nw/hqdefault.jpg"},
        {
            name: "Pop",
            id: '3',
            src: "https://avatars.mds.yandex.net/get-zen_doc/99101/pub_5ca2f7e6c2662100b312fd7e_5ca2f83929c43800b44c01a7/scale_1200"
        },
        {
            name: "Piston",
            id: '4',
            src: "https://avatars.mds.yandex.net/get-zen_doc/99101/pub_5ca2f7e6c2662100b312fd7e_5ca2f83929c43800b44c01a7/scale_1200"
        },
    ],
};

const dialogsReducer = (state = initState, action) => {
    switch (action.type) {

        case 'addMessage': {
            let messageObj = {
                message: state.currentMessage,
                id: state.messagesData.length + 1,
            };
            return {
                ...state,
                currentMessage: '',
                messagesData: [...state.messagesData, messageObj]
            };
        }
        case 'updateCurrentMessage': {
            return {
                ...state,
                currentMessage: action.currentMessage
            };
        }
        default:
            return state;
    }
};

export const addMessageActionCreator = () => ({type: 'addMessage',});
export const updateCurrentMessageActionCreator = (currentMessage) => ({type: 'updateCurrentMessage', currentMessage: currentMessage,});

export default dialogsReducer;