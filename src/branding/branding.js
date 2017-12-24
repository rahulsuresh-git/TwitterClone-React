import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

const style = {
    color: '#a0a0a0',
    height: 150,
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    width: 305,
    marginTop: -20,
    marginLeft: 60,
    borderRadius: 10,
    textAlign: 'left',
    display: 'inline-block',
    fontSize:'15px'
  };
  
export default class Branding extends Component {
  render() {
    return (<div>
        <div className="col-xs-12
        col-sm-8
        col-md-6
        col-lg-12">
          < div className = "box4" >
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10
                  col-s-12"><br></br>
                <Paper style={style} zDepth={2} >
                  <p>© 2017 Twitter About Help Center Terms Privacy Policy Cookies Ads Info Brand Blog Status Apps Jobs Marketing Businesses Developers</p>
                  <hr style={{width:400,color:"#d3d3d3", borderTop: '0px',height: '1px',marginTop:20,backgroundColor:"#h3h3h3"}}></hr>
<a href="#"><i  style={{paddingRight:5}}class="fa fa-share-square-o" aria-hidden="true"></i>
<p>Advertise with Twitter</p></a>
                </Paper>   </div>



    </div >
  </div >
</div >
</div>
      
    );
  }
}

