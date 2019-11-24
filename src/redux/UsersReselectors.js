export const getUsers = (state) => {
    return state.usersData.users
};
export const getPageSize = (state) => {
    return state.usersData.pageSize
};
export const getTotalCount = (state) => {
    return state.usersData.totalUsersCount
};
export const getCurrentPage = (state) => {
    return state.usersData.currentPage
};
export const getIsFetching = (state) => {
    return state.usersData.isFetching
};
export const getFollowingInProgress = (state) => {
    return state.usersData.followingInProgress
};
