import React, {useState} from 'react'

const ProfileStatus = (props) =>  {

    let [editMode, setEditMode] = useState(false);
    let [statusValue, setStatusValue] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.putStatus(statusValue)
    };

    const setStatus = (e) => {
        setStatusValue(e.currentTarget.value)
    };

        return (
            <>
                {!editMode ?
                        <span onDoubleClick={activateEditMode}>{props.status}</span> :
                        <input onChange={setStatus} autoFocus={true} onBlur={deactivateEditMode} value={statusValue}/>}
            </>
        )
};

export default ProfileStatus