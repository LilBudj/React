import React from 'react'
import style from './Users.module.css'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, totalCount, setPage, setCurrentPage, pageSize, ...props}) => {
    return (
        <div className={style.users}>
            <Paginator currentPage={currentPage} totalCount={totalCount} pageSize={pageSize}
                       setCurrentPage={setCurrentPage} setPage={setPage}/>
            {props.users.map(u => (<User u={u} {...props}/>))}
        </div>
    )
};

export default Users;