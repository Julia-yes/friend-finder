const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
    names : [
            {id: 1, name: "Linda", surname: "Bogash", friend: true,  status: "online", location : {country : "Belarus", city: "Minsk"}, url: "https://img1.goodfon.ru/wallpaper/nbig/8/52/emma-uotson-emma-watson-1608.jpg" },
            {id: 2, name: "Andrey", surname: "Filipov", friend: true, status: "offline", location : {country : "Belarus", city: "Gomel"}, url: "https://s003.radikal.ru/i201/1301/b9/40047998a150.jpg"},
            {id: 3, name: "Mark", surname: "Marich", friend: false, status: "online", location : {country : "Ukraine", city: "Kiev"}, url: "https://phonoteka.org/uploads/posts/2021-06/1624366937_42-phonoteka_org-p-brutalnie-oboi-na-telefon-krasivo-42.jpg"},
            {id: 4, name: "Sophia", surname: "Pohodova", friend: true, status: "offline", location : {country : "Russia", city: "Moscow"}, url: "https://cdn.fishki.net/upload/post/2019/09/23/3094631/8-20.jpg"},
            {id: 5, name: "Maria", surname: "Dance", friend: false, status: "online", location : {country : "UK", city: "London"}, url: "https://sun9-28.userapi.com/impg/5Vzc5WgO_s26YdDqoDmb6lx35s5LCSKvF0kNcQ/RzMT6qzjUH8.jpg?size=1280x800&quality=96&sign=df51af570f47c9d544cfc3971b363918&c_uniq_tag=mIXbCA0gkfCfugZaaDBL2ui3prlstpvpBkq202aG1NU&type=album"},
            {id: 6, name: "Matt", surname: "Dafer", friend: false, status: "online", location : {country : "USA", city: "Denver"}, url: "https://w-dog.ru/wallpapers/2/0/331379149311571/kurenie-profil-robert-pattinson-dym.jpg"},
            {id: 7, name: "Sandra", surname: "Villy", friend: true, status: "offline", location : {country : "Poland", city: "Warsaw"}, url: "https://uprostim.com/wp-content/uploads/2021/03/image120-1-1.jpg"},
            {id: 8, name: "Sam", surname: "Hottyffen", friend: false, status: "offline", location : {country : "Denmark", city: "Copenhagen"}, url: "https://cdn1.flamp.ru/dc384da007cf10e50573287f703cd8ec.jpg"}
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
};

const messagesReducer = (state = initialState, action) => {
     switch (action.type) {
        case "ADD-MESSAGE" : {
            return {
            ...state,
            messages : [...state.messages, {id: 1, message: action.text}],
            inputTextMessage : " "
            };
        }
        default :
            return state;
     }
}

export const addMessage = (text) => ({type: ADD_MESSAGE, text});
export default messagesReducer;

