import {usersApi} from "../../api/api"

const ADD_POST = "ADD-POST";
const SET_USERS_PROFILE = "SET_USERS_PROFILE";
const SET_USERS_STATUS = "SET_USERS_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";

let initialState = {
 posts : [
                    {id: 0, message: "Hello, people", likesCount: 3},
                    {id: 1, message: "It's my first post", likesCount: 15},
                    {id: 2, message: "Hi", likesCount: 3},
                    {id: 3, message: "It's my second post", likesCount: 15},
                    {id: 4, message: "Yo", likesCount: 3},
                    {id: 5, message: "Joy", likesCount: 15}
 ],
 profile : null,
 status : " ",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts : [...state.posts, {id: 1, message: action.text , likesCount: 10}]
            }
        };
        case SET_USERS_PROFILE: {
            return  {...state,
                profile : action.profile,
            }
        };
        case SET_USERS_STATUS: {
            return  {...state,
                status : action.status,
            }
        };
        case UPDATE_STATUS: {
            return  {...state,
                status : action.newStatus,
            }
        };
        default:
            return state;
    }
}

export const addPost = (text) => ({type: ADD_POST, text: text});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setUsersStatus = (status) => ({type: SET_USERS_STATUS, status});
export const updateStatus = (newStatus) => ({type: UPDATE_STATUS, newStatus});

export const showUserInfo = (userId) => {
    return (dispatch) => {
        usersApi.getUserInfo(userId).then(data => {
            dispatch(setUsersProfile(data))           
        });
    }
}

export const showUserStatus = (userId) => {
    return (dispatch) => {
        usersApi.getUserStatus(userId).then(data => {
                dispatch(setUsersStatus(data))  
        });
    }
}
export const updateMyStatus = (status) => {
    return (dispatch) => {
        usersApi.updateMyStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(updateStatus(status))   
            }
        });
    }
}

export default profileReducer;