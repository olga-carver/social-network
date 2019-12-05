import React from 'react';
import '../src/App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialog from './components/Dialogs/Dialogs';




const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="app-wrapper">
        <Sidebar />
        <div className="app-wrapper-content">
          {/* <Dialog /> */}
          <Profile />
        </div>

      </div>
    </div>
  );
}

export default App;
