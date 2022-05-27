import React from "react";
import s from "./Profile.module.css";
import MyPostsContainer from "../Profile/MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {NavLink} from "react-router-dom";


const Profile = (props) => {
    return (
        <div className={s.user_profile}>
            <div>
                <img className={s.profile__background}
                      src="https://themified.com/friend-finder/images/covers/1.jpg">
                </img>
            </div>
            <div className={s.profile__navigation}>
                <ul>
                    <li><NavLink to={"/holder/" + props.profile?.userId}>Info</NavLink></li>
                    <li><NavLink to="/settings">Settings</NavLink></li>
                </ul>
                <button className={s.button}><NavLink to="/people" className={s.button__link}>Add friend</NavLink></button>
            </div>
            <ProfileInfo profile={props.profile} status = {props.status} error = {props.error} updateMyStatus = {props.updateMyStatus} savePhotoProcess = {props.savePhotoProcess} updateMyProfile = {props.updateMyProfile} isOwner = {props.isOwner} />
            <MyPostsContainer />
        </div>
    )
};

export default Profile