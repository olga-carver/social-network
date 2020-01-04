import React from 'react';
import '../src/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';



const App = (props) => {
  return (
    <div className="app">
      <Header />
      <div className="app-wrapper">
        <Sidebar />
        <div className="app-wrapper-content">
          <Route path='/profile' render={
            () => <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText} />} />
          <Route path='/dialogs' render={
            () => <Dialogs
              dialogsPage={props.state.dialogsPage} 
              sendMessage={props.sendMessage}
              updateNewMessageText={props.updateNewMessageText}/>} />
        </div>
      </div>
    </div>

  );
}

export default App;
