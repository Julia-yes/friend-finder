import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css"


const Dialog = (props) => {

    let path = "/messages/" + props.id;

    return (
        <div>
            <img className={s.dialogs__ava} src={props.url} alt="#"/>
            <NavLink to={path} className={s.dialogs__item}>{props.name}</NavLink>
        </div>

    )
}


export default Dialog