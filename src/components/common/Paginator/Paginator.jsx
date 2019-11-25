import React from 'react'
import style from './Paginator.module.css'

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= (pagesCount); i++) {
        pages.push(i);
    }
    let pageArray = pages.map(p => {
        return <span className={(props.currentPage === p) ? style.active : ""}
                     onClick={() => {
                         props.setPage(p);
                         props.setCurrentPage(p)
                     }}>{p}  </span>
    });
    return <div>
        {pageArray}
    </div>
};

export default Paginator;