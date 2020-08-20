import React from 'react';
import logo from './logo.svg';
import Paragraph from "./components/paragraph";
import Line from "./components/line";



function Manifesto() {
  return (
    <div className="Manifesto">
    <Line text = "There aren't many reasons to hope right now.">
    </Line>


    <Paragraph text = "Our aspirations as students have been thrown into disarray as we do our best to adjust to our new lives online.  The county is torn apart. And the technology on our phones is increasingly cold and sterile.  It feels like the world is going in the wrong direction, and we can't do anything but sit there and watch."> 
    </Paragraph>

    <Paragraph text = "Students our age faced this problem before.  In the 1960s, young thinkers and activists birthed a counterculture that rejected the same bleak feeling we feel now.  They fought for a world that gave them hope.  They protested on the streets, rejected the demands of an older generation, and cast technology out of bureaucratic research labs and into the hands of the people. "> 
    </Paragraph>

    <Line text = "These students demanded that technology shouldn't merely be an instrument, but that it should be a powerful tool to help you think in new ways.  ">
    </Line>

    <Paragraph text = "Today, the products and services that we use don't inspire us anymore.   The apps on our phones spy on us.  Your most personal information is being sold. When was the last time Facebook or Microsoft released a product that inspired you?"> 
    </Paragraph>

    <Line text = "We're extending the ideas of past counterculture thinkers to hijack technology for a second time.  We believe that technology should be an extension of you.">
    </Line>

    <Line text = "As a first step, we are starting with a set of tools for learning — an interface that helps you with your new identity as a student in the online world.  ">
    </Line>

    <Line text = "We're a small team of activists, hackers, scientists, artists and thinkers that have come together, hopeful as ever, to challenge this status quo.">
    </Line>

    <Line text = "We welcome you to challenge this with us — we could sure use the help. Sign up for our waitlist today! ">
    </Line>


    </div>
  );
}

export default Manifesto;
