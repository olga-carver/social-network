import React from 'react';
import '../src/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router-dom';



const App = (props) => {
  return (
    <div className="app">
      <Header />
      <div className="app-wrapper">
        <Sidebar />
        <div className="app-wrapper-content">
          <Route path='/profile' render={
            () => <Profile store={props.store}/>
            } />
          <Route path='/dialogs' render={
            () => <DialogsContainer store={props.store}
             />} />
        </div>
      </div>
    </div>

  );
}

export default App;
