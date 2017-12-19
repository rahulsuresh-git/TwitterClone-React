import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { Router, Switch, Route, Link } from 'react-router';

export default class NavBar extends Component {
  render() {
    return (
      <Tabs tabItemContainerStyle={{height: '50px',width:'500px'}}
      style={{background: '#42B0F4',fontSize:10,margin:'auto'}}
      contentContainerStyle={{background: '#FFF'}}>
              
        <Tab
          // icon={<FontIcon className="material-icons"></FontIcon>}
          label="Home"
         style={{textTransform:'capitalize',background:'#42B0F4',fontSize:15}}
    
        /> <Tab
        label="Moments"
        style={{textTransform:'capitalize',background:'#42B0F4',fontSize:15}}
        
      />
        <Tab
          label="Notifications"
          style={{textTransform:'capitalize',background:'#42B0F4',fontSize:15}}
          
        />
        <Tab
          label="Messages"
          style={{textTransform:'capitalize',background:'#42B0F4',fontSize:15}}
          
        />
        
      </Tabs>
    );
  }
}

