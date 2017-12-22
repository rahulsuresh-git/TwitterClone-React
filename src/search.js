import React, { Component } from 'react';
import './App.css';
import './Search.css';
import AppBar from 'material-ui/AppBar';
import NavBar from './navBar/navBar';
import Filter from './searchPage-filter/filter';
import Follow from './searchPage-follow/follow';
import TrendsCard from './searchPage-trends/trends';
import Informed from './searchPage-informed/informed';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Bar from './searchPage-bar/bar';
import { Tabs, Tab } from 'material-ui/Tabs';


const styles = {
  title: {
    cursor: 'pointer',
  },
};
export default class Search extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>

          <NavBar />
          <div className="search-word">
            <h1 style={{
              padding: 12, paddingLeft: 120, margin: 0, color: '#fff', fontSize
                : '30px', fontFamily: 'Lato', fontWeight: 'bold'
            }}>nvidia</h1>
          </div>
          <Bar />

          <div className="row">
            <div className="col-lg-1">
            </div>
            <div className="col-xs-12
              col-sm-8
              col-md-6
              col-lg-3">
<Filter /> 
<Follow/>
<TrendsCard/>
<div style={{lineHeight:2,paddingTop:20,fontSize:13,textAlign:'left',color:"#3c3c3c"}}>
  <p>© 2017 Twitter About Help Center Terms <br></br>Privacy policy Cookies Ads info</p>
  </div>
              </div>
            <div className="col-xs-12
              col-sm-8
              col-md-6
              col-lg-4">            
<Informed/>
<h3 style={{marginLeft:-70}}>People</h3>              
              </div>
            <div className="col-xs-12
              col-sm-8
              col-md-6
              col-lg-4">            <p>hi</p>
              </div>
          </div>

        </MuiThemeProvider>


      </div >);
  }
}

