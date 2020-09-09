import React from 'react';
import logo from './logo.svg';
import './App.css';
import Manifesto from "./manifesto";
import ConfirmButton from './components/cta-button.js';
import MyNavbar from './components/nav.js';
import Divider from './components/divider.js';
import Image from "./image";
import SplitImage from "./split-img";

import Title from './components/title.js'
import Subtitle from './components/subtitle.js'
import Alert from './components/alert.js'









function App() {
  return (
    <div className="App">
    <Alert text = "NEW:  We've started sending invites out to seniors from UC Berkeley from our waitlist!"></Alert>
    <MyNavbar></MyNavbar>


    <Title text = 'YOUR TOOL TO MAKE THE MOST OF YOUR TIME IN ONLINE SCHOOL.'></Title>
    <Subtitle text = "Your new life online got real stressful, and it's week 3.  Iris helps you stay close to your friends and on top of your work.   "></Subtitle>
    <a href = "https://irisapp.typeform.com/to/aER0lIzm" target = "_blank"> <ConfirmButton text = "Join the Waitlist"></ConfirmButton> </a> 

    {/* <Divider></Divider> */}

{/*     
    <Image
      image = "./images/computer@6x.png"
    ></Image> */}

       
    <SplitImage
      image1 = "./images/computer@2x.png"
      image2 = "./images/oski@2X.png"
    ></SplitImage> 


  
    <Manifesto></Manifesto>
    <a href = "https://irisapp.typeform.com/to/aER0lIzm" target = "_blank"> <ConfirmButton text = "Join the Waitlist"></ConfirmButton> </a> 
    <Divider></Divider>

    </div>
  );
}

export default App;
