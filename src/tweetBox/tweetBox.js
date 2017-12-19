import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { orange500, blue500 } from 'material-ui/styles/colors';

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
export default class TweetBox extends Component {
    render() {
        return (

            <div className="search">
                <div className="tweet">
                    <TextField
                        hintText=""
                        hintStyle={styles.floatingLabelFocusStyle}
                        floatingLabelText="What's happening?"
                        floatingLabelStyle={styles.floatingLabelFocusStyle}
                    /> <br />
                    <div className="tweet2">
                        <RaisedButton backgroundColor='#42B0F4' labelColor='#fff' label="Tweet" buttonStyle={{ borderRadius: 25 }}
                            style={{ borderRadius: 25, margin: 12, }}

                        /></div>

                </div>
          </div>


                );
  }
}

