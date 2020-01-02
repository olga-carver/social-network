let state = {
    profilePage: {
        postData: [
            { message: "I am learning react!", likecount: 13 },
            { message: "It is so exiting!", likecount: 17 }
        ]
    },

    dialogsPage: {
        dialogsData: [
            { id: 1, name: "Olga" },
            { id: 2, name: "Ilya" },
            { id: 3, name: "Timofey" },
            { id: 4, name: "Lena" }
        ],
        
        messagesData: [
            { message: "Hi!" },
            { message: "Hi!" },
            { message: "Hi!" },
            { message: "Hi!" }
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likecount: 0
    };
    state.profilePage.postData.push(newPost);
}



export default state;