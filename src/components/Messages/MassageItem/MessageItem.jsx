import React from "react";
import s from "./MessageItem.module.css";

const Message = (props) => {
    return <div className={s.message__area}>                
                <img className={`${s.message__ava} ${ props.userIdFrom === 21738 ? s.message__ava_me : '' }`} src={props.user?.url} alt="#"/>
                <div className={`${s.content__message} ${ props.userIdFrom === 21738 ? s.content__message_me : s.content__message_either }`}>
                    <div className={s.message__area_top}>
                        <div className={s.message__name}>{props.user?.name} {props.user?.surname}</div>
                        <div className={s.message__date}>{props.date}</div>
                    </div>               
                    <div className={s.message__message}>{props.message}</div>
                </div>                
            </div>
}

export default Message