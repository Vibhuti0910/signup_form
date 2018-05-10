import React, { Component } from 'react';
import './LoginContainer.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import PasswordField from 'material-ui-password-field';
import FlatButton from 'material-ui/FlatButton';

const style = {
  margin: 12,
};

class LoginContainer extends Component {
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
      username: {errorText: ''},
      password: {errorText: ''},
      confirmPassword: {errorText: ''}

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
    let key = e.which
    let value = e.target.value;
        if(key == 13) {
          
          let alphabet = /^[a-zA-Z]+$/; //regular expression
          if(value.match(alphabet)) { //contains at least one alphabet
            if(value.length >5 && value.length <31) {
                this.setState( prevState => ({ newUser : 
                {...prevState.newUser, Lname: value} 
                }), () => console.log(this.state.newUser))
            } else {
              this.setState( prevState => ({username: {
                errorText: 'length must be between 6 to 30 characters'}
                }), () => console.log(this.state.username.errorText))
            }
          } else {
            this.setState( prevState => ({username: {
              errorText: 'There must be atleast one character'}
              }), () => console.log(this.state.username.errorText))
            }
          }
  }

  handlePassword(e) {
    let value = e.target.value;
    let key = e.which;
    if(key == 13) {
      if(value.length < 8) {
        this.setState( prevState => ({password: {
          errorText: 'password must have at least 8 characters'}
        }),
         () => console.log(this.state.password.errorText))
            }
      } else {
        this.setState( prevState => ({newUser:
        {...prevState.newUser,password: value}
        }), () => console.log(this.state.newUser))
      }
    
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
        
      } else {
      this.setState( prevState => ({confirmPassword: {
        errorText: 'password does not match'}
        }), () => console.log(this.state.confirmPassword.errorText))
      }
    }
    
  }

  render() {
    return(
      <div>
        <MuiThemeProvider>
        <form className = "signup">
            <AppBar
            title="Create your Account"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <TextField className = "fname"
            floatingLabelText="first name"
            onChange = {this.handleFName}
            />
            <br />

            <TextField
            floatingLabelText="last name"
            onChange = {this.handleLName}
            />

            <br />

            <TextField
            floatingLabelText="username"
            errorText= {this.state.username.errorText}
            onKeyDown = {this.handleUsername}
            /><br />

            <PasswordField
            hintText="At least 8 characters"
            floatingLabelText="password"
            errorText= {this.state.password.errorText}
            onChange = {this.handlePassword}
            /><br />

            <TextField
            hintText="confirm password"
            floatingLabelText="re-enter password"
            errorText= {this.state.confirmPassword.errorText}
            type="password"
            onKeyDown = {this.handleConfirmPassword}
            /><br />

            <FlatButton className = "Sign_in" label="Sign in instead" primary={true} />
            <RaisedButton label="Next" primary={true} style={style} />
        </form>
        </MuiThemeProvider>
      </div>

      );
  }
}
export default LoginContainer;