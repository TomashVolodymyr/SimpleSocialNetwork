// Just for example, this file is unusable

import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status)
    }
    onStateChange = (e) => {
        this.setState({status: e.currentTarget.value});
    }

    componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status)
        {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Not status yet!'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStateChange} autoFocus={true} onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>
                }
            </div>
        )

    }
}

export default ProfileStatus;