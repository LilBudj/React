import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import friendsReducer from "./FriendsReducer";

const store = {
    _subscriber() {
        console.log('store has been changed');
    },

    _state: {
        profileData: {
            postData: [
                {message: "Расход мужики", id: 1, likes: 4},
                {message: "Ты хорошо подумал, Калган? Или может ты отсюда на рывок надеешься?", id: 2, likes: 25},
                {message: "Ты еще сявка - с ворами водку пить!", id: 3, likes: 35},
                {message: "Ты че пялишься, Окунь, а?", id: 4, likes: 8},
            ],
            currentValue: "...",
        },
        dialogsData: {
            messagesData: [
                {message: "Delay chto tebe govoryat Mogol", id: '1'},
                {message: "Opystite ego!", id: '2'},
            ],
            currentMessage: "...",
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
        },
        friendsData: [
            {
                name: "Piston",
                src: "https://avatars.mds.yandex.net/get-zen_doc/99101/pub_5ca2f7e6c2662100b312fd7e_5ca2f83929c43800b44c01a7/scale_1200",
                link: ""
            },
            {name: "Kalgan", src: "https://i.ytimg.com/vi/niQIeyYk0Nw/hqdefault.jpg", link: ""},
            {
                name: "Knyaz",
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAb3SPw5yTzMwTaQ2k0vTSl4bVkia4ikyVM2KLxfKLkUjNqkMG&s",
                link: ""
            },
        ]
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._subscriber = observer;
    },

    addPost() {
        let obj = {
            message: this._state.profileData.currentValue,
            id: 5,
            likes: 3
        };
        this._state.profileData.postData.push(obj);
        this._state.profileData.currentValue = '';
        this._subscriber();
    },

    addCurrentValue(currentValue) {
        this._state.profileData.currentValue = currentValue;
        this._subscriber();
    },

    addMessage() {
        let messageObj = {
            message: this._state.dialogsData.currentMessage,
            id: 3,
        };
        this._state.dialogsData.messagesData.push(messageObj);
        this._state.dialogsData.currentMessage = '';
        this._subscriber();
    },

    updateCurrentMessage(currentMessage) {
        this._state.dialogsData.currentMessage = currentMessage;
        this._subscriber();
    },

    dispatch(action) {

        this._state.profileData = profileReducer(this._state.profileData, action);
        this._state.dialogsData = dialogsReducer(this._state.dialogsData, action);
        this._state.friendsData = friendsReducer(this._state.friendsData, action);

        this._subscriber();
    },
};

export default store