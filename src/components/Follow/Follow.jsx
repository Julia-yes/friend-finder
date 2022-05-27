import React from "react";
import s from "./Follow.module.css"

const Follow = (props) => {

    let FollowFriend = props.names.map(name => {
        if (name.friend) {
            return <div className={s.follow__person}>
                        <img className={s.follow__ava} src={name.url}/>
                        <div className={s.follow__name}>{name.name} {name.surname}</div>
                        <button className={s.follow__button} onClick = {() => props.addFriend(name.id)} >Add Friend</button>
                    </div>
        }
    })
    return (
        <div className={s.follow__field}>
            <div>Who To Follow</div>
            {FollowFriend}
        </div>
    )
}

export default Follow
