import React from "react";
import s from "./Online.module.css"

const Online = (props) => {

    let OnlineFriend = props.names.map(name => {
        if (name.status == "online") {
            return <img className={s.online__friend} src={name.url}/>
        }

    })
    return (
        <div className={s.online_field}>
            <button className={s.online__button}> Chat online</button>
            <div>
                {OnlineFriend}
            </div>
        </div>
    )
}

export default Online
