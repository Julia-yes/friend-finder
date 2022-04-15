import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutProcess} from "./../redux/auth-reducer.js"

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isLogin : state.auth.isLogin,
    login : state.auth.login,
    profile : state.profilePage.profile,       
})

export default connect(mapStateToProps, {logoutProcess}) (HeaderContainer)