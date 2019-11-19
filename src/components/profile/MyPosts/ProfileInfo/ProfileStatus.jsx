import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        statusValue: this.props.status
    };

    activateEditMode = () => {
        this.setState({editMode: true})
    };

    deactivateEditMode = () => {
        this.props.putStatus(this.state.statusValue);
        this.setState({editMode: false});
    };

    setStatus = (event) => {
        let value = event.currentTarget.value;
        this.setState({
            statusValue: value
        })
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status){
            this.setState({
                statusValue: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode ?
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span> :
                        <input onChange={this.setStatus} onBlur={this.deactivateEditMode} value={this.state.statusValue}/>}
            </>
        )
    }
};

export default ProfileStatus