import React from "react";
import Profile from './Profile.jsx';
import {connect} from "react-redux";
import {compose} from "redux";
import {showUserInfo, showUserStatus, updateMyStatus, savePhotoProcess, updateMyProfile} from "./../redux/profile-reducer.js";
import withRouter  from "../../WithRouterWrapper";
import {componentWithRedirect} from "../../HOC/WithRedirect";


class ProfileContainer extends React.Component {


   refreshProfile () {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId
        }
        this.props.showUserInfo(userId)
        this.props.showUserStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps) {
        if (this.props.router.params.userId != prevProps.router.params.userId) {
             this.refreshProfile()
        }
       
    }
    
    render() {
        return (
            <Profile {...this.props} profile = {this.props.profile} isOwner = {this.props.autorizedUserId == this.props.router.params.userId} status = {this.props.status} error = {this.props.error} updateMyStatus = {this.props.updateMyStatus} savePhotoProcess = {this.props.savePhotoProcess} updateMyProfile = {this.props.updateMyProfile} />
        )
    }
    
};

let mapStateToProps = (state) => ({
    userId: state.profilePage.userId,
    profile: state.profilePage.profile,
    isLogin: state.auth.isLogin,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
    error: state.profilePage.error

});


export default compose(
    connect(mapStateToProps, {showUserInfo, showUserStatus, updateMyStatus, savePhotoProcess,  updateMyProfile}),
    withRouter,
    componentWithRedirect
)(ProfileContainer)