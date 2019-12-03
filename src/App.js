import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';




const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Sidebar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
