import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

let store = {
     _state : {
        messagesPage : {
            names : [
                    {id: 1, name: "Linda", status: "online", url: "https://img1.goodfon.ru/wallpaper/nbig/8/52/emma-uotson-emma-watson-1608.jpg" },
                    {id: 2, name: "Andrey", status: "offline", url: "https://s003.radikal.ru/i201/1301/b9/40047998a150.jpg"},
                    {id: 3, name: "Mark", status: "online", url: "https://phonoteka.org/uploads/posts/2021-06/1624366937_42-phonoteka_org-p-brutalnie-oboi-na-telefon-krasivo-42.jpg"},
                    {id: 4, name: "Sophia", status: "offline", url: "https://cdn.fishki.net/upload/post/2019/09/23/3094631/8-20.jpg"},
                    {id: 5, name: "Maria", status: "online", url: "https://sun9-28.userapi.com/impg/5Vzc5WgO_s26YdDqoDmb6lx35s5LCSKvF0kNcQ/RzMT6qzjUH8.jpg?size=1280x800&quality=96&sign=df51af570f47c9d544cfc3971b363918&c_uniq_tag=mIXbCA0gkfCfugZaaDBL2ui3prlstpvpBkq202aG1NU&type=album"},
                    {id: 6, name: "Matt", status: "online", url: "https://w-dog.ru/wallpapers/2/0/331379149311571/kurenie-profil-robert-pattinson-dym.jpg"},
                    {id: 7, name: "Sandra", status: "offline", url: "https://uprostim.com/wp-content/uploads/2021/03/image120-1-1.jpg"},
                    {id: 8, name: "Sam", status: "offline", url: "https://cdn1.flamp.ru/dc384da007cf10e50573287f703cd8ec.jpg"}
            ],

            messages : [
                    {id: "me", message: "Hi"},
                    {id: 2, message: "How are you"},
                    {id: "me", message: "Great"},
                    {id: "me", message: "Hi"},
                    {id: 2, message: "How are you"},
                    {id: "me", message: "Great"},
                    {id: "me", message: "Hi"},
                    {id: 2, message: "How are you"},
                    {id: "me", message: "Great"},
            ],
            inputTextMessage : " " ,
        },
        profilePage : {
            posts : [
                    {id: 0, message: "Hello, people", likesCount: 3},
                    {id: 1, message: "It's my first post", likesCount: 15},
                    {id: 2, message: "Hi", likesCount: 3},
                    {id: 3, message: "It's my second post", likesCount: 15},
                    {id: 4, message: "Yo", likesCount: 3},
                    {id: 5, message: "Joy", likesCount: 15}
            ],
            inputTextPost : " " ,
        },
     },

    _subscriber() {
        alert ("no subscribers")
    },

    subscriber(observer) {
        this._subscriber = observer;
    },

    getState() {
        return this._state;
    },

     dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._subscriber(this._state);
     },
}

export default store;

