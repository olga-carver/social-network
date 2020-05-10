import React from 'react';
import classes from '../Profile/Profile.module.scss';



class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    onUserStatusChange = (e) => {
        this.setState({
            status:  e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {        

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
    }
}

    render() {
        return (
            <div>                
               { !this.state.editMode &&
                    <div className={classes.status}>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
                    </div>
                }
                { this.state.editMode &&
                    <div>
                        <textarea className={classes.newStatus} onChange={this.onUserStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></textarea>
                    </div>
                }
            </div>
                
         )
        
    }
        
}

export default ProfileStatus;