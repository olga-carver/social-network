import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile } from '../../redux/profileReduser';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



 
class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId;
    }
    this.props.setProfile(userId);
    this.props.getUserStatus(userId);
}

componentDidMount() {
    this.refreshProfile();
}

componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId ) {
        this.refreshProfile();
    }
}    


  render () {  

    return (      
    <div>
      <Profile {...this.props} 
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile} 
                updateUserStatus={this.props.updateUserStatus}
                savePhoto={this.props.savePhoto}/>   
                saveProfile={this.props.saveProfile}
    </div>
  );
}
}

let mapStateToProps = (state) => {    
    return {     
      profile: state.profilePage.profile,
      authUserId: state.auth.userId,
      status: state.profilePage.status
    }
}

export default compose (
  connect (mapStateToProps, { setProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
