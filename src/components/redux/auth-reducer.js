import {usersApi} from "../../api/api"

const SET_AUTH_DATA = "SET_AUTH_DATA";
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL";


let initialState = {
    userId: null,
    login: null,
    email: null,
    isLogin: false,
    errorMessage: "",
    captcha: null,
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
        case SET_CAPTCHA_URL: {
            return {
                ...state,
                captcha: action.captchaUrl
            }
        };       
        default:
            return state;
    }
}

export const setUserAuthData = (userId, login, email, isLogin, captcha) => ({type: SET_AUTH_DATA, data : {userId, login, email, isLogin, captcha}});
export const setErrorMessage = (errorMessage) => ({type: SET_ERROR_MESSAGE, errorMessage});
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl});


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
export const loginProcess = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
        usersApi.login(email, password, rememberMe, captcha)
        .then(data => {
            if(data.resultCode ===0){
                dispatch(isAutorized())
            }
            else {
                dispatch(getCaptchaUrl());
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
export const getCaptchaUrl = () => {
    return (dispatch) => {
        usersApi.getCaptcha()
        .then(data => {
            dispatch(setCaptchaUrl(data.url))
        })
    }
}


export default authReducer;