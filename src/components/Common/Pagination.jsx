import React, {useState} from "react";
import s from "./Pagination.module.css";

const Pagination = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.countUsersOnPage);
    let portionSize = 10;
    let [portionNumber, setPortionNumber] = useState(0);
    let lastPortion =  Math.ceil(pagesCount/portionSize);    
    let pages = [];
    for (let i=(portionNumber*portionSize+1); i <= ((portionNumber+1) * portionSize); i++) {
        pages.push(i)
    }
    return <div className={s.pages__area}>
        {(portionNumber == 0) ? <button onClick={() => {setPortionNumber(portionNumber-1)}} className={s.button + " " + s.button__prev } disabled></button> 
            : <button onClick={() => {setPortionNumber(portionNumber-1)}} className={s.button + " " + s.button__prev}></button>}
        {pages.map(p => {
            return <div className={s.pages__number}><div className={props.activePage === p && s.activePage}
                    onClick={(e) => {props.onPageChanges(p)}
            }>{p}</div></div>
        })}
        {((portionNumber+1) < lastPortion) ? <button onClick={() => {setPortionNumber(portionNumber+1)}} className={s.button + " " + s.button__next}></button> : null}
    </div>

}

export default Pagination
