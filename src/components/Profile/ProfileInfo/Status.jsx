import React from "react";
import { useState } from "react";
import s from "./ProfileInfo.module.css";

const Status = (props) => {
    

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
            setEditMode(true)
    };

    const deActivateEditMode = () => {
       setEditMode(false)
       props.updateMyStatus(status)
    };

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }

        return (
            <div >
                {editMode
                ? <input onChange={onChangeStatus} autoFocus={true} onBlur={deActivateEditMode} value={status} />
                : <div onDoubleClick={activateEditMode}>{props.status || "No status"}</div>}
                
            </div>
        )
};

export default Status