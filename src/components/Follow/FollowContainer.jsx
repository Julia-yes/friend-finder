import React from "react";
import Follow from "./Follow.jsx";
import {connect} from "react-redux";
import {addFriend} from "../redux/messages-reducer"

let mapStateToProps = (state) => {
    return {
        names: state.messagesPage.names
    }
}

const FollowContainer = connect(mapStateToProps, {addFriend})(Follow)

export default FollowContainer
