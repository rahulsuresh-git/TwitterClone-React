import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

export default class Follow extends Component {
    render() {
        return (
<div>
            <div className="row">
            <div className="col-lg-6">
              <h2>Who to follow  &middot;  </h2>
            </div>
            <div className="col-lg-3">
              <a href="#"> <br></br>  <p>Refresh</p></a> &middot;
    </div>
            <div className="col-lg-2">
              <a href="#"><br></br> <p>View All</p></a>
            </div>

          </div>
          <div className="row">
            <div className="col-lg-3">
              <img className="follow" src="https://www.w3schools.com/howto/img_avatar2.png"></img>
            </div>
            <div className="col-lg-2">
              <h4>User3</h4>
            </div>
            <div className="col-lg-4">
              <br></br><p>@AwesomeUser3</p>
            </div>
            <div className="col-lg-3" >
              <a href="#">  <p className="followbutton">+Follow</p>
              </a>  </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <img className="follow" src="https://www.w3schools.com/howto/img_avatar2.png"></img>
            </div>
            <div className="col-lg-2">
              <h4>User4</h4>
            </div>
            <div className="col-lg-4">
              <br></br><p>@AwesomeUser4</p>
            </div>
            <div className="col-lg-3" >
              <a href="#">  <p className="followbutton">+Follow</p>
              </a>  </div>
          </div>

          <div className="row">
            <div className="col-lg-3">
              <img className="follow" src="https://www.w3schools.com/howto/img_avatar2.png"></img>
            </div>
            <div className="col-lg-2">
              <h4>User5</h4>
            </div>
            <div className="col-lg-4">
              <br></br><p>@AwesomeUser5</p>
            </div>
            <div className="col-lg-3" >
              <a href="#">  <p className="followbutton">+Follow</p>
              </a>
              </div>
              </div>
              </div>
    );
    }
}

