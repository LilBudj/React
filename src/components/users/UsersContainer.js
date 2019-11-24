import {connect} from 'react-redux';
import {
    followUserThunkCreator, getUsersThunkCreator,
    setCurrentPageActionCreator, setTotalCountActionCreator,
    setUsersActionCreator, toggleFetchingActionCreator, toggleFollowingProgressActionCreator,
    unfollowUserThunkCreator
} from "../../redux/UsersReducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching, getPageSize,
    getTotalCount,
    getUsers
} from "../../redux/UsersReselectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    setPage(page){
        this.props.getUsers(page, this.props.pageSize)
    };

    render = () => {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users
            totalCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            setCurrentPage={this.props.setCurrentPage}
            setPage={this.setPage.bind(this)}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            toggleFollowing={this.props.toggleProgress}
            followingInProgress={this.props.followingInProgress}
        />}
        </>
    }
}

let mapStateToProps = (state) => {
    return{
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
};

export default connect(mapStateToProps, {
    follow: followUserThunkCreator,
    unfollow: unfollowUserThunkCreator,
    setUsers: setUsersActionCreator,
    setCurrentPage: setCurrentPageActionCreator,
    setTotalCount: setTotalCountActionCreator,
    toggle: toggleFetchingActionCreator,
    toggleProgress: toggleFollowingProgressActionCreator,
    getUsers: getUsersThunkCreator
})(UsersContainer);