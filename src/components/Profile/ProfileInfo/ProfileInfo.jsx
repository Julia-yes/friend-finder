import React from "react";
import { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Common/preloader";
import Status from "./Status";
import ProfileDataForm from "./ProfileDataForm"



const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <Preloader />
    }
    let userAva = ((props.profile.photos.large) ? props.profile.photos.large : "/ava.jpg");
    const savePhoto = (e) => {
        if (e.target.files.length) {
            props.savePhotoProcess(e.target.files[0])            
        }
    }
    return (
        <div className={s.user__info}>        
            <img className={s.user__avatar} src = {userAva}  alt="ava"/>
            {props.isOwner && <input type="file" onChange={savePhoto}></input>}
            <Status status = {props.status} updateMyStatus = {props.updateMyStatus}/>
            {editMode ? <ProfileDataForm profile = {props.profile} error = {props.error} updateMyProfile = {props.updateMyProfile} exitEditMode = {() => {setEditMode(false)}}/> : <ProfileData profile = {props.profile} goToEditMode = {() => {setEditMode(true)}} />}
        </div>
    )
};

const ProfileData = (props) => {
    let jobLabel = ((props.profile.lookingForAJob) ? "https://flyclipart.com/thumb2/blue-tick-clip-art-455823.png" : "https://img2.freepng.ru/20180328/toe/kisspng-mitchell-aluminium-american-red-cross-symbol-clip-wrong-5abc6250e6c9b6.5732349715222953769453.jpg");
    return(
        <div>
            <div className={s.user__name}>{props.profile.fullName}</div>            
            <div className={s.user__description}>{props.profile.aboutMe}</div>
            <div className={s.user__jobfinding}>
                <span>Looking for a job : </span>
                <span className={s.user__answerArea}>                   
                    <img src={jobLabel}></img>                   
                </span>
                {props.profile.lookingForAJob && 
                    <div>
                        <span>Job description:</span> 
                        <span>{props.profile.lookingForAJobDescription}</span>
                    </div>
                }            
            </div>
            <div className="Contacts"><b>Contacts:</b>
                {Object.keys(props.profile.contacts).map(contact=> {
                    return <Contact key={contact} contactName={contact} contactValue={props.profile.contacts[contact]} />
                })}
            </div>
            <button onClick={props.goToEditMode}>Update</button>
        </div>
    )
}

const Contact = ({contactName, contactValue}) => {
    return <div>
                <span>{contactName}:</span><span>{contactValue}</span>
            </div>
}

export default ProfileInfo