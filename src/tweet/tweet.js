import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

export default class Tweet extends Component {
  render() {
    return (
      
      <Card> <img className="user" src="https://www.w3schools.com/howto/img_avatar2.png"></img>
              <CardHeader
                title="User 1"
                subtitle="17th December, 2017"
              />

              <CardMedia
              >
                <img src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/600x400.jpg" alt="" />
              </CardMedia>
              <CardTitle title="" subtitle="" />
              <CardText>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.... <a href="#" >#twitter</a> <a href="#">#reactjs</a><a href="#"> #hasura</a></p>
              </CardText>

            </Card>
    );
  }
}

