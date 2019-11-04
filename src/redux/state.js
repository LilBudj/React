let rerenderEntireTree = () => {
  console.log('!');
};

let state = {
    profileData: {
        PostData: [
            {message: "Расход мужики", id: '1', likes: '4'},
            {message: "Ты хорошо подумал, Калган? Или может ты отсюда на рывок надеешься?", id: '2', likes: '25'},
            {message: "Ты еще сявка - с ворами водку пить!", id: '3', likes: '35'},
            {message: "Ты че пялишься, Окунь, а?", id: '4', likes: '8'},
        ],
        currentValue: "...",
    },
    DialogsData: {
        MessagesData: [
            {message: "Delay chto tebe govoryat Mogol", id: '1'},
            {message: "Opystite ego!", id: '2'},
        ],
        currentMessage: "...",
        DialogData: [
            {name: "Knyaz", id: '1', src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAb3SPw5yTzMwTaQ2k0vTSl4bVkia4ikyVM2KLxfKLkUjNqkMG&s"},
            {name: "Kalach", id: '2', src: "https://i.ytimg.com/vi/niQIeyYk0Nw/hqdefault.jpg"},
            {name: "Pop", id: '3', src: "https://avatars.mds.yandex.net/get-zen_doc/99101/pub_5ca2f7e6c2662100b312fd7e_5ca2f83929c43800b44c01a7/scale_1200"},
            {name: "Piston", id: '4', src: "https://avatars.mds.yandex.net/get-zen_doc/99101/pub_5ca2f7e6c2662100b312fd7e_5ca2f83929c43800b44c01a7/scale_1200"},
        ],
    },
    FriendsData: [
        {name: "Piston", src: "https://avatars.mds.yandex.net/get-zen_doc/99101/pub_5ca2f7e6c2662100b312fd7e_5ca2f83929c43800b44c01a7/scale_1200", link: ""},
        {name: "Kalgan", src: "https://i.ytimg.com/vi/niQIeyYk0Nw/hqdefault.jpg", link: ""},
        {name: "Knyaz", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAb3SPw5yTzMwTaQ2k0vTSl4bVkia4ikyVM2KLxfKLkUjNqkMG&s", link: ""},
    ]
};

export const AddPost = () =>{
    let obj = {
        message: state.profileData.currentValue,
        id: 5,
        likes: 3
    };
    state.profileData.PostData.push(obj);
    state.profileData.currentValue = '';
    rerenderEntireTree(state);
};

export const addCurrentValue = (currentValue) => {
  state.profileData.currentValue = currentValue;
  rerenderEntireTree(state);
};

export const addMessage = () => {
    let messageObj = {
        message: state.DialogsData.currentMessage,
        id: 3,
    };
    state.DialogsData.MessagesData.push(messageObj);
    state.DialogsData.currentMessage = '';
    rerenderEntireTree(state)
};

export const updateCurrentMessage = (currentMessage) => {
    state.DialogsData.currentMessage = currentMessage;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer; //Observer pattern
};

export default state