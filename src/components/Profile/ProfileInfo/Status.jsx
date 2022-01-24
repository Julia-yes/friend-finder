import React from "react";
import s from "./ProfileInfo.module.css";

class Status extends React.Component {
    state = {
        editMode : false,
        status : this.props.status
    };
    activateEditMode = () => {
        this.setState ({
            editMode : true
        })
    };

    deActivateEditMode = () => {
        this.setState ({
            editMode : false
        })
        this.props.updateMyStatus(this.state.status)
    };

    onChangeStatus = (e) => {
        this.setState({
            status : e.currentTarget.value
        })
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render () {
        return (
            <div >
                {this.state.editMode
                ? <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status} />
                : <div onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</div>}
                
            </div>
        )
    }
};

export default Status