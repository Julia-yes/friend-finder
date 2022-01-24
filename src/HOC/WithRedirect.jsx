import React  from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

let mapStateToPropsForRedirect = (state) => ({
    isLogin: state.auth.isLogin
})

export const componentWithRedirect = (Component) => {
    class WithRedirect extends React.Component {
        render() {
            if (!this.props.isLogin) return <Navigate replace to="/login" />
            return <Component {...this.props}/>
            }
    }
    return connect (mapStateToPropsForRedirect)(WithRedirect)
}
    
    