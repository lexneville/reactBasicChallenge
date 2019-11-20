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
          <Post description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image={gharial}/>
          <Post description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image={extinct}/>
          <Post description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image={chippydeath}/>
          <Post description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image={smoke}/>
          <Post description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image={kipchoge}/>
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
          <Post description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image={swift}/>
          <Post description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image={kylie}/>
          <Post description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image={rocket}/>
          <Post description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image={toilet}/>
          <Post description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." image={talibanhostages}/>
        </div>

      </div>
      
    );
  }
}

export default App;
