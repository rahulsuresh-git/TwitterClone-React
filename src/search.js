import React, { Component } from 'react';
import './App.css';
import './Search.css';
import AppBar from 'material-ui/AppBar';
import NavBar from './navBar/navBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeable from 'material-ui/styles/muiThemeable';
import Bar from './searchPage-bar/bar';
import {Tabs, Tab} from 'material-ui/Tabs';


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
        <h1 style={{padding:12,paddingLeft:120,margin:0,color:'#fff',fontSize
      :'30px',fontFamily:'Lato',fontWeight:'bold'}}>nvidia</h1>
        </div> 
<Bar/>

<div class="row">
</div>


</MuiThemeProvider>

  
</div >    );
  }
}

