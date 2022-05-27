import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css"

const Dialog = ({url, id, name, surname, status, userId}) => {
    return (
        <div className={`${s.dialog__holder} ${id === userId ? s.dialog__holder_activ : ""}`}>            
            <NavLink to={"/messages/" + id} className={s.dialogs__item}>
                <div className={s.dialog__area}>
                    <img className={s.dialogs__ava} src={url} alt="#"/>
                    {status=="online" ? <div className={s.dot}></div> : null}
                    <div className={s.dialog__area_top}>
                        <div className={s.dialog__name}>{name} {surname}</div>
                        <div className={s.dialog__date}>date</div>
                    </div>                    
                    <div className={s.dialog__message}>Last message</div>
                </div>                
            </NavLink>
        </div>
    )
}


export default Dialog