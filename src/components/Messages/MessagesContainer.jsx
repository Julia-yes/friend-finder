import Messages from "./Messages";
import {connect} from "react-redux";
import {compose} from "redux";
import {addMessage} from "./../redux/messages-reducer.js";
import {componentWithRedirect} from "../../HOC/WithRedirect";



let mapStateToProps = (state, ownProps) => {    
    return {}
}

const MessagesContainer = compose(
connect(mapStateToProps,{addMessage}),
componentWithRedirect
)(Messages)

export default MessagesContainer
