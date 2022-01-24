import React from "react";
import s from "./People.module.css";
import Preloader from "../Common/preloader.jsx";
import { NavLink } from "react-router-dom";
import {usersApi} from "../../api/api.jsx";

const People = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.countUsersOnPage);
    let pages = [];
    for (let i=1; i <= 10; i++) {
        pages.push(i)
    }
    for (let i= (pagesCount-5); i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {(props.isLoading === true) ? <Preloader /> : null}
        <div className={s.pages__area}>
            {pages.map(p => {
                return <span className={props.activePage === p && s.activePage}
                     onClick={(e) => {props.onPageChanges(p)}
                }>{p}</span>
            })}
        </div>
        {props.users.map(u => <div className={s.person} key={u.id}>
            <NavLink to={'/profile/' + u.id}>
                <img src={u.photos.small} className={s.person__ava}></img>
            </NavLink>
            <div>
                <div className={s.person__name}>{u.name} </div>
                {/*<div className={s.person__profession}>{u.profession}</div>
                <div className={s.person__location}>{u.location.country} {u.location.city}</div>*/}
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
