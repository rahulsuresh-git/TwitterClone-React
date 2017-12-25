import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import pic from '../images/user.png'


const style = {
    height: 400,
    width: 300,
    marginTop:20,
    marginLeft:-20,
    textAlign: 'left',
    display: 'inline-block',
    color:"#fff",
    
  };
  
export default class Filter extends Component {
    render() {
        return (
            <div >
            <Paper  style={style} zDepth={2} className="followpaper" >
            <h3 style={{paddingLeft:15,display:'inline-block'}}>Who to follow</h3>
            <a href="#" style={{display:'inline-block',fontSize:13,paddingLeft:10}}><p>&bull; Refresh</p></a>
            <a href="#" style={{display:'inline-block',fontSize:13,paddingLeft:10}}><p>&bull; View All</p></a>
            <br></br>
            <img src={pic} style={{paddingLeft:15,paddingRight:15,display:'inline-block',float:'left'}}></img>
            <p style={{display:'inline-block',fontWeight:'bold',paddingRight:15}}>User3</p> 
            <p style={{display:'inline-block',color:"white"}}>@AwesomeUser3</p> 
            <a href="#"><p style={{display:'inline-block',color:"#d3d3d3",paddingLeft:10}}>&#x2715; 
</p> 
</a>
            <br></br>
            <a href="#">  <p className="followbutton">Follow</p></a>
    
            <br></br>
            <hr style={{width:265,color:"#d3d3d3", borderTop: '0px',height: '1px',marginTop:20,backgroundColor:"#h3h3h3"}}></hr>
            <br></br>


            <img src={pic} style={{paddingLeft:15,paddingRight:15,display:'inline-block',float:'left'}}></img>
            <p style={{display:'inline-block',fontWeight:'bold',paddingRight:15}}>User4</p> 
            <p style={{display:'inline-block',color:"white"}}>@AwesomeUser4</p> 
            <a href="#"><p style={{display:'inline-block',color:"#d3d3d3",paddingLeft:10}}>&#x2715; 
</p> 
</a>
            <br></br>
            <a href="#">  <p className="followbutton">Follow</p></a>
            <br></br>
            <hr style={{width:265,color:"#d3d3d3", borderTop: '0px',height: '1px',marginTop:20,backgroundColor:"#h3h3h3"}}></hr>
            <br></br>
            <img src={pic} style={{paddingLeft:15,paddingRight:15,display:'inline-block',float:'left'}}></img>
            <p style={{display:'inline-block',fontWeight:'bold',paddingRight:15}}>User5</p> 
            <p style={{display:'inline-block',color:"white"}}>@AwesomeUser5</p> 
            <a href="#"><p style={{display:'inline-block',color:"#d3d3d3",paddingLeft:10}}>&#x2715; 
</p> 
</a>
            <br></br>
            <a href="#">  <p className="followbutton">Follow</p></a>
            <br></br>
            <hr style={{width:265,color:"#d3d3d3", borderTop: '0px',height: '1px',marginTop:20,backgroundColor:"#h3h3h3"}}></hr>
<a href="#"><p style={{fontSize:13,color:"#42B0F4",paddingLeft:15}}>Connect other address books</p></a>
            </Paper>
          </div>
                );
  }
}

