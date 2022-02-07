import React from "react";
import s from "./MessageItem.module.css"

const Message = (props) => {
    if (props.id == "me") {
        return (<div className={s.content__message + " " + s.content__message_me}>{props.message}</div>)
    }
    return (<div className={s.content__message + " " + s.content__message_either}>{props.message}</div>)
}

export default Message