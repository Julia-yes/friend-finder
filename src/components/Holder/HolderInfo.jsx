import React from "react";
import s from "./Holder.module.css";
import Preloader from "../Common/preloader";
import Status from "../Profile/ProfileInfo/Status";

const HolderInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    let userAva = ((props.profile.photos.large) ? props.profile.photos.large : "/ava.jpg");
    return (
        <div className={s.user__info}>        
            <img className={s.user__avatar} src = {userAva}  alt="ava"/>
            <div className={s.user__name}>{props.profile.fullName}</div>
            <div className={s.user__status}>Status: "<Status status = {props.status} updateMyStatus = {props.updateMyStatus}/>"</div>           
            <div className={s.user__description}>My description: {props.profile.aboutMe}</div>
            <div className={s.user__jobfinding}>
                <div>Looking for a job : </div>
                <div className={s.user__answerArea}>                   
                    {props.profile.lookingForAJob ? <div> Yes</div> : <div> No</div>}                  
                </div>
                {props.profile.lookingForAJob && 
                    <div>
                        <span>Job description: </span> 
                        <span>{props.profile.lookingForAJobDescription}</span>
                    </div>
                }            
            </div>
            <div className={s.user__contacts}><b>Contacts:</b>
                {Object.keys(props.profile.contacts).filter(filt=>props.profile.contacts[filt] !== null && props.profile.contacts[filt] !== "")
                .map(contact=> {
                    return (
                        <Contact key={contact} contactName={contact} contactValue={props.profile.contacts[contact]} />)
                })}
            </div>
        </div>
    )
};

const Contact = ({contactName, contactValue}) => {
    return <div>
                <span>{contactName}:</span><span>{contactValue}</span>
            </div>
}

export default HolderInfo