import React from 'react';
import classes from '../src/App.module.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';




const App = () => {
  return (
    <div className={classes.App}>
      <Header />
      <div className={classes.wrapper}>
        <Sidebar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
