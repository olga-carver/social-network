import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfile, getUserStatus, updateUserStatus } from '../../redux/profileReduser';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';




class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId;
    }
    this.props.setProfile(userId);
    this.props.getUserStatus(userId);
  }
              


  render () {  

    return (      
    <div>
      <Profile {...this.props} 
                profile={this.props.profile} 
                updateUserStatus={this.props.updateUserStatus}/>   
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
  connect (mapStateToProps, { setProfile, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
