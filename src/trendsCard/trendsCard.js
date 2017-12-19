import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

export default class TrendsCard extends Component {
  render() {
    return (
      
        <Card>
        
         <CardMedia
         >
         </CardMedia>
         <CardTitle title="Trends for You" subtitle="" />
         <CardText>
        <a href="#">   <div className="hash">
           <h3>#Idhayane</h3>
           <h3>#5DaysForSPPR</h3>
           <h3>#SportLooksGoodOnDelhi</h3>
           <h3>#LifestyleOnlineSale</h3>
           <h3>TZH ADVANCE BOOKING STARTS</h3>
           <h3>#OPPODelhiTimesFreshFace</h3>
           <h3>#SundayMorning</h3>
           </div></a>
         </CardText>

       </Card>
    );
  }
}

