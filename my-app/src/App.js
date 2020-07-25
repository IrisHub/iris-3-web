import React from 'react';
import logo from './logo.svg';
import './App.css';
import Manifesto from "./manifesto";
import ConfirmButton from './components/cta-button.js';
import MyNavbar from './components/nav.js';
import Divider from './components/divider.js';






function App() {
  return (
    <div className="App">
    <MyNavbar></MyNavbar>
    <Manifesto></Manifesto>
    <ConfirmButton text = "Sign Up Here"></ConfirmButton>
    <Divider></Divider>

    </div>
  );
}

export default App;
