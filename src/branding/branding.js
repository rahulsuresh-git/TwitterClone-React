import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

const style = {
    color: '#a0a0a0',
    height: 100,
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    width: 460,
    marginTop: -20,
    marginLeft: -40,
    borderRadius: 10,
    textAlign: 'center',
    display: 'inline-block',
  };
  
export default class Branding extends Component {
  render() {
    return (<div>
        <div className="col-xs-12
        col-sm-8
        col-md-6
        col-lg-12">
          < div className = "box4" >
            <div className="right_down">
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10
                  col-s-12"><br></br>
                <Paper style={style} zDepth={2} >
                  <p>© 2017 Twitter About Help Center Terms Privacy Policy Cookies Ads Info Brand Blog Status Apps Jobs Marketing Businesses Developers</p>
                </Paper>   </div>



            </div>
    </div >
  </div >
</div >
</div>
      
    );
  }
}

