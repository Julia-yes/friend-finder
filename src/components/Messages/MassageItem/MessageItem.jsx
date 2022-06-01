import React from "react";
import s from "./MessageItem.module.css";

const Message = (props) => {
    function formatDate(date) {
        let dayOfMonth = parseInt(new Date(date).getDate());
        let month = parseInt(new Date(date).getMonth() + 1);
        let year = parseInt(new Date(date).getFullYear());
        let hour = parseInt(new Date(date).getHours());
        let minutes = parseInt(new Date(date).getMinutes());        
        
        month = month < 10 ? '0' + month : month;
        dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
        hour = hour < 10 ? '0' + hour : hour;
        minutes = minutes < 10 ? '0' + minutes : minutes;
      
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`        
    }
    return <div className={s.message__area}>                
                <img className={`${s.message__ava} ${ props.userIdFrom === 21738 ? s.message__ava_me : '' }`} src={props.user?.url} alt="#"/>
                <div className={`${s.content__message} ${ props.userIdFrom === 21738 ? s.content__message_me : s.content__message_either }`}>
                    <div className={s.message__area_top}>
                        <div className={s.message__name}>{props.user?.name} {props.user?.surname}</div>
                        <div className={s.message__date}>{formatDate(props.date)}</div>
                    </div>               
                    <div className={s.message__message}>{props.message}</div>
                </div>                
            </div>
}

export default Message