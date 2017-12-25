import React, { Component } from 'react';
import './App.css';
import NavBar from './navBar/navBar';
import ProfileCard from './profileCard/profileCard';
import TrendsCard from './trendsCard/trendsCard';
import TweetBox from './tweetBox/tweetBox';
import Tweet from './tweet/tweet';
import Follow from './follow/follow';
import Branding from './branding/branding';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeable from 'material-ui/styles/muiThemeable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <NavBar style={{position:'absolute'}} />
          <br></br>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="
              col-lg-3">
            <div className="box1">
              <ProfileCard />
              <TrendsCard />
            </div>
          </div>
          <div className="
            col-lg-4">
          <div className="box">
            <TweetBox />
         
         <div className="tweets">
            <Tweet />
            <Tweet />
            <Tweet />
            
            </div>
            <br></br>
          
          </div>
      </div>
        <div className="
          col-lg-4">
        < div className="box3" >
        <div class="right">
            <Follow />
            </div>
          <br></br>
          <Branding />
        </div >

        
      </div >
      <div style={{backgroundColor:"#b2b2b2",width:'100vw',textAlign:'center',marginTop:30}}>
            <p style={{color:'#2b2b2b',paddingTop:10,paddingBottom:10}}> The content used in this page is for mockup purposes only. </p>
</div>
</div >
</MuiThemeProvider >
</div >
    );
  }
}

export default App;