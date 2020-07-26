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
    <a href = "https://irissuggestions.typeform.com/to/FuP4UNp9" target = "_blank"> <ConfirmButton text = "Sign Up Here"></ConfirmButton> </a> 
    <Divider></Divider>

    </div>
  );
}

export default App;
