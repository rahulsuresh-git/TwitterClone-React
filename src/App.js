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
          <NavBar />
          <br></br>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-xs-12
              col-sm-8
              col-md-6
              col-lg-3">
            <div className="box1">
              <ProfileCard />
              <br></br>
              <TrendsCard />
              <br></br><br></br>
            </div>
          </div>
          <div className="col-xs-12
            col-sm-8
            col-md-6
            col-lg-4">
          <div className="box">
            <TweetBox />
            <br></br>
            <Tweet />
            <br></br>
            <Tweet />
            <br></br>
          </div>
      </div>
        <div className="col-xs-12
          col-sm-8
          col-md-6
          col-lg-4">
        < div className="box3" >
          <div className="right">
            <Follow />
          </div>
          <br></br>
          <Branding />
        </div >
      </div >
</div >
</MuiThemeProvider >
</div >
    );
  }
}

export default App;