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

        <div class="titleWrapper">
          <div>
            <h1 className="longReadsTitle">Long Reads</h1>
          </div>
          <div className="horiWrap">
            <hr className="horiRule" color="black"/> 
          </div>
          <div>
            <h1 className="seeAll">See All</h1>  
          </div>      
        </div>

        <div class="longReads">
          <Post description="Crocodile with weird snout found in puddle." image={gharial}/>
          <Post description="Pink octopus goes extinct after last individual dragged through street." image={extinct}/>
          <Post description="Man found innocent of deep frying wife." image={chippydeath}/>
          <Post description="People of Sydney all get caned at same time." image={smoke}/>
          <Post description="Runner guy runs a long way." image={kipchoge}/>
        </div>

        <div class="titleWrapper">
          <div>
            <h1 className="newsBeatTitle">Newsbeat</h1>  
          </div>
          <div  className="horiWrap">
            <hr className="horiRule" color="black"/> 
          </div>
          <div>
            <h1 className="seeAll">See All</h1> 
          </div>               
        </div>

        <div class="newsBeat">
          <Post description="Taylor Swift's tailor arrested for tailing Swift, swiftly." image={swift}/>
          <Post description="Kylie Jenner get's pissed off that she is not 'THE' Kylie we were all thinking of." image={kylie}/>
          <Post description="Russia has a rocket pinched by stray dogs assisted by Pussy Riot" image={rocket}/>
          <Post description="Poop no longer to stick to toilet bowl in new coating shocker!" image={toilet}/>
          <Post description="Two guy's released by the Taliban are 'Well up for a bevvy'." image={talibanhostages}/>
        </div>

      </div>
      
    );
  }
}

export default App;
