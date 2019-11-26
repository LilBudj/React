import React, {useState} from 'react'
import style from './Paginator.module.css'

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pagesPortion = 10;
    let maxSegment  = props.totalCount/100;
    let [currentSegment, setCurrentSegment] = useState(1);
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
    let pagePortioned = pageArray.slice((currentSegment-1)*10, (currentSegment-1)*10 + pagesPortion);
    debugger
    return <div>
        <button disabled={(currentSegment < 2)} onClick={() => setCurrentSegment(currentSegment-1)}>prev</button>
        {pagePortioned}
        <button disabled={(currentSegment > maxSegment)} onClick={()=>{setCurrentSegment(currentSegment+1)}}>next</button>
    </div>
};

export default Paginator;