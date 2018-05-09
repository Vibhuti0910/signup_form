import React, { Component } from 'react';
import './FormContainer.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import PasswordField from 'material-ui-password-field';
import FlatButton from 'material-ui/FlatButton';

const style = {
  margin: 12,
};

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        fname: '',
        lname: '',
        username : '',
        password : '',
        confirmPassword: ''
      },
    }
      this.handleFName = this.handleFName.bind(this);
      this.handleLName = this.handleLName.bind(this);
      this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
      this.handleUsername = this.handleUsername.bind(this);
  }
  handleFName(e) {
        let value = e.target.value;
      this.setState( prevState => ({ newUser : 
          {...prevState.newUser, Fname: value} 
        }), () => console.log(this.state.newUser))
  }

  handleLName(e) {
        let value = e.target.value;
      this.setState( prevState => ({ newUser : 
          {...prevState.newUser, Lname: value} 
        }), () => console.log(this.state.newUser))
  }

  handleUsername(e) {
    let value = e.target.value;
    this.setState( prevState => ({newUser:
      {...prevState.newUser,username:value}
    }), () => console.log(this.state.newUser))
  }

  handlePassword(e) {
    let value = e.target.value;
    this.setState( prevState => ({newUser:
      {...prevState.newUser,password: value}
    }), () => console.log(this.state.newUser))
  }

  handleConfirmPassword(e) {
    let key = e.which;
    if(key == 13) {
      let value = e.target.value;
      let prevValue = this.state.newUser.password;
      if (value === prevValue) {
        this.setState( prevState => ({newUser:
        {...prevState.newUser,confirmPassword: value}
        }), () => console.log(this.state.newUser))
        alert("password confirmed")
      } else {
      alert(this.state.newUser.password);
    }
    }
    
  }

  render() {
    return(
      <div>
        <form>
            <AppBar
            title="Create your Account"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <TextField className = "fname"
            floatingLabelText="first name"
            onChange = {this.handleFName}
            />

            <TextField
            floatingLabelText="last name"
            onChange = {this.handleLName}
            />

            <br />

            <TextField
            floatingLabelText="username"
            onChange = {this.handleUsername}
            /><br />

            <PasswordField
            hintText="At least 8 characters"
            floatingLabelText="password"
            //errorText="Your password is too short"
            onChange = {this.handlePassword}
            /><br />

            <TextField
            hintText="confirm password"
            floatingLabelText="re-enter password"
            type="password"
            onKeyDown = {this.handleConfirmPassword}
            /><br />

            <FlatButton className = "Sign_in" label="Sign in instead" primary={true} />
            <RaisedButton label="Next" primary={true} style={style} />
        </form>
      </div>

      );
  }
}
export default FormContainer;