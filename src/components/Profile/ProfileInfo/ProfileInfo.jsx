import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Common/preloader";
import Status from "./Status";



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    let userAva = ((props.profile.photos.large) ? props.profile.photos.large : "/ava.jpg");
    return (
        <div className={s.user__info}>        
            <img className={s.user__avatar} src = {userAva}  alt="ava"/>            
            <div className={s.user__name}>{props.profile.fullName}</div>
            <Status status = {props.status} updateMyStatus = {props.updateMyStatus}/>
        </div>
    )
};

export default ProfileInfo