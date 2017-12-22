import React, { Component } from 'react';
import Paper from 'material-ui/Paper';


const style = {
    height: 55,
    width: 300,
    marginTop:20,
    marginLeft:-20,
    textAlign: 'left',
    display: 'inline-block',
  };
  
export default class Filter extends Component {
    render() {
        return (
            <div>
            <Paper style={style} zDepth={2} >
            <h3 style={{paddingLeft:15,display:'inline-block'}}>Search Filters</h3>
            <a href="#" style={{display:'inline-block',fontSize:13,paddingLeft:10}}><p>&bull;	 Show</p></a>
            </Paper>
          </div>
                );
  }
}

