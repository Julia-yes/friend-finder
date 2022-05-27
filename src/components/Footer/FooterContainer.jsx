import React from "react";
import Footer from "./Footer";
import {connect} from "react-redux";

class FooterContainer extends React.Component {
    render() {
        return <Footer {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isLogin : state.auth.isLogin,
    login : state.auth.login,
    profile : state.profilePage.profile,       
})

export default connect(mapStateToProps, {}) (FooterContainer)