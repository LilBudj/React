import React, {useState, useEffect} from 'react'
import style from './ProfileInfo.module.css'

const ProfileStatus = (props) =>  {

    let [editMode, setEditMode] = useState(false);
    let [statusValue, setStatusValue] = useState(props.status);
    useEffect(()=>{
        setStatusValue(props.status)
    },[props.status]);

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
                        <span className={style.status} onDoubleClick={activateEditMode}>{props.status}</span> :
                        <input onChange={setStatus} autoFocus={true} onBlur={deactivateEditMode} value={statusValue}/>}
            </>
        )
};

export default ProfileStatus