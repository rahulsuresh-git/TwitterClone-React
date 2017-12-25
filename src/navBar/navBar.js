import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Router, Switch, Route, Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import pic from '../images/logo.png'

import SearchBar from 'material-ui-search-bar'

const styles = {
  title: {
    cursor: 'pointer',
  },
};
export default class NavBar extends Component {
  render() {
    return (
      <div style={{}}>
        <AppBar style={{ height: 58, backgroundColor: ' #fff', overflow: 'hidden', textAlign: 'center' }} title={<div style={{ color: '#42B0F4', }}><a href="/"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        </div>}
          showMenuIconButton={true}
          iconElementLeft={<div style={{ padding: 0, paddingLeft: 100 }}><Tabs tabItemContainerStyle={{ height: '50px', width: '425px' }}
            style={{ background: '#42B0F4', fontSize: 10, margin: 'auto' }}
            contentContainerStyle={{ background: '#FFF' }}>

            <Tab
              // icon={<FontIcon color={'#000'} className="material-icons"></FontIcon>}
              label="Home"
              style={{ textTransform: 'capitalize', background: '#fff', color: '#2b2b2b', fontSize: 15 }}

            /> <Tab
              label="Moments"
              style={{ textTransform: 'capitalize', background: '#fff', color: '#2b2b2b', fontSize: 15 }}

            />
            <Tab
              label="Notifications"
              style={{ textTransform: 'capitalize', background: '#fff', color: '#2b2b2b', fontSize: 15 }}

            />
            <Tab
              label="Messages"
              style={{ textTransform: 'capitalize', background: '#fff', color: '#2b2b2b', fontSize: 15 }}

            />

          </Tabs></div>}

          iconElementRight={<div className="right-nav" >
           <div className="search">
              <SearchBar href="/search" id="foo" value=""
                onChange={() => console.log('onChange')}
                onRequestSearch={() =>window.open('/search','_blank')}
                style={{
                  maxWidth: 400,
                  maxHeight: '40px',
                  borderRadius: '30px',
           
                }}
              />
            </div>
            <a href="/search">          <img  className="nav-image" src={pic} />
            </a>
            <div style={{ display: 'inline-block',paddingTop:'10px' }}>
              <RaisedButton backgroundColor='#42B0F4' labelColor='#fff' label="Tweet" buttonStyle={{ borderRadius: 25 }}
                style={{ borderRadius: 30 }} labelStyle={{textTransform:'capitalize',textWeight:'bold'}}

              /></div>

          </div>}>

        </AppBar>
      </div>



    );
  }
}

