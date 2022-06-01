const ADD_MESSAGE = "ADD-MESSAGE";
const ADD_FRIEND = "ADD-FRIEND";

let initialState = {
    names : [
        {id: 1, name: "Linda", surname: "Bogash", friend: true,  status: "online",url: "https://img1.goodfon.ru/wallpaper/nbig/8/52/emma-uotson-emma-watson-1608.jpg" },
        {id: 2, name: "Andrey", surname: "Filipov", friend: true, status: "offline",  url: "https://stihi.ru/pics/2012/09/25/9241.jpg"},
        {id: 3, name: "Mark", surname: "Marich", friend: false, status: "online",  url: "https://phonoteka.org/uploads/posts/2021-06/1624366937_42-phonoteka_org-p-brutalnie-oboi-na-telefon-krasivo-42.jpg"},
        {id: 4, name: "Sophia", surname: "Pohodova", friend: true, status: "offline",  url: "https://cdn.fishki.net/upload/post/2019/09/23/3094631/8-20.jpg"},
        {id: 5, name: "Maria", surname: "Dance", friend: false, status: "online",  url: "https://sun9-28.userapi.com/impg/5Vzc5WgO_s26YdDqoDmb6lx35s5LCSKvF0kNcQ/RzMT6qzjUH8.jpg?size=1280x800&quality=96&sign=df51af570f47c9d544cfc3971b363918&c_uniq_tag=mIXbCA0gkfCfugZaaDBL2ui3prlstpvpBkq202aG1NU&type=album"},
        {id: 6, name: "Matt", surname: "Dafer", friend: false, status: "online",  url: "https://w-dog.ru/wallpapers/2/0/331379149311571/kurenie-profil-robert-pattinson-dym.jpg"},
        {id: 7, name: "Sandra", surname: "Villy", friend: true, status: "offline",  url: "https://uprostim.com/wp-content/uploads/2021/03/image120-1-1.jpg"},
        {id: 8, name: "Sam", surname: "Hottyffen", friend: false, status: "offline",  url: "https://cdn1.flamp.ru/dc384da007cf10e50573287f703cd8ec.jpg"},
        {id: 21738, name: "Julia", surname: "Bolonikova", url: "https://social-network.samuraijs.com/activecontent/images/users/21738/user.jpg?v=11"}
    ],
    messages : [        
            {id: 1, userIdFrom: 21738, userIdTo: 2, date: new Date(2021, 11, 10).toISOString(), message: "Hi"},
            {id: 2, userIdFrom: 2, userIdTo: 21738, date: new Date(2021, 11, 10).toISOString(), message: "How are you?"},
            {id: 3, userIdFrom: 21738, userIdTo: 2, date: new Date(2021, 11, 10).toISOString(), message: "Cool"},
            {id: 4, userIdFrom: 21738, userIdTo: 2, date: new Date(2022, 2, 15).toISOString(), message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
            {id: 5, userIdFrom: 2, userIdTo: 21738, date: new Date(2022, 2, 15).toISOString(), message: "How are you?"},
            {id: 6, userIdFrom: 21738, userIdTo: 2, date: new Date(2022, 2, 15).toISOString(), message: "Great"},
            {id: 7, userIdFrom: 21738, userIdTo: 2, date: new Date(2022, 3, 16).toISOString(), message: "Hi"},
            {id: 8, userIdFrom: 2, userIdTo: 21738, date: new Date(2022, 3, 16).toISOString(), message: "How are you?"},
            {id: 9, userIdFrom: 21738, userIdTo: 2, date: new Date(2022, 3, 16).toISOString(), message: "Cool"},
            {id: 10, userIdFrom: 21738, userIdTo: 1, date: new Date(2021, 11, 10).toISOString(), message: "Hello"},
            {id: 11, userIdFrom: 1, userIdTo: 21738, date: new Date(2021, 11, 10).toISOString(), message: "What news?"},
            {id: 12, userIdFrom: 21738, userIdTo: 1, date: new Date(2022, 11, 10).toISOString(), message: "No news"},
            {id: 13, userIdFrom: 21738, userIdTo: 1, date: new Date(2022, 2, 15).toISOString(), message: "(("},
            {id: 14, userIdFrom: 1, userIdTo: 21738, date: new Date(2022, 2, 15).toISOString(), message: "Not fanny"},
            {id: 15, userIdFrom: 21738, userIdTo: 3, date: new Date(2021, 11, 10).toISOString(), message: "Hi, bro"},
            {id: 16, userIdFrom: 3, userIdTo: 21738, date: new Date(2021, 11, 10).toISOString(), message: "hey-hey"},
            {id: 17, userIdFrom: 21738, userIdTo: 3, date: new Date(2021, 11, 10).toISOString(), message: "Go together"},
            {id: 18, userIdFrom: 21738, userIdTo: 3, date: new Date(2022, 2, 10).toISOString(), message: "Cinema?"},
            {id: 19, userIdFrom: 3, userIdTo: 21738, date: new Date(2022, 2, 10).toISOString(), message: "Cool"},
            {id: 20, userIdFrom: 21738, userIdTo: 3, date: new Date(2022, 2, 10).toISOString(), message: "Where?"},
            {id: 21, userIdFrom: 21738, userIdTo: 3, date: new Date(2022, 3, 10).toISOString(), message: "When?"},
            {id: 22, userIdFrom: 3, userIdTo: 21738, date: new Date(2022, 3, 10).toISOString(), message: "At 5, on the corner"},
            {id: 23, userIdFrom: 21738, userIdTo: 3, date: new Date(2022, 3, 10).toISOString(), message: "Great"},
            {id: 24, userIdFrom: 21738, userIdTo: 4, date: new Date(2021, 11, 10).toISOString(), message: "Sorry for question"},
            {id: 25, userIdFrom: 21738, userIdTo: 4, date: new Date(2022, 3, 15).toISOString(), message: "When will the meeting start?"},
            {id: 26, userIdFrom: 4, userIdTo: 21738, date: new Date(2022, 3, 16).toISOString(), message: "At 5"},
            {id: 27, userIdFrom: 21738, userIdTo: 4, date: new Date(2022, 3, 16).toISOString(), message: "Thanks"},
            {id: 28, userIdFrom: 5, userIdTo: 21738, date: new Date(2022, 3, 16).toISOString(), message: "You are cool"},
            {id: 29, userIdFrom: 21738, userIdTo: 5, date: new Date(2022, 3, 16).toISOString(), message: "Thanks"},
            {id: 30, userIdFrom: 6, userIdTo: 21738, date: new Date(2022, 3, 16).toISOString(), message: "let's meet?"},
            {id: 31, userIdFrom: 21738, userIdTo: 6, date: new Date(2022, 3, 16).toISOString(), message: "Not now"},
            {id: 32, userIdFrom: 21738, userIdTo: 7, date: new Date(2021, 11, 10).toISOString(), message: "Yo"},
            {id: 33, userIdFrom: 7, userIdTo: 21738, date: new Date(2021, 11, 10).toISOString(), message: "What news?"},
            {id: 34, userIdFrom: 21738, userIdTo: 7, date: new Date(2021, 11, 10).toISOString(), message: "I am going to travel"},
            {id: 35, userIdFrom: 21738, userIdTo: 7, date: new Date(2022, 2, 10).toISOString(), message: "Will go together?"},
            {id: 36, userIdFrom: 7, userIdTo: 21738, date: new Date(2022, 2, 10).toISOString(), message: "Sure"},
            {id: 37, userIdFrom: 21738, userIdTo: 8, date: new Date(2022, 3, 19).toISOString(), message: "Good photo"},
            {id: 38, userIdFrom: 21738, userIdTo: 8, date: new Date(2021, 11, 19).toISOString(), message: "Hi"},
            {id: 39, userIdFrom: 8, userIdTo: 21738, date: new Date(2021, 11, 20).toISOString(), message: "Thanks so much"},
        
    ],
};

const messagesReducer = (state = initialState, action) => {
     switch (action.type) {
        case "ADD-MESSAGE" : {
            return {
            ...state,
            messages : [...state.messages, {id: state.messages.length + 2, userIdFrom: 21738, message: action.text, userIdTo: action.userIdTo, date: new Date().toISOString(),}],
            inputTextMessage : " "
            };
        }
        case "ADD-FRIEND" : {
            return {
            ...state,
            names : state.names.map(n => {
                if (n.id === action.id) {
                    return {...n, friend : true}
                }
            return n
            })            
            };
        }
        default :
            return state;
     }
}


export const addMessage = (text, userIdTo) => ({type: ADD_MESSAGE, text, userIdTo});
export const addFriend = (id) => ({type: ADD_FRIEND, id});
export default messagesReducer;

