import React from 'react';
import '../src/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';



const App = (props) => {
debugger;
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app-wrapper">
          <Sidebar />
          <div className="app-wrapper-content">
            <Route path='/profile' render={
              () => <Profile
                postData={props.state.profilePage.postData} />} />
            <Route path='/dialogs' render={
              () => <Dialogs
                messagesData={props.state.dialogsPage.messagesData}
                dialogsData={props.state.dialogsPage.dialogsData} />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
