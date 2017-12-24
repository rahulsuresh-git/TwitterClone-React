import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import pic from '../pic2.png'


const style = {
    height: 400,
    width: 300,
    marginTop:20,
    marginLeft:-20,
    textAlign: 'left',
    display: 'inline-block',
  };
  
export default class Trends extends Component {
    render() {
        return (
            <div>
            <Paper   style={style} zDepth={2}>
            <h3 style={{paddingLeft:15,display:'inline-block'}}>Trends for you</h3>
            <a href="#" style={{display:'inline-block',fontSize:13,paddingLeft:10}}><p>&bull; Change</p></a>
<div style={{paddingLeft:15}}>
           <a href="#"> <h3>#HondaCity20</h3></a>
           <a href="#"> <h3>#ApolloXCFC</h3></a>
           <a href="#">  <h3>#Dhoni</h3></a>
           <a href="#">  <h3>#Movies</h3></a>
           <a href="#"> <h3>#Weather</h3></a>
           <a href="#"> <h3>#MondayMorning</h3></a>
           <a href="#"> <h3>#RadioFM</h3></a>
           <a href="#">  <h3>#Cyclone</h3></a>

            </div>
           </Paper>
          </div>
                );
  }
}

