import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {isAutorized} from "./../redux/auth-reducer.js"

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.isAutorized()
    }
    render() {
        return <Header {...this.props} />
    }
    
    
}

let mapStateToProps = (state) => ({
    isLogin : state.auth.isLogin,
    login : state.auth.login,
})

export default connect(mapStateToProps, {isAutorized}) (HeaderContainer)