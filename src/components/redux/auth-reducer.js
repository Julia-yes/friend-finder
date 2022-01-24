import {usersApi} from "../../api/api"

const SET_AUTH_DATA = "SET_AUTH_DATA";


let initialState = {
    userId: null,
    login: null,
    email: null,
    isLogin: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                ...action.data,
                isLogin: true,
            }
        };
        
        default:
            return state;
    }
}

export const setUserAuthData = (userId, login, email) => ({type: SET_AUTH_DATA, data : {userId, login, email}});

export const isAutorized = () => {
    return (dispatch) => {
        usersApi.authMe()
        .then(data => {
            if(data.resultCode ===0){
                let {id, login, email} = data.data;
                dispatch(setUserAuthData(id, login, email))
            }
        });
    }
}


export default authReducer;