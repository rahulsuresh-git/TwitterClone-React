import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { orange500, blue500 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';

const styles = {
    errorStyle: {
      color: orange500,
    },
    underlineStyle: {
      borderColor: orange500,
    },
    floatingLabelStyle: {
      color: orange500,
    },
    floatingLabelFocusStyle: {
      color: blue500,
    },
  };
  const btnStyle =
  {
    margin: 12,
    borderRadius: 30,

  };

  const style = {
    height: 125,
    width: 600,
    marginLeft:0,
    paddingLeft:10,
    marginTop:-10,
    marginBottom:-30,
    textAlign: 'center',
    display: 'inline-block',
  };
export default class TweetBox extends Component {
    render() {
        return (

            <div className="search">
                <Paper style={style} zDepth={2} >
                    <TextField style={{width:500}}
                        hintText=""
                        hintStyle={styles.floatingLabelFocusStyle}
                        floatingLabelText="What's happening?"
                        floatingLabelStyle={styles.floatingLabelFocusStyle}
                    /> <br />
                    <div className="tweet2">
                        <RaisedButton backgroundColor='#42B0F4' labelColor='#fff' label="Tweet" buttonStyle={{ borderRadius: 25 }}
                            style={{ borderRadius: 25, marginLeft:260, }} labelStyle={{textTransform:'capitalize',textWeight:'bold'}}

                        /></div>
<a href="#"><div className='see-new'> 
  <p>See new tweets</p>
  </div></a>
                </Paper>
              
          </div>


                );
  }
}

