import React from 'react';
import logo from './logo.svg';
import './App.css';
import Manifesto from "./manifesto";
import ConfirmButton from './components/cta-button.js';
import MyNavbar from './components/nav.js';
import Divider from './components/divider.js';
import Image from "./image";
import Title from './components/title.js'
import Subtitle from './components/subtitle.js'
import Alert from './components/alert.js'









function App() {
  return (
    <div className="App">
    <Alert text = "NEW:  We've started sending invites out to seniors from UC Berkeley from our waitlist!"></Alert>
    <MyNavbar></MyNavbar>
    <Divider></Divider>


    <Title text = "An Extension of You"></Title>
    <Subtitle text = "A leap forward for college students to win community back."></Subtitle>
    <a href = "https://irisapp.typeform.com/to/aER0lIzm" target = "_blank"> <ConfirmButton text = "Join the Waitlist"></ConfirmButton> </a> 

    <Divider></Divider>

    <Image
      image = "./images/computer@6x.png"
    ></Image>


  
    <Manifesto></Manifesto>
    <a href = "https://irisapp.typeform.com/to/aER0lIzm" target = "_blank"> <ConfirmButton text = "Join the Waitlist"></ConfirmButton> </a> 
    <Divider></Divider>

    </div>
  );
}

export default App;
