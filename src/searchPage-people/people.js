import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

const style = {
    height: 300,
    width: 295,
    marginTop:0,
    marginLeft:-90,
    textAlign: 'left',
    display: 'inline-block',
  };
  const style2 = {
    height: 300,
    width: 295,
    marginTop:0,
    paddingLeft:0,
    marginLeft:-110,
    textAlign: 'left',
    display: 'inline-block',
  };
  
  
export default class Filter extends Component {
    render() {
        return (
            <div >
                <div class="row">
                <div class="col-lg-6 col-sm-12 padding-0">
            <Paper style={style} zDepth={2} >
            <Card >
        <CardHeader
          title="NVIDIA"
          subtitle="@nvidia"
          avatar="https://pbs.twimg.com/profile_images/467079983936970752/LUOWehvo_400x400.jpeg"
        />            <a href="#" style={{display:'inline-block',paddingBottom:15,paddingLeft:15}}> 
         <p className="followingbutton" >Following</p></a>
    
        <CardMedia
        >
          <img src="https://pbs.twimg.com/profile_banners/61559439/1494888580/1500x500" alt="" />
        </CardMedia>
        <CardText >
        The official handle for NVIDIA. Blog: http://blogs.nvidia.com  Support: http://nvda.ws/2ei5pio  All NVIDIA Social…
        </CardText>
      
      </Card>
           
           
            </Paper>
            </div>
            <div class="col-lg-6 col-sm-12 padding-0">
            <div style={{paddingLeft:75,display:'inline-block'}}>
            <Paper style={style2}  zDepth={2} >
           
            <Card style={{height:328}}>
        <CardHeader
          title="NVIDIA AI"
          subtitle="@NvidiaAI"
          avatar="https://pbs.twimg.com/profile_images/877294444554231809/Wcem1g-S_400x400.jpg"
        />            <a href="#" style={{display:'inline-block',paddingBottom:15,paddingLeft:15}}> 
         <p className="followbutton" >Follow</p></a>
    
        <CardMedia
        >
          <img src="https://pbs.twimg.com/profile_banners/740238495952736256/1512365626/1500x500" alt="" />
        </CardMedia>
        <CardText >
        Solving the unsolvable with deep learning!
        
                </CardText>
      
      </Card>
            </Paper>
            </div>
            </div>
            </div>
          </div>
                );
  }
}

