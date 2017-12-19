import React, { Component } from 'react';
import '../App.css';
import '../Search.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class Bar extends Component {
    render() {
        return (
           <div>
<AppBar  style={{height:56,backgroundColor:' #fff',overflow:'hidden',textAlign:'center'}}

    iconElementLeft={<div style={{padding:0,paddingLeft:100}}>


<Tabs  tabItemContainerStyle={{width: '600px'}}
>    <Tab
      label="Top"
      style={{textTransform:'capitalize',background:'#fff',color:'#2b2b2b',fontSize:15}}
      
    />
    <Tab
      label="Latest"
      style={{textTransform:'capitalize',background:'#fff',color:'#2b2b2b',fontSize:15}}
      
    />
    <Tab
      label="People"
      style={{textTransform:'capitalize',background:'#fff',color:'#2b2b2b',fontSize:15}}
      
    />
    <Tab
      label="Photos"
      style={{textTransform:'capitalize',background:'#fff',color:'#2b2b2b',fontSize:15}}
      
    />
    <Tab
      label="Videos"
      style={{textTransform:'capitalize',background:'#fff',color:'#2b2b2b',fontSize:15}}
      
    />
    <Tab
      label="News"
      style={{textTransform:'capitalize',background:'#fff',color:'#2b2b2b',fontSize:15}}
      
    />
    <Tab
      label="Broadcasts"
      style={{textTransform:'capitalize',background:'#fff',color:'#2b2b2b',fontSize:15}}
      
    />
  </Tabs>
    </div>}
    iconElementRight={<div></div>}
  />
               
           </div>
);
    }
}