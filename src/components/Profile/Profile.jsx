import React from "react";
import s from "./Profile.module.css";
import MyPostsContainer from "../Profile/MyPosts/MyPostsContainer"
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className="s.user_profile">
            <div>
                <img className={s.profile__background}
                      src="https://themified.com/friend-finder/images/covers/1.jpg">
                </img>
            </div>
            <ProfileInfo profile={props.profile} status = {props.status} updateMyStatus = {props.updateMyStatus}/>
            <MyPostsContainer />
        </div>
    )
};

export default Profile