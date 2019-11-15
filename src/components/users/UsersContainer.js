import {connect} from 'react-redux';
import {
    followActionCreator,
    setCurrentPageActionCreator, setTotalCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/UsersReducer";
import Users from "./Users";
import React from "react";
import * as axios from "axios";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount)
        });
    }

    setPage(page) {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount)
        });
    }

    render = () => {
        return <Users
            totalCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            setPage={this.props.setPage}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
        />
    }
}

let mapStateToProps = (state) => {
    return{
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        totalUsersCount: state.usersData.totalUsersCount,
        currentPage: state.usersData.currentPage
    }
};
let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {dispatch(followActionCreator(userId))},
        unfollow: (userId) => {dispatch(unfollowActionCreator(userId))},
        setUsers: (users) => {dispatch(setUsersActionCreator(users))},
        setCurrentPage: (page) => {dispatch(setCurrentPageActionCreator(page))},
        setTotalCount: (totalCount) =>{dispatch(setTotalCountActionCreator(totalCount))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);