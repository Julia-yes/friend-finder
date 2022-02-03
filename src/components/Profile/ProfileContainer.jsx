import React from "react";
import Profile from './Profile.jsx';
import {connect} from "react-redux";
import {compose} from "redux";
import {showUserInfo, showUserStatus, updateMyStatus} from "./../redux/profile-reducer.js";
import withRouter  from "../../WithRouterWrapper";
import {componentWithRedirect} from "../../HOC/WithRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId
        }
        console.log(userId)
        this.props.showUserInfo(userId)
        this.props.showUserStatus(userId)
    }
    render() {
        return (
            <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} updateMyStatus = {this.props.updateMyStatus}/>
        )
    }
    
};

let mapStateToProps = (state) => ({
    userId: state.profilePage.userId,
    profile: state.profilePage.profile,
    isLogin: state.auth.isLogin,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId

});


export default compose(
    connect(mapStateToProps, {showUserInfo, showUserStatus, updateMyStatus}),
    withRouter,
    componentWithRedirect
)(ProfileContainer)