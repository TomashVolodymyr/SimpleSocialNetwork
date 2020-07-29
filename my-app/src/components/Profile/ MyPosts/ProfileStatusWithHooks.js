import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)},
        [props.status]
    );

    const activateMode = () => {
        setEditMode(true);
    }
    const deactivateMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

        return (
            <div>
                { !editMode &&
                <div>
                    <span onDoubleClick={activateMode}>{props.status || 'Not status yet!'}</span>
                </div>
                }
                { editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateMode} onChange={onStatusChange} value={status}/>
                </div>
                }
            </div>
        )
}

export default ProfileStatusWithHooks;