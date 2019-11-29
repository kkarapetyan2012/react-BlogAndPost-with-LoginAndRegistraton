import React, { useState } from 'react';
import Nav from './screens/Nav/Nav';
import Home from './screens/Home/Home';
import Registration from './screens/Registration/Registration';
import Login from './screens/Login/Login';
import './App.css';

function App() {

  const [tab, setTab] = useState({tab: 'HOME'})

  const changeTab = (tab) => {
    setTab({tab: tab})
  }


  return (
    <div className="App">
      <div className="container">

        <Nav changeTab={changeTab} />

        {(tab.tab === "HOME") ? <Home /> : <Login />}

      </div>
    </div>
  );
}

export default App;
