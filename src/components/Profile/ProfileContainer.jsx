import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfile } from '../../redux/profileReduser';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';




class ProfileContainer extends React.Component {
componentDidMount() {   
    this.props.setProfile(this.props.match.params.userId);
              
}

  render () {      
    return (      
    <div>
      <Profile {...this.props} profile={this.props.profile}/>   
    </div>
  );
}
}

let mapStateToProps = (state) => {    
    return {      
      profile: state.profilePage.profile
    }
}

export default compose (
  connect (mapStateToProps, { setProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
