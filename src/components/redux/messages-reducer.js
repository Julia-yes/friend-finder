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
            {userIdFrom: 21738, userIdTo: 2, date: "10/12/2021", message: "Hi"},
            {userIdFrom: 2, userIdTo: 21738, date: "10/12/2021", message: "How are you?"},
            {userIdFrom: 21738, userIdTo: 2, date: "10/12/2021", message: "Great"},
            {userIdFrom: 21738, userIdTo: 2, date: "15/03/2022", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
            {userIdFrom: 2, userIdTo: 21738, date: "15/03/2022", message: "How are you?"},
            {userIdFrom: 21738, userIdTo: 2, date: "15/03/2022", message: "Great"},
            {userIdFrom: 21738, userIdTo: 2, date: "16/04/2022", message: "Hi"},
            {userIdFrom: 2, userIdTo: 21738, date: "16/04/2022", message: "How are you?"},
            {userIdFrom: 21738, userIdTo: 2, date: "16/04/2022", message: "Great"},
            {userIdFrom: 21738, userIdTo: 1, date: "10/12/2021", message: "Hello"},
            {userIdFrom: 1, userIdTo: 21738, date: "10/12/2021", message: "What news?"},
            {userIdFrom: 21738, userIdTo: 1, date: "10/12/2021", message: "No news"},
            {userIdFrom: 21738, userIdTo: 1, date: "15/03/2022", message: "(("},
            {userIdFrom: 1, userIdTo: 21738, date: "15/03/2022", message: "Not fanny"},
            {userIdFrom: 21738, userIdTo: 3, date: "10/12/2021", message: "Hi, bro"},
            {userIdFrom: 3, userIdTo: 21738, date: "10/12/2021", message: "hey-hey"},
            {userIdFrom: 21738, userIdTo: 3, date: "10/12/2021", message: "Go together"},
            {userIdFrom: 21738, userIdTo: 3, date: "10/03/2022", message: "Cinema?"},
            {userIdFrom: 3, userIdTo: 21738, date: "10/03/2022", message: "Cool"},
            {userIdFrom: 21738, userIdTo: 3, date: "10/03/2022", message: "Where?"},
            {userIdFrom: 21738, userIdTo: 3, date: "10/04/2022", message: "When?"},
            {userIdFrom: 3, userIdTo: 21738, date: "10/04/2022", message: "At 5, on the corner"},
            {userIdFrom: 21738, userIdTo: 3, date: "10/04/2022", message: "Great"},
            {userIdFrom: 21738, userIdTo: 4, date: "15/03/2022", message: "Sorry for question"},
            {userIdFrom: 21738, userIdTo: 4, date: "15/04/2022", message: "When will the meeting start?"},
            {userIdFrom: 4, userIdTo: 21738, date: "16/04/2022", message: "At 5"},
            {userIdFrom: 21738, userIdTo: 4, date: "16/04/2022", message: "Thanks"},
            {userIdFrom: 5, userIdTo: 21738, date: "16/04/2022", message: "You are cool"},
            {userIdFrom: 21738, userIdTo: 5, date: "16/04/2022", message: "Thanks"},
            {userIdFrom: 6, userIdTo: 21738, date: "16/04/2022", message: "let's meet?"},
            {userIdFrom: 21738, userIdTo: 6, date: "16/04/2022", message: "Not now"},
            {userIdFrom: 21738, userIdTo: 7, date: "10/12/2021", message: "Yo"},
            {userIdFrom: 7, userIdTo: 21738, date: "10/12/2021", message: "What news?"},
            {userIdFrom: 21738, userIdTo: 7, date: "10/12/2021", message: "I am going to travel"},
            {userIdFrom: 21738, userIdTo: 7, date: "10/03/2022", message: "Will go together?"},
            {userIdFrom: 7, userIdTo: 21738, date: "10/03/2022", message: "Sure"},
            {userIdFrom: 21738, userIdTo: 8, date: "19/04/2022", message: "Good photo"},
            {userIdFrom: 21738, userIdTo: 8, date: "19/12/2021", message: "Hi"},
            {userIdFrom: 8, userIdTo: 21738, date: "20/12/2021", message: "Thanks so much"},
        
    ],
};

const messagesReducer = (state = initialState, action) => {
     switch (action.type) {
        case "ADD-MESSAGE" : {
            return {
            ...state,
            messages : [...state.messages, {id: 21738, message: action.text}],
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


export const addMessage = (text) => ({type: ADD_MESSAGE, text});
export const addFriend = (id) => ({type: ADD_FRIEND, id});
export default messagesReducer;

