import tuits from "../data/tuits.json";

const tuitsReducer =
    (state = tuits, action) => {
        switch (action.type) {
            case 'create-tuit':
                const newTuit = {
                    tuit: action.tuit,
                    _id: (new Date()).getTime() + '',
                    postedBy: {
                        "username": "ReactJS"
                    },
                    handle: "ReactJS",
                    stats: {
                        retuits: 111,
                        likes: 222,
                        replies: 333
                    },
                    avatar: "/tuiter/images/gudetama-flower.jpg",
                }
                return [
                    newTuit,
                    ...state,
                ];
            default:
                return tuits
        }
    }

    /*
const tuitsReducer =
    (state = tuits, action) => {
        switch (action.type) {
            case 'create-tuit':
                const newTuit = {
                    _id: (new Date()).getTime() + '',
                    topic: "Web Development",
                    userName: "ReactJS",
                    verified: false,
                    handle: "ReactJS",
                    time: "2h",
                    tuit: action.tuit,
                    avatar: "/tuiter/images/gudetama-flower.jpg",
                    logo: "/tuiter/images/gudetama-flower.jpg",
                    stats: {
                        comments: 123,
                        retuits: 234,
                        likes: 345
                    },
                };
                return [
                    newTuit,
                    ...state,
                ];
            default:
                return tuits
        }
    }
*/

export default tuitsReducer;
