export const getUsersSelector = (state) => {
    return state.peoplePage.users
}

export const getTotalCount = (state) => {
    return state.peoplePage.totalCount
}

export const getCountUsersOnPage = (state) => {
    return state.peoplePage.countUsersOnPage
}

export const getActivePage = (state) => {
    return state.peoplePage.activePage
}

export const getLoading = (state) => {
    return state.peoplePage.isLoading
}

export const getProcessFollowed = (state) => {
    return state.peoplePage.inProcessFollowed
}

