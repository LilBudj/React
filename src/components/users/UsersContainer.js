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
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        totalUsersCount: state.usersData.totalUsersCount,
        currentPage: state.usersData.currentPage,
        isFetching: state.usersData.isFetching,
        followingInProgress: state.usersData.followingInProgress
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