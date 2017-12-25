import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

const style = {
    height: 300,
    width: 605,
    marginLeft:-90,
    marginTop:40,
    marginBottom:100,
    textAlign: 'left',
    display: 'inline-block',
  };
  
  
export default class Tweet extends Component {
    render() {
        return (
            <div >
                <div class="row">
                <div class="col-lg-12 col-sm-12 padding-0">
            <Paper style={style} zDepth={2} >
            <Card >
        <CardHeader
          title="NVIDIA Geforce UK"
          subtitle="@nvidia"
          avatar="https://pbs.twimg.com/profile_images/839768582162640897/W8WI5fPX_400x400.jpg"

        />            
     <CardText >
         <div style={{color:'grey'}}>
             <p>5:03PM 17th December, 2017</p>
             </div>
         <div>
    <a href="#">#GTXmas</a> Day 7. The final day! 
     
     Win a GeForce GTX 1070 Ti!
     
     To enter:
     RT this tweet 💚  
     </div>      </CardText>
        <CardMedia
        >
          <img src="https://pbs.twimg.com/media/DRpiPZbX4AAHFk-.jpg:large" alt="" />
        </CardMedia>
       
      <div className="tweetfunctions" style={{color:'grey',padding:'10px 10px 10px 20px',fontWeight:'bold'}}><a className="comment" href="#">
      <i style={{fontSize:20,paddingRight:10}}
       class="fa fa-comment-o" aria-hidden="true"></i><p style={{paddingRight:40}}>403</p></a>
       
       <a className="retweet" href="#"><i style={{fontSize:20,paddingRight:10}}
        class="fa fa-retweet" aria-hidden="true"></i><p style={{paddingRight:40}}>206</p></a>
        
      <a className="like" href="#">  <i style={{fontSize:20,paddingRight:10}}
        class="fa fa-heart-o" aria-hidden="true"></i><p style={{paddingRight:40}}>821</p></a>
        <a className="dm" href="#">  
        <i style={{fontSize:20,paddingRight:10}} 
        class="fa fa-envelope-o" aria-hidden="true"></i></a>
        
        
       
</div>
      </Card>
           
           
            </Paper>
            </div>
           
            </div>
          </div>
                );
  }
}

