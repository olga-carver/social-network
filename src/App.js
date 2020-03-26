import React from 'react';
import '../src/App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import { Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/SidebarContainer';




const App = (props) => {
  return (
    <div className="app">
      <HeaderContainer store={props.store} />
      <div className="app-wrapper">
        <Sidebar store={props.store}/>
        <div className="app-wrapper-content">
          <Route path='/profile/:userId?' render={
            () => <ProfileContainer store={props.store} />
          } />
          <Route path='/dialogs' render={
            () => <DialogsContainer store={props.store}
            />} />
          <Route path='/users' render={
            () => <UsersContainer store={props.store}
            />} />
          <Route path='/login' render={
            () => <Login store={props.store}
            />} />

        </div>
      </div>
    </div>

  );
}

export default App;
