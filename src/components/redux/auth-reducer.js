import {usersApi} from "../../api/api"

const SET_AUTH_DATA = "SET_AUTH_DATA";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isLogin: false,
    errorMessage: ""
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {
                ...state,
                ...action.data
            }
        };
        case SET_ERROR_MESSAGE: {
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        };
       
        default:
            return state;
    }
}

export const setUserAuthData = (userId, login, email, isLogin) => ({type: SET_AUTH_DATA, data : {userId, login, email, isLogin}});
export const setErrorMessage = (errorMessage) => ({type: SET_ERROR_MESSAGE, errorMessage});


export const isAutorized = () => {
    return (dispatch) => {
        return usersApi.authMe()
            .then(data => {
                if(data.resultCode ===0){
                    let {id, login, email} = data.data;
                    dispatch(setUserAuthData(id, login, email, true))
                }
            });
    }
}
export const loginProcess = (email, password, rememberMe) => {
    return (dispatch) => {
        usersApi.login(email, password, rememberMe)
        .then(data => {
            if(data.resultCode ===0){
                dispatch(isAutorized())
            }
            else {
                dispatch(setErrorMessage(data.messages[0]))
            }
        });
    }
}
export const logoutProcess = () => {
    return (dispatch) => {
        usersApi.logout()
        .then(data => {
            if(data.resultCode ===0){
                dispatch(setUserAuthData(null, null, null, false))
            }
        });
    }
}


export default authReducer;