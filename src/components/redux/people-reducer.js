import {usersApi} from "../../api/api"

const ADD_FRIEND = "ADD_FRIEND";
const DELETE_FRIEND = "DELETE_FRIEND";
const SET_USERS = "SET_USERS";
const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_LOADING = "SET_LOADING";
const IN_PROCESS = "IN_PROCESS";

let initialState = {
    users: [],
    totalCount: 0,
    countUsersOnPage: 5,
    activePage: 1,
    isLoading: false,
    inProcessFollowed: [],

};

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND: {
            return {
                ...state,
                users : state.users.map(u => {
                    if (u.id === action.userId) {
                    return {...u, followed: true}
                    }
                    return u
                })
            }
        };
        case DELETE_FRIEND: {
            return {
                ...state,
                users : state.users.map(u => {
                    if (u.id === action.userId) {
                    return {...u, followed: false}
                    }
                    return u
                })
            }
        };
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalCount: action.totalCount}
        }
        case SET_ACTIVE_PAGE: {
            return {...state, activePage: action.pageNumber}
        }
        case SET_LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        case IN_PROCESS: {
            return {
                ...state,
                inProcessFollowed: action.inProcess
                    ? [...state.inProcessFollowed, action.userId]
                    : state.inProcessFollowed.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const addFriend = (userId) => ({type: ADD_FRIEND, userId});
export const deleteFriend = (userId) => ({type: DELETE_FRIEND, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setActivePage = (pageNumber) => ({type: SET_ACTIVE_PAGE, pageNumber});
export const setLoading = (isLoading) => ({type: SET_LOADING, isLoading});
export const setInProcessFollowed = (inProcess, userId) => ({type: IN_PROCESS, inProcess, userId});

export const getUsers = (activePage, countUsersOnPage) => {
    return (dispatch) => {
        dispatch(setActivePage(activePage));
        dispatch(setLoading(true));
        usersApi.getUsers(activePage, countUsersOnPage).then(data => {
            dispatch(setLoading(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
        });
    }
}

export const unfollowUser = (userId) => {
    return (dispatch) => {
        dispatch(setInProcessFollowed(true, userId));
        usersApi.unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(deleteFriend(userId));
                    dispatch(setInProcessFollowed(false, userId));
            }
        })
    }
}

export const followUser = (userId) => {
    return (dispatch) => {
        dispatch(setInProcessFollowed(true, userId));
        usersApi.follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(addFriend(userId));
                    dispatch(setInProcessFollowed(false, userId));
            }
        })
    }
}


export default peopleReducer;