import React from "react";
import s from "./Online.module.css"

const Online = (props) => {

    let OnlineFriend = props.names.map(name => {
        if (name.status == "online") {
            return <span className={s.online__person}  key={name.id}>
                        <img className={s.online__friend} src={name.url}/>
                        <span className={s.dot}></span>
                    </span>
        }
    })
    return (
        <div className={s.online__field}>
            <button className={s.online__button}> Chat online</button>
            {OnlineFriend}
        </div>
    )
}

export default Online
