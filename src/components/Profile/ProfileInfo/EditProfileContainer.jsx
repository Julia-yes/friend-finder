import React from "react";
import s from "./ProfileInfo.module.css";
import Status from "./Status";
import ProfileDataForm from "./ProfileDataForm";
import {connect} from "react-redux";
import {updateMyStatus, updateMyProfile, savePhotoProcess} from "./../../redux/profile-reducer.js";

class EditProfileContainer extends React.Component {
    render() {
        return <EditProfileInfo {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        profile : state.profilePage.profile,  
        status: state.profilePage.status,
        error: state.profilePage.error
        }
}

export default connect(mapStateToProps, {updateMyStatus, updateMyProfile, savePhotoProcess})(EditProfileContainer);

const EditProfileInfo = (props) => {    
    const savePhoto = (e) => {
        if (e.target.files.length) {
            props.savePhotoProcess(e.target.files[0])            
        }
    }
    return (
        <div className={s.user__info_edit}>        
            <img className={s.user__avatar_edit} src = {props.profile.photos.large}  alt="ava"/>
            <div className={s.input_file}>
                <label for="input_file" className={s.input_file__label}>                    
                    <span className={s.button}>
                    <img className={s.input_file__img} src="https://mywebicons.ru/i/png/f30b972d8fdd608f176e92761fb4ea32.png"></img>
                    Change main photo</span>                    
                </label>
                <input className={s.input_file__input} type="file" id="input_file" onChange={savePhoto} ></input>
            </div>                     
            <ProfileDataForm profile = {props.profile} error = {props.error} updateMyProfile = {props.updateMyProfile} />
        </div>
    )
};
