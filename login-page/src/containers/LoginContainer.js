import React, { Component } from 'react';
import './LoginContainer.css';
import { Route , Link } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import PasswordField from 'material-ui-password-field';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';

const style = {
  margin: 12,
};

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        fname: '0',
        lname: '0',
        username : '0',
        password : '0',
        confirmPassword: '0',
        fname_error:'',
        lname_error:'',
        username_error: '',
        password_error:'',
        confirmPassword_error:''
      }
    }
      this.handleFName = this.handleFName.bind(this);
      this.handleLName = this.handleLName.bind(this);
      this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
      this.handleUsername = this.handleUsername.bind(this);
      this.handleNext = this.handleNext.bind(this);
  }
  handleFName(e) {
    let value = e.target.value;  
    if(value.length<1) {
      this.setState( prevState => ({newUser:
        {fname_error : 'this field is required'}}));
    } else {
      this.setState( prevState => ({ newUser : 
      {...prevState.newUser, Fname: value, fname_error : ''} 
      }), () => console.log(this.state.newUser))
    }
  }

  handleLName(e) {
      let value = e.target.value;  
    if(value.length<1) {
      this.setState( prevState => ({newUser:
        {lname_error : 'this field is required'}}));
    } else {
      this.setState( prevState => ({ newUser : 
      {...prevState.newUser, Fname: value, lname_error : ''} 
      }), () => console.log(this.state.newUser))
    }
  }


  handleUsername(e) {
    let value = e.target.value;
    let alphabet = value
    alphabet = alphabet.replace(/[^a-zA-Z]+/g,"");
    if(alphabet.length>0) { //contains at least one alphabet
      if(value.length >2 && value.length <31) {
          this.setState( prevState => ({ newUser : 
          {...prevState.newUser, Lname: value, username_error: ''}
          }), () => console.log(this.state.newUser))
      } else {
        this.setState( prevState => ({newUser: {
          username_error: 'length must be between 3 to 30 characters'}
          }), () => console.log(this.state.newUser.username_error))
      }
    } else {
      this.setState( prevState => ({newUser: {
        username_error: 'There must be atleast one character'}
        }), () => console.log(this.state.newUser.username_error))
    }
  }

  handlePassword(e) {
    let value = e.target.value;
    if(value.length < 8) {
      this.setState( prevState => ({newUser: {
        password_error: 'password must have at least 8 characters'}
      }),
       () => console.log(this.state.newUser.password_error))
          }
   else {
      this.setState( prevState => ({newUser:
      {...prevState.newUser,password: value,password_error:''}
      }), () => console.log(this.state.newUser))
    }
    
  }

  handleConfirmPassword(e) {
    let value = e.target.value;
    let prevValue = this.state.newUser.password;
    if (value === prevValue) {
      this.setState( prevState => ({newUser:
      {...prevState.newUser,confirmPassword: value,confirmPassword_error:''}
      }), () => console.log(this.state.newUser))
      
    } else {
    this.setState( prevState => ({newUser: {
      confirmPassword_error: 'password does not match'}
      }), () => console.log(this.state.newUser.confirmPassword_error))
    }
    
  }

  handleNext(e) {
    e.preventDefault();
    var params = {
        username: this.state.newUser.username,
        password: this.state.newUser.password,
        fname: this.state.newUser.fname,
        lname: this.state.newUser.lname
    }
    axios.post('https://miteventbooking.herokuapp.com/signup', params)
    .then(function(resp) {
        console.log(resp.data.code);
        if(resp.data.code ==='success') {
          alert('account created')
        } else {
          alert('please try again ');
        }
    })
    .catch(function(err) {
        alert("request couldn't be made", err)
    })
    
}

  render() {
    return(
      <div>
        <form className = "signup" onSubmit = {this.handleNext}>
            <AppBar
            title="Create your Account"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <TextField className = "fname"
            floatingLabelText="first name"
            errorText= {this.state.newUser.fname_error}
            onBlur = {this.handleFName}
            required
            />
            <br />

            <TextField
            floatingLabelText="last name"
            errorText= {this.state.newUser.lname_error}
            onBlur = {this.handleLName}
            required
            />

            <br />

            <TextField
            floatingLabelText="username"
            errorText= {this.state.newUser.username_error}
            onBlur = {this.handleUsername}
            required
            /><br />
            <div className = "username">You can use letters,numbers and periods.</div>

            <PasswordField
            hintText = "Atleast 8 characters"
            floatingLabelText="password"
            errorText= {this.state.newUser.password_error}
            onChange = {this.handlePassword}
            required
            />
            <br />

            <PasswordField
            floatingLabelText="confirm password"
            errorText= {this.state.newUser.confirmPassword_error}
            type="password"
            onBlur = {this.handleConfirmPassword}
            required
            /><br />

            <Link to = "/login"><FlatButton className = "Sign_in" label="Sign in instead" primary={true} /></Link>
            <RaisedButton type = "submit" label="Next" primary={true} style={style} />
        </form>
      </div>

      );
  }
}
export default LoginContainer;

