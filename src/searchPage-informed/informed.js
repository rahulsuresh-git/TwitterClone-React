import React, { Component } from 'react';
import Paper from 'material-ui/Paper';


const style = {
    height: 250,
    width: 600,
    marginTop:20,
    marginLeft:-90,
    textAlign: 'left',
    display: 'inline-block',
  };
  
export default class Informed extends Component {
    render() {
        return (
            <div>
            <Paper style={style} zDepth={2} >
            <a href="#"><p style={{display:'inline-block',color:"grey",paddingLeft:570,paddingTop:10}}>&#x2715;   </p>   </a>
<div style={{lineHeight:'8px',paddingLeft:65,paddingTop:10,paddingBottom:0,marginBottom:0,display:'inline-block'}}><h1>Stay informed about: nvidia</h1><br></br>
<p style={{color:'grey',fontSize:15}}>Top Tweets from this topic will appear on your timeline.
</p>
<br></br>
<a href="#">  <p style={{marginTop:50,padding:'15px 30px 15px 30px'}}className="followbutton">Follow search</p></a>


</div>
            </Paper>
          </div>
                );
  }
}

