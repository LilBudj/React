let initState = [
    {
        name: "Piston",
        src: "https://avatars.mds.yandex.net/get-zen_doc/99101/pub_5ca2f7e6c2662100b312fd7e_5ca2f83929c43800b44c01a7/scale_1200",
        link: "",
        id: 1
    },
    {name: "Kalgan", src: "https://i.ytimg.com/vi/niQIeyYk0Nw/hqdefault.jpg", link: ""},
    {
        name: "Knyaz",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAb3SPw5yTzMwTaQ2k0vTSl4bVkia4ikyVM2KLxfKLkUjNqkMG&s",
        link: "",
        id: 2
    },
];

const friendsReducer = (state = initState, action) => {
    switch (action.type) {

    }

    return state;
};

export default friendsReducer;