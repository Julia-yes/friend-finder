import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css"

const Dialog = ({url, id, name}) => {
    return (
        <div>
            <img className={s.dialogs__ava} src={url} alt="#"/>
            <NavLink to={"/messages/" + id} className={s.dialogs__item}>{name}</NavLink>
        </div>
    )
}


export default Dialog