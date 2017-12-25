import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import pic from '../images/logo.png'



export default class ProfileCard extends Component {
    render() {
      return (
        <Card className='profile' style={{width:300,marginLeft:-20}}>
        <CardHeader

          avatar={pic}
        />
        <CardMedia
        >
          <img src="https://pbs.twimg.com/profile_banners/2835933973/1512129066/1500x500" alt="" />
        </CardMedia>
        <CardTitle subtitleColor="#fff" titleColor="#fff" title="TechInfinity" subtitle="@TechInfinityOfc" />
        <CardText color="#fff">
          <div className="row" id="first">
            <div className="col-lg-4">
            <h3>Tweets</h3>
            <a href="#">    <h2>138</h2></a>
            </div>
            <div className="col-lg-4">
              <h3>Following</h3>
              <a href="#">    <h2>501</h2></a>
            </div>
            <div className="col-lg-4">
              <h3>Followers</h3>
              <a href="#">     <h2>620</h2></a>
            </div>
          </div>
        </CardText>

      </Card>
      );
    }
  }
  
  