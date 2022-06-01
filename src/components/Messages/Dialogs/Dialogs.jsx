import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css";
import { useSelector } from 'react-redux'

const Dialog = ({url, id, name, surname, status, userId}) => {
    const messages = useSelector((state) => state.messagesPage.messages);
    let lastMessage = messages.filter(message => message.userIdFrom === id || message.userIdTo === id).sort ((a,b) => b.id - a.id)[0];

    function formatDate(date) {
        let dayOfMonth = parseInt(new Date(date).getDate());
        let month = parseInt(new Date(date).getMonth() + 1);
        let year = parseInt(new Date(date).getFullYear());   
        
        month = month < 10 ? '0' + month : month;
        dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
      
        return `${dayOfMonth}.${month}.${year}`        
    }
    return (
        <div className={`${s.dialog__holder} ${id === userId ? s.dialog__holder_activ : ""}`}>            
            <NavLink to={"/messages/" + id} className={s.dialogs__item}>
                <div className={s.dialog__area}>
                    <img className={s.dialogs__ava} src={url} alt="#"/>
                    {status=="online" ? <div className={s.dot}></div> : null}
                    <div className={s.dialog__area_top}>
                        <div className={s.dialog__name}>{name} {surname}</div>
                        <div className={s.dialog__date}>{formatDate(lastMessage.date)}</div>
                    </div>                    
                    <div className={s.dialog__message}>{lastMessage.message}</div>
                </div>                
            </NavLink>
        </div>
    )
}


export default Dialog