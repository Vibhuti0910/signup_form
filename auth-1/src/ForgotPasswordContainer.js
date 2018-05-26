import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'

import './ForgotPasswordContainer.css'
import headerbg from './header-bg.jpeg';

const paperStyle = {
  padding: 30,
  textAlign: 'center',
  display: 'inline-block',
  minHeight: 470,
  maxWidth: 315,
  borderBottom: '6px solid #00bcd4',
};

class ForgotPasswordContainer extends Component {

	constructor (props) {
    super(props)
    this.changeUsername = this.changeUsername.bind(this)
    this.handleForgotPasswordSubmit = this.handleForgotPasswordSubmit.bind(this)

    this.state = {
      username: ''
    }
  }

  	changeUsername (e) {
    this.setState({ username: e.target.value })
  }

  	handleForgotPasswordSubmit (e) {

  	}

	render() {
		return (
      <div className="row authPage">
      <div className="col-md-4 offset-md-7 rightPane">
        <Paper zDepth={5} style={paperStyle}>
            <div>
              	  <div style={{display: 'flex', alignItems: 'space-between'}}>
              	  <form onSubmit={this.handleForgotPasswordSubmit}>
              	  	<h2 className="paperTitle">Forgot Password</h2>
              	  	<p className="paperTitle">No worries! We'll help you retrieve your account.</p>
              	  		<div className="fieldsContainer">
              	  			<TextField hintText="Email" value={this.state.username} onChange={this.changeUsername} required />
              	  			<RaisedButton className="submitButton" type="submit" label="Submit" primary={true}  />	
              	  		</div>

              	  		<br /><br /><br /> <p>Back</p>
              	  </form>
              	  </div>
            </div>
          </Paper>
      </div>
      </div>
    )
	}
}


export default ForgotPasswordContainer;