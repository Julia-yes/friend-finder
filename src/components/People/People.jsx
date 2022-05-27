import React from "react";
import s from "./People.module.css";
import Preloader from "../Common/preloader.jsx";
import { NavLink } from "react-router-dom";
import Pagination from "../Common/Pagination";
import ava from "../../images/ava.jpg"

const People = (props) => {
    return <div>
        {(props.isLoading === true) ? <Preloader /> : null}
        <Pagination totalCount = {props.totalCount} countUsersOnPage = {props.countUsersOnPage} activePage = {props.activePage} onPageChanges = {props.onPageChanges}/>
        {props.users.map(u => <div className={s.person} key={u.id}>
            <NavLink to={'/holder/' + u.id}>
                {u.photos.small ? <img src={u.photos.small} className={s.person__ava}></img> : <img src={ava} className={s.person__ava}></img> }
            </NavLink>
            <div>
                <div className={s.person__name}>{u.name} </div>
                <div className={s.person__status}>{u.status} </div>
            </div>
            <div>
                {u.followed
                    ? <button disabled = {props.inProcessFollowed.some(id => id === u.id)} className={s.person__button + " " + s.person__button_delete} onClick={() => {
                            props.unfollowUser(u.id);
                            
                        }}>Delete friend
                        </button>
                    : <button disabled = {props.inProcessFollowed.some(id => id === u.id)} className={s.person__button + " " + s.person__button_add} onClick={() => {
                            props.followUser(u.id);
                        }}>Add friend</button>
                }
            </div>
        </div>)
        }
    </div>

}

export default People
