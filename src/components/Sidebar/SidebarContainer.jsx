import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import { getAuthUserData } from '../../redux/auth-reduser';

class SidebarContainer extends React.Component {

  render() {
    return <Sidebar {...this.props}/>
    
  }
}

let mapStateToProps= (state) => {
    return {
        userId: state.auth.userId
    }
}

export default connect(mapStateToProps, { getAuthUserData })(SidebarContainer);