import React from 'react';
import logo from './logo.svg';
import Paragraph from "./components/paragraph";
import Line from "./components/line";



function Manifesto() {
  return (
    <div className="Manifesto">
    <Line text = "There aren't enough reasons to hope right now as a student.">
    </Line>


    <Paragraph text = "And you already know this, but your hopes for a normal year basically just got thrown away.  The county is torn apart.  You might even feel like the world is going in the wrong direction, and that you can't do anything but sit there and watch."> 
    </Paragraph>

    <Paragraph text = "But students our age faced this problem before. In the 1960s, young thinkers and activists birthed a counterculture that rejected the same bleak feeling you feel now. They fought for a world that gave them hope. They protested on the streets and rejected the demands of an older generation.  Then, they cast technology out of stuffy research labs and into the hands of the people."> 
    </Paragraph>

    <Line text = "These students demanded that technology shouldn't just be a cold instrument, but that it should be a powerful tool to help you be your best, most enlightened self.">
    </Line>

    <Paragraph text = "Now the products and services that you use don't inspire you anymore. The apps on your phone spies on you. Your most personal information is sold everyday. And when was the last time Facebook or Microsoft released a product that inspired you?"> 
    </Paragraph>

    <Line text = "So we're extending the ideas of past counterculture thinkers to hijack technology for a second time. We believe that technology should be an extension of you.">
    </Line>

    <Line text = "And as a first step, we're starting with a set of tools for your life as a remote student — an iOS app that helps you reclaim your new identity in the online world, with the people you care about.">
    </Line>

    <Line text = "We're a small team of student activists, hackers, scientists, artists and thinkers that have come together to challenge the status quo.">
    </Line>

    <Line text = "We're asking you to challenge this with us — but we could use your help.  We're building just for upperclassmen at UC Berkeley for now — because we're students there too. Sign up for our waitlist today!">
    </Line>


    </div>
  );
}

export default Manifesto;
