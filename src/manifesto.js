import React from 'react';
import logo from './logo.svg';
import Paragraph from "./components/paragraph";
import Line from "./components/line";



function Manifesto() {
  return (
    <div className="Manifesto">
    <Line text = "Assistants were supposed to help students like you.  Seriously.">
    </Line>

    <Line text = "But, we never quite got Jarvis from Iron Man.">
    </Line>


    <Paragraph text = "Instead, Siri tells you what it found on the web.  Alexa tells Jeff Bezos what you found on the web.  You expected more from these products.  You were a kid when they were first released.  And you placed wonder and excitement into imagining a future where our technology was crafted to help us be our best self."> 
    </Paragraph>

    <Line text = "You learned to live with the products you had, and over time, the term personal assistant got a bad rap.">
    </Line>

    <Paragraph text = "Now, an assistant sounds more like a fancy butler than something you can see yourself needing.  On top of that, you're busier than you ever were before.  The word has lost it's touch.  It's lost the joy, and even if you had the time to care, you wouldn't. "> 
    </Paragraph>

    <Paragraph text = "Iris is a second chance to fall in love with the word assistant.   It's how it should have been built from the beginning, dead simple, and its deeply yours.  It's your starter pack for your life as a student, pandemic and all. "> 
    </Paragraph>

    <Line text = "And we're starting somewhere you spend a lot of time in.  The kitchen, making food for yourself and others.">
    </Line>


    <Line text = "Sign up for our waitlist, please.  We're accepting students in small groups so we can deliver a stellar, crafted experience, and white glove service from the whole team.">
    </Line>

    </div>
  );
}

export default Manifesto;
