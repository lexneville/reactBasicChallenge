import React from 'react';
import './App.css';
import Post from './components/post';
import chippydeath from "./images/chippydeath.jpg";
import extinct from "./images/extinct.jpg";
import gharial from "./images/gharial.jpg";
import kipchoge from "./images/kipchoge.jpg";
import kylie from "./images/kylie.jpg";
import rocket from "./images/rocket.jpg";
import smoke from "./images/smoke.jpg";
import swift from "./images/swift.jpg";
import talibanhostages from "./images/talibanhostages.jpg";
import toilet from "./images/toilet.jpg";

class App extends React.Component {
  render() {
    return (
      <div class="page">
        <div class="longReadsTitle">
          
        </div>
        <div class="longReads">
          <Post description="Crocodile with weird snout found in puddle." category="Nature" image={gharial}/>
          <Post description="Pink octopus goes extinct after last individual dragged through street." category="Nature" image={extinct}/>
          <Post description="Man deep fries wife." category="Business" image={chippydeath}/>
          <Post description="People of Sydney all get caned at same time." category="Environment" image={smoke}/>
          <Post description="Runner guy runs a long way." category="Sport" image={kipchoge}/>
        </div>
        <div class="newsBeatTitle">
          
          
        </div>
        <div class="newsBeat">
          <Post description="Taylor Swift's tailor arrested for tailing Swift, swiftly." category="Entertainment" image={swift}/>
          <Post description="Kylie Jenner get's pissed off that she is not 'THE' Kylie we were all thinking of." category="Entertainment" image={kylie}/>
          <Post description="Russia has a rocket pinched by stray dogs assisted by Pussy Riot" category="Technology" image={rocket}/>
          <Post description="Poop no longer to stick to toilet bowl in new coating shocker!" category="Technology" image={toilet}/>
          <Post description="Two guy's released by the Taliban are 'Well up for a bevvy'." category="Middle East" image={talibanhostages}/>
        </div>
      </div>
      
    );
  }
}

export default App;
