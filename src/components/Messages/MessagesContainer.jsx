import React from "react";
import Messages from "./Messages";
import {connect} from "react-redux";
import {compose} from "redux";
import {addMessage} from "./../redux/messages-reducer.js";
import { componentWithRedirect } from "../../HOC/WithRedirect";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isLogin: state.auth.isLogin
    }
}

export default compose(
connect(mapStateToProps,{addMessage}),
componentWithRedirect
)(Messages)
