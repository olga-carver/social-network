import React from 'react';
import '../src/App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import { Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/SidebarContainer';
import { initializeApp} from './redux/app-reduser';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Preloader from './components/Preloader/Preloader';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();        
}


  render() {   

    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className="app">
        <HeaderContainer store={this.props.store} />
        <div className="app-wrapper">
          <Sidebar store={this.props.store}/>
          <div className="app-wrapper-content">
            <Route path='/profile/:userId?' render={
              () => <ProfileContainer store={this.props.store} />
            } />
            <Route path='/dialogs' render={
              () => <DialogsContainer store={this.props.store}
              />} />
            <Route path='/users' render={
              () => <UsersContainer store={this.props.store}
              />} />
            <Route path='/login' render={
              () => <Login store={this.props.store}
              />} />
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter  
)(App);

