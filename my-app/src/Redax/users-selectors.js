import {createSelector} from 'reselect'

const usersListSimple = (state) => {
    return state.usersPage.usersList;
}
export const usersList = createSelector(usersListSimple, (users) => {
    return users;
})

const pageSizeSimple = (state) => {
    return state.usersPage.pageSize;
}
export const pageSize = createSelector(pageSizeSimple, (page) => {
    return page;
})

const totalUsersCountSimple = (state) => {
    return state.usersPage.totalUsersCount;
}
export const totalUsersCount = createSelector(totalUsersCountSimple, (total) => {
    return total;
})

const currentPageSimple = (state) => {
    return state.usersPage.currentPage;
}
export const currentPage = createSelector(currentPageSimple, (current) => {
    return current;
})

const isFetchingSimple = (state) => {
    return state.usersPage.isFetching;
}
export const isFetching = createSelector(isFetchingSimple, (is) => {
    return is;
})

export const followingInProgressSimple = (state) => {
    return state.usersPage.followingInProgress;
}
export const followingInProgress = createSelector(followingInProgressSimple, (inProgress) => {
    return inProgress;
})
