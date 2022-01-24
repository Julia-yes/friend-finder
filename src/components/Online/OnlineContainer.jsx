import React from "react";
import Online from "./Online.jsx";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        names: state.messagesPage.names
    }
}

const OnlineContainer = connect(mapStateToProps)(Online)

export default OnlineContainer
